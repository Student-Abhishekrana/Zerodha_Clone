const { userModel } = require("../Model/UserModel");
const { createSecretToken } = require("../Util/secretToken");
const bcrypt = require("bcryptjs");

const setAuthCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
};

module.exports.signUp = async (req, res, next) => {
  try {
    const email =
      typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const username =
      typeof req.body?.username === "string" ? req.body.username.trim() : "";
    const password =
      typeof req.body?.password === "string" ? req.body.password : "";

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "Email, username, and password are required",
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address" });
    }
    if (username.length > 50) {
      return res.status(400).json({ message: "Username must be 50 characters or fewer" });
    }
    if (password.length < 8 || Buffer.byteLength(password, "utf8") > 72) {
      return res.status(400).json({
        message: "Password must be at least 8 characters and no more than 72 bytes",
      });
    }

    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({ message: "Email or username already exists" });
    }

    const user = new userModel({ email, username, password });
    await user.save();
    const token = createSecretToken(user._id);
    setAuthCookie(res, token);

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email or username already exists" });
    }
    return next(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const email =
      typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const password =
      typeof req.body?.password === "string" ? req.body.password : "";

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);
    setAuthCookie(res, token);

    return res.json({ message: "User logged in", success: true });
  } catch (error) {
    return next(error);
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  return res.json({ success: true });
};
