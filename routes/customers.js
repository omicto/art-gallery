const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router
.post('/', controller.create)
.put('/:id', controller.update)
.delete('/:id', controller.destroy);

module.exports = router;