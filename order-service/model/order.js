const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {},
  { collection: "orders" }
);

module.exports = mongoose.model("orders", OrderSchema, "orders");