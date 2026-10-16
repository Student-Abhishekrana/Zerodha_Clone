const express =require("express");
const {allHoldings} =require("../Controllers/holdingControllers");
const { authenticate } = require("../middleware/Authmiddleware");

const routes = express.Router();

routes.use(authenticate);
routes.get("/allHoldings",allHoldings);

module.exports =routes;