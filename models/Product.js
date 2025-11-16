// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // e.g. "/images/milk.jpg"
  category: { type: String, required: true },
  description: { type: String, default: 'Fresh farm product' },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
