'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let Artist = require('../models/artists.js');

//VIEW ALL ARTISTS!!
router.route('/')
  .get( (req,res) => {
    console.log('viewing all artists');
    Artist.find(null, (err, artist) => {

      res.json(artist)
    });
  });


//CREATE ARTIST!!
router.route('/create')
  .get( (req, res) => {
    console.log('creating an artist');
    let artistParams = req.body.params;

    let newArtist = new Artist(artistParams);

    newArtist.save( (error,artist) => {
      if (error) return res.status(401).send({message: error.errmsg});

      else return res.status(200).send({message: "Artist Saved Successfully"});
      });
    });

//EDIT ARTIST!!!
router.route('/edit/:id')
  .post( (req,res) => {
    //get the artist parameters from the URL/request.
    console.log('Hit artist view path!');
    let artistParams = req.body.params;

    Artist.findByIdAndUpdate(artistParams.id,
       {$set: artistParams},
       (error, artist) =>{
         if(error) throw error;
         res.json(artist);
      });
    });

//SHOW INDIVIDUAL ARTIST!!!
router.route('/show/:id')
  .get( (req, res) => {
    //Get the artist parameters from the URL/request.
    console.log('Hit show individual artist');
    let artistParams = req.body.params;

    Artist.findOne(artistParams, (error, artist) => {
      if(error) throw error;

      res.json(artist);
      });
    });

 router.route('/delete')
  .get( (req,res) => {
    //Get artist parameters from the URL and delete.
    let artistParams = req.body.params;

    Artist.findOne(artistParams).remove( (error) => {
      if (error) res.status(401).send({message: error.errmsg});

      else return res.status(200).send({message: "Painting delete successful"});
      });
    });

module.exports = router;
