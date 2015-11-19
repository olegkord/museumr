'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let Artist = require('../models/artists');
let Painting = require('../models/paintings');

router.route('/home')
  .get( (req,res) => {
    console.log('Home Route');

    res.send('Route: "/" yay.');
  });

module.exports = router;
