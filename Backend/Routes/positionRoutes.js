const express =require("express");
const routes = express.Router();
const {Position} =require("../Controllers/positionControllers");
const { authenticate } = require("../middleware/Authmiddleware");

routes.use(authenticate);
routes.get("/allPositions",Position);

module.exports =routes;