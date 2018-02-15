const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

Product = require('./models/product');

mongoose.connect('mongodb://localhost/products');
var db = mongoose.connection;

// main
app.get('/', (req, res) => {
  res.send('hello world');
  console.log("running port 3000");
});

// Get all products
app.get('/api/products', (req,res) => {
  Product.getProducts(function(err, products) {
    if(err) throw err;
    res.json(products);
  });
});

// Get Product by SKU
app.get('/api/products/:_sku', (req,res) => {
  Product.getProductBySku(req.params._sku, function(err, product) {
    if(err) throw err;
    res.json(product);
  });
});

app.listen(3000);
