'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let app = require('../server.js');

let Artist = require('../models/artist');
let Painting = require('../models/painting');

router.route('/home')
  .get( (req,res) => {
    console.log('Home Route');

    res.send('Route: "/" yay.');
  });

module.exports = router;
