'use strict';

let mongoose = require('mongoose');

let Painting = new mongoose.Schema({
  title: String,
  img_url: String,
  year_made: String
});

module.exports = mongoose.model('Painting',Painting);
