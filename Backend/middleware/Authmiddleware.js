require("dotenv").config();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { userModel } = require("../Model/UserModel");
const { getTokenKey } = require("../Util/secretToken");

module.exports.authenticate = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  let tokenKey;
  try {
    tokenKey = getTokenKey();
  } catch (error) {
    return next(error);
  }

  try {
    const data = jwt.verify(token, tokenKey, { algorithms: ["HS256"] });
    if (typeof data.id !== "string" || !mongoose.isValidObjectId(data.id)) {
      return res.status(401).json({ message: "Invalid session" });
    }

    const user = await userModel.findById(data.id).select("_id username email");
    if (!user) {
      return res.status(401).json({ message: "Invalid session" });
    }

    req.user = user;
    return next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({ message: "Invalid or expired session" });
    }
    return next(error);
  }
};
