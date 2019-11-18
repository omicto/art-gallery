var express = require('express');
var router = express.Router();
const artistController = require('../controllers/artistController');
const customerController = require('../controllers/customerController');
const transactionController = require('../controllers/transactionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Index'});
})
.get('/artist', artistController.index)
.get('/artist/:id', artistController.one)
.get('/customer', customerController.index)
.get('/customer/edit/:id', customerController.renderEditForm)
.get('/customer/new', function(req,res,next) {res.render('customer-form', {newCustomer: true})})
.get('/sales', transactionController.index);

module.exports = router;
 