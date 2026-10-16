const { model } = require("mongoose");
const { OrderSchema } = require("../Schema/OrderSchema");

const OrderModel = new model("orders", OrderSchema);
module.exports = { OrderModel };
