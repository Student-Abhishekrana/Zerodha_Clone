const { model } = require("mongoose");

const { WatchListSchema } = require("../Schema/WatchListSchema");

const watchListModel = new model("watchList", WatchListSchema);

module.exports = { watchListModel };
