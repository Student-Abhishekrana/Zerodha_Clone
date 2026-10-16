
const {OrderModel} = require("../Model/OrderModel");

module.exports.displayAllOrders = async (req, res, next) => {
  try {
    const orders = await OrderModel.find({ userId: req.user._id });
    return res.json(orders);
  } catch (error) {
    return next(error);
  }
};


module.exports.addNewOrders = async (req, res) => {
  try {
    const { name, price, qty, mode } = req.body;

    const numericPrice = Number(price);
    const numericQty = Number(qty);
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({ message: "Stock name is required" });
    }
    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      return res.status(400).json({ message: "Price must be greater than zero" });
    }
    if (!Number.isInteger(numericQty) || numericQty < 1) {
      return res.status(400).json({ message: "Quantity must be a whole number of at least 1" });
    }
    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({ message: "Order mode must be BUY or SELL" });
    }

    const newOrder = new OrderModel({
      name: name.trim(),
      price: numericPrice,
      qty: numericQty,
      mode,
      userId: req.user._id,
    });

    await newOrder.save();
    return res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    return next(error);
  }
};
