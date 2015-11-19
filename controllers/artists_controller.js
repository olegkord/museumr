'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let artistEvent = require('../models/artists.js');

router.route('/view')
  .get( (req,res, next) => {
    console.log('viewwwing')
    res.send('Route: "/" Hellooo Artist');
  })



module.exports = router;
