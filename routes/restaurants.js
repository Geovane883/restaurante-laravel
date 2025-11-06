const express = require('express');
const router = express.Router();
const ctrl = require('../resources/controllers/restaurantsController');

router.get('/', ctrl.list);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.delete('/:id', ctrl.remove);

module.exports = router;
