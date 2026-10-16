const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "your email address"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "enter your username"],
    unique: true,
    trim: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: [true, "enter your strong password"],
    minlength: 8,
    maxlength: 72,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//ways to hash the pasword
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { userSchema };
