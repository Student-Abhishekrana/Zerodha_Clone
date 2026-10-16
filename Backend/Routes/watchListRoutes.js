const express =require("express");
const routes =express.Router();
const {WatchList} =require("../Controllers/watchListControllers");
const { authenticate } = require("../middleware/Authmiddleware");

routes.use(authenticate);
routes.get("/allWatchList",WatchList);

module.exports =routes;