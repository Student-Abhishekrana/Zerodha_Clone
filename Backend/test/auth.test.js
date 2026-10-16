const assert = require("node:assert/strict");
const test = require("node:test");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { OrderModel } = require("../Model/OrderModel");
const { holdingsModel } = require("../Model/HoldingsModel");
const { PositionModel } = require("../Model/PositionModel");
const { userModel } = require("../Model/UserModel");
const { addNewOrders, displayAllOrders } = require("../Controllers/orderControllers");
const { allHoldings } = require("../Controllers/holdingControllers");
const { Position } = require("../Controllers/positionControllers");
const { authenticate } = require("../middleware/Authmiddleware");
const { createSecretToken, getTokenKey } = require("../Util/secretToken");
const { resolveMongoSrv } = require("../Util/mongoDns");

const responseMock = () => ({
  statusCode: 200,
  body: undefined,
  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  },
  json(body) {
    this.body = body;
    return this;
  },
});

test("JWT signing requires a sufficiently long TOKEN_KEY", () => {
  const previousKey = process.env.TOKEN_KEY;
  try {
    delete process.env.TOKEN_KEY;
    assert.throws(() => getTokenKey(), /unique random secret/);
    process.env.TOKEN_KEY = "short";
    assert.throws(() => getTokenKey(), /unique random secret/);
    process.env.TOKEN_KEY =
      "replace-with-a-unique-random-secret-at-least-32-characters";
    assert.throws(() => getTokenKey(), /unique random secret/);
    process.env.TOKEN_KEY = "a".repeat(32);
    assert.equal(getTokenKey(), "a".repeat(32));

    const token = createSecretToken("user-id");
    assert.equal(
      jwt.verify(token, getTokenKey(), { algorithms: ["HS256"] }).id,
      "user-id",
    );
  } finally {
    if (previousKey === undefined) {
      delete process.env.TOKEN_KEY;
    } else {
      process.env.TOKEN_KEY = previousKey;
    }
  }
});

test("authentication rejects signed tokens with invalid user IDs", async () => {
  const previousKey = process.env.TOKEN_KEY;
  process.env.TOKEN_KEY = "a".repeat(32);
  const response = responseMock();

  try {
    const token = jwt.sign({ id: "not-an-object-id" }, getTokenKey(), {
      algorithm: "HS256",
      expiresIn: "3d",
    });
    let nextCalled = false;
    await authenticate(
      { cookies: { token } },
      response,
      () => {
        nextCalled = true;
      },
    );

    assert.equal(response.statusCode, 401);
    assert.equal(nextCalled, false);
  } finally {
    if (previousKey === undefined) {
      delete process.env.TOKEN_KEY;
    } else {
      process.env.TOKEN_KEY = previousKey;
    }
  }
});

test("authentication attaches the verified user to the request", async () => {
  const previousKey = process.env.TOKEN_KEY;
  const originalFindById = userModel.findById;
  const user = {
    _id: new mongoose.Types.ObjectId(),
    username: "test-user",
    email: "test@example.com",
  };
  process.env.TOKEN_KEY = "a".repeat(32);
  const response = responseMock();
  let nextCalled = false;

  try {
    userModel.findById = () => ({
      select: async () => user,
    });
    const token = createSecretToken(user._id);
    const request = { cookies: { token } };

    await authenticate(request, response, () => {
      nextCalled = true;
    });

    assert.equal(nextCalled, true);
    assert.equal(request.user, user);
  } finally {
    userModel.findById = originalFindById;
    if (previousKey === undefined) {
      delete process.env.TOKEN_KEY;
    } else {
      process.env.TOKEN_KEY = previousKey;
    }
  }
});

test("authenticated account reads filter by owner", async () => {
  const userId = new mongoose.Types.ObjectId();
  const originalFind = [
    [OrderModel, OrderModel.find],
    [holdingsModel, holdingsModel.find],
    [PositionModel, PositionModel.find],
  ];
  const seenFilters = [];
  const records = [{ _id: new mongoose.Types.ObjectId() }];
  const response = responseMock();

  try {
    for (const [model] of originalFind) {
      model.find = async (filter) => {
        seenFilters.push(filter);
        return records;
      };
    }

    const request = { user: { _id: userId } };
    await displayAllOrders(request, responseMock(), assert.fail);
    await allHoldings(request, responseMock(), assert.fail);
    await Position(request, response, assert.fail);

    assert.deepEqual(
      seenFilters,
      Array.from({ length: 3 }, () => ({ userId })),
    );
    assert.deepEqual(response.body, records);
  } finally {
    for (const [model, originalFindMethod] of originalFind) {
      model.find = originalFindMethod;
    }
  }
});

test("new orders are saved with the authenticated owner", async () => {
  const userId = new mongoose.Types.ObjectId();
  const originalSave = OrderModel.prototype.save;
  const response = responseMock();
  let savedOrder;

  try {
    OrderModel.prototype.save = async function save() {
      savedOrder = this;
      return this;
    };

    await addNewOrders(
      {
        user: { _id: userId },
        body: { name: "INFY", price: 1200, qty: 2, mode: "BUY" },
      },
      response,
      assert.fail,
    );

    assert.equal(response.statusCode, 201);
    assert.equal(String(savedOrder.userId), String(userId));
    assert.equal(savedOrder.name, "INFY");
  } finally {
    OrderModel.prototype.save = originalSave;
  }
});

test("portfolio schemas require an owner", async () => {
  const invalidOrders = new OrderModel({ name: "INFY", price: 100, qty: 1 });
  const invalidHoldings = new holdingsModel({ name: "INFY", qty: 1 });
  const invalidPositions = new PositionModel({ name: "INFY", qty: 1 });

  await assert.rejects(invalidOrders.validate(), (error) =>
    Boolean(error.errors.userId),
  );
  await assert.rejects(invalidHoldings.validate(), (error) =>
    Boolean(error.errors.userId),
  );
  await assert.rejects(invalidPositions.validate(), (error) =>
    Boolean(error.errors.userId),
  );
});

test("MongoDB SRV lookup retries on configured DNS servers when system DNS refuses", async () => {
  const calls = [];
  let servers;
  const dnsClient = {
    promises: {
      async resolveSrv(record) {
        calls.push(record);
        if (calls.length === 1) {
          const error = new Error("DNS request refused");
          error.code = "ECONNREFUSED";
          throw error;
        }
        return [{ name: "cluster-shard.example.mongodb.net", port: 27017 }];
      },
    },
    setServers(value) {
      servers = value;
    },
  };

  await resolveMongoSrv(
    "mongodb+srv://cluster.example.mongodb.net/app",
    { dnsClient, fallbackServers: ["192.0.2.53"] },
  );

  assert.deepEqual(calls, [
    "_mongodb._tcp.cluster.example.mongodb.net",
    "_mongodb._tcp.cluster.example.mongodb.net",
  ]);
  assert.deepEqual(servers, ["192.0.2.53"]);
});
