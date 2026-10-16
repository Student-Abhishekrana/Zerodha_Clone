const { watchListModel } = require("../Model/WatchListModel");

module.exports.WatchList = async (req, res, next) => {
  try {
    const watchlist = await watchListModel.find({});
    return res.json(watchlist);
  } catch (error) {
    return next(error);
  }
};
