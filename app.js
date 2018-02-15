const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/products');
var db = mongoose.connection;

// main
app.get('/', (req, res) => {
  res.send('hello world');
  console.log("running port 3000");
});

app.listen(3000);
