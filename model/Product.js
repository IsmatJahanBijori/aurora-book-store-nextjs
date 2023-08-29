const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  id: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: { type: Number, default: 1 },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    // required: true,
  },
  edition: {
    type: String,
    // required: true,
  },
  language: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },

}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema)