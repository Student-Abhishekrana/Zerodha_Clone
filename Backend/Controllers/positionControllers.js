const {PositionModel} =require("../Model/PositionModel");

module.exports.Position = async (req, res, next) => {
  try {
    const positions = await PositionModel.find({ userId: req.user._id });
    return res.json(positions);
  } catch (error) {
    return next(error);
  }
};