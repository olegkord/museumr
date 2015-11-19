'use strict';

let mongoose = require('mongoose');

let Artist = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: String,
  description: String,
})

module.exports = mongoose.model('Artist',Artist);
