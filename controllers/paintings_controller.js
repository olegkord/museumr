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

    let newPainting = new Painting(req.body.params);

    newPainting.save( (error,painting) => {
      if(error) res.status(401).send({message: error.errmsg});

      return res.status(200).send({message: "Painting added to collection"});
    })
  })

  router.route('/delete')
    .post( (req, res) => {
      console.log('DELETING PAINTING');

      Painting.find(req.body.params).remove( (error) => {
        if (error) res.status(401).send({message: error.errmsg});

        else return res.status(200).send({message: "Painting delete successful"});
      })
   })


module.exports = router;
