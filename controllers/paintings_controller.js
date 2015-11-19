'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let Painting = require('../models/paintings.js');

router.route('/index')
  .get( (req, res) => {
    console.log('PAINTING INDEX ROUTE')

    Painting.find( null, (error, painting) => {
      if (error) throw error;

      console.log(painting);

      res.json(painting);
    });
  });

router.route('/create')
  .post( (req,res) => {
    console.log('SAVING PAINTING ROUTE');
  })


module.exports = router;
