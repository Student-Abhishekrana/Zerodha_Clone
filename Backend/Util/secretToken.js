require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.getTokenKey = () => {
  const tokenKey = process.env.TOKEN_KEY?.trim();
  if (
    !tokenKey ||
    Buffer.byteLength(tokenKey, "utf8") < 32 ||
    /replace-with|change-me|your[-_ ]secret|example[-_ ]secret/i.test(tokenKey)
  ) {
    throw new Error(
      "TOKEN_KEY is missing or invalid. Set a unique random secret of at least 32 characters in Backend/.env. Generate one with: node -e \"console.log(require('crypto').randomBytes(48).toString('base64url'))\"",
    );
  }
  return tokenKey;
};

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id: String(id) }, module.exports.getTokenKey(), {
    algorithm: "HS256",
    expiresIn: "3d",
  });
};
