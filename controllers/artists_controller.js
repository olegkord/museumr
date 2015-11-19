'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let Artist = require('../models/artists.js');

router.route('/view')
  .get( (req,res) => {
    console.log('viewwwing')
    Artist.find(null, (err, artist) => {

      res.json(artist)
    })

  });

router.route('/edit')
  .post( (req,res) => {
    let artistParams = req.body.params;

    Artist.findByIdAndUpdate(artistParams.id,
       {$set: artistParams},
       (error, artist) =>{
         if(error) throw error;

         res.json(artist);
    })
  })

  router.route('/')



module.exports = router;
