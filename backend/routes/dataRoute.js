
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/', dataController.getAlldatas);
router.post('/', dataController.createdata);
router.get('/:id', dataController.getdataById);

module.exports = router;
