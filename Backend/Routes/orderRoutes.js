const express = require("express");

const routes = express.Router();

const {displayAllOrders,addNewOrders} =require("../Controllers/orderControllers");
const { authenticate } = require("../middleware/Authmiddleware");

routes.use(authenticate);

routes.get("/allorders",displayAllOrders);

routes.post("/newOrder", addNewOrders);

module.exports =  routes ;
