'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let Artist = require('../models/artists.js');

router.route('/view')
  .get( (req,res, artist) => {
    console.log('viewwwing')
    Artist.find(null, (err, artist) => {

      res.json(artist)
    })



  });



module.exports = router;
