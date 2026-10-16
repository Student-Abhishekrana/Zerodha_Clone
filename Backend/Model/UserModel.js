const { model } = require("mongoose");

const { userSchema } = require("../Schema/UserSchema");

const userModel = new model("User", userSchema);

module.exports = { userModel };
