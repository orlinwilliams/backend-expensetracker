const express = require('express');
const router = express.Router();
const {createIncome} = require('../../controllers/categories/income-controller')
const verifyToken = require('../validate-token');

router.post('/income',(req, res)=>res.send('h'));

module.exports = router;