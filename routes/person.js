var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/person/:id', function(req, res, next) {

  models.PessoaExterna.findById(req.params.id).then(people => {

    res.json(people);

  });

});


router.get('/person', function(req, res, next) {

  models.PessoaExterna.findAll().then(people => {

    res.json(people);

  });

});


module.exports = router;
