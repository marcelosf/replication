var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test/:name', function(req, res, next) {
  res.render('index', { title: req.params.name });
});

module.exports = router;
