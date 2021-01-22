const express = require('express');
const router = express.Router();
const categories = require('../../controllers/categories/income-controller')
const verifyToken = require('../validate-token');

router.post('/income', verifyToken, categories.createIcome );

module.exports = router;