var mongoose = require('mongoose');

// Product Schema
var productSchema = mongoose.Schema({
  sku: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number    
  },
  upc: {
    type: String
  },
  category: {
    type: Array
  },
  shipping: {
    type: Number,
    default: 0.00
  },
  url: {
    type: String
  },
  image: {
    type: String
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Product = module.exports = mongoose.model('products', productSchema);

// Get Products
module.exports.getProducts = (callback, limit) => {
  Product.find(callback).limit(limit);
};

// Single product
module.exports.getProductBySku = (skuNo, callback) => {
  Product.findOne({sku: skuNo}, callback);
};