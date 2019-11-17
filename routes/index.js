var express = require('express');
var router = express.Router();
const Artist = require('../models/artist');

/* GET home page. */
router.get('/', function(req, res, next) {
  Artist.findOne({}).then((a) => {
    res.render('index', { title: a});
  });
});

module.exports = router;
 