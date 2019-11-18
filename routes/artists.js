const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistController');

router
.delete('/:id', controller.destroy)
.post('/', controller.create);

module.exports = router;