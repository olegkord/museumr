'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

let Painting = require('../models/paintings.js');

router.route('/index')
  .get( (req, res) => {
    console.log('PAINTING INDEX ROUTE')
    debugger;
    Painting.find( null, (error, painting) => {
      if (error) throw error;

      console.log(painting);

    })

  })


module.exports = router;
