const { model } = require("mongoose");

const { HoldingSchema } = require("../Schema/HoldingSchema");

const holdingsModel = new model("holdings", HoldingSchema);

module.exports = { holdingsModel };
