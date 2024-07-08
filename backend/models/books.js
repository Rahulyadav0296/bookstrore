const mongoose = require("mongoose");

const Books = new mongoose.Schema({
  title: String,
  auther: String,
  genre: String,
  description: String,
  price: Number,
  quantity: { type: Number, default: 1 },
  image: String,
});

module.exports = mongoose.model("Books", Books);
