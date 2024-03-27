
const express = require('express');
const dataRoute = require('./routes/dataRoute');

const router = express.Router();

router.use('/dashboard', dataRoute);

module.exports = router;
