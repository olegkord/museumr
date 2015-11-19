'use strict';

let mongoose = require('mongoose');

let Artist = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: String,
  description: String,
  paintings: [{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Painting'
  }]
})

module.exports = mongoose.model('Artist',Artist);
