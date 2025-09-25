const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['hydraulic', 'roomless', 'gearless', 'gearbox'] },
  image: { type: String, required: true },
  drive: { type: String, required: true },
  power: { type: Number, required: true }, // اصلاح شد
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
