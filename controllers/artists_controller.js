'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let Artist = require('../models/artists.js');

router.route('/')
  .get( (req,res) => {
    console.log('viewing all artists')
    Artist.find(null, (err, artist) => {

      res.json(artist)
    })

  });

router.route('/edit/:id')
  .post( (req,res) => {
    //get the artist parameters from the URL/request.
    let artistParams = req.body.params;

    Artist.findByIdAndUpdate(artistParams.id,
       {$set: artistParams},
       (error, artist) =>{
         if(error) throw error;
         res.json(artist);
    })
  });

  router.route('/show/:id')
    .get( (req, res) => {
      //Get the artist parameters from the URL/request.
      let artistParams = req.body.params;

      Artist.findOne({artistParams}, (error, artist) => {
        if(error) throw error;

        res.json(artist);
      })
    })



module.exports = router;
