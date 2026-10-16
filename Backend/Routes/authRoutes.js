const express = require("express");

const routes = express.Router();
const { signUp, Login, logout } = require("../Controllers/authController");
const { authenticate } = require("../middleware/Authmiddleware");

routes.post("/user_SignUp", signUp);
routes.post("/user_Login", Login);
routes.get("/me", authenticate, (req, res) => {
  res.json({ user: req.user });
});
routes.post("/logout", logout);

module.exports = routes;
