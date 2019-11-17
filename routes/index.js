var express = require('express');
var router = express.Router();
const Artist = require('../models/artist');
const artistController = require('../controllers/artistController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Index'});
})
.get('/artist', artistController.index)
.get('/artist/:id', artistController.one);

module.exports = router;
 