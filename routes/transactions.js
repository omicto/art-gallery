const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactionController');

router
.post('/', controller.create)
.delete('/:id', controller.destroy);

module.exports = router;