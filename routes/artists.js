const express = require('express');
const router = express.Router();
const controller = require('../controllers/artistController');

router
.put('/:id', controller.update)
.delete('/:id', controller.destroy)
.post('/', controller.create)
.get('/work/:id', controller.getWork)
.post('/:id/addwork', controller.addWork);

module.exports = router;