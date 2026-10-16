require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const { getTokenKey } = require("./Util/secretToken");
getTokenKey();

const allowedOrigins = (
  process.env.CLIENT_ORIGINS || "http://localhost:3000,http://localhost:3001"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);
app.use(cookieParser());

const mongoose = require("mongoose");
const { resolveMongoSrv } = require("./Util/mongoDns");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGODB_URL?.trim();

if (!url) {
  throw new Error("MONGODB_URL is missing. Add it to Backend/.env");
}

const orders = require("./Routes/orderRoutes");
const holdings = require("./Routes/holdingRoutes");
const positions = require("./Routes/positionRoutes");
const watchList = require("./Routes/watchListRoutes");
const authRoutes = require("./Routes/authRoutes");


app.use(express.json({ limit: "10kb" }));

app.use("/auth", authRoutes);

app.use("/orders", orders);
app.use("/holdings", holdings);
app.use("/positions", positions);
app.use("/watchList", watchList);

//  global error handler

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  return res.status(500).json({ message: "Internal Server Error" });
});

const startServer = async () => {
  await resolveMongoSrv(url);
  await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
  console.log("DB Connected");
  app.listen(PORT, () => {
    console.log(`App Started on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Backend startup failed:", error);
  process.exitCode = 1;
});
