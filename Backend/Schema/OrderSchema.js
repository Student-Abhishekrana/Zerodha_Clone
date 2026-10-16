const { Schema } = require("mongoose");
const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  name: String,
  price: Number,
  qty: Number,
  mode: String,
});

module.exports = { OrderSchema };