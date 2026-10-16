const {holdingsModel} = require("../Model/HoldingsModel");

module.exports.allHoldings = async (req, res, next) => {
  try {
    const holdings = await holdingsModel.find({ userId: req.user._id });
    return res.json(holdings);
  } catch (error) {
    return next(error);
  }
};
