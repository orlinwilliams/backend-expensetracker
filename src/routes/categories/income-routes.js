const express = require('express');
const router = express.Router();
const categories = require('../../controllers/categories/income-controller');
const verifyToken = require('../validate-token');

router.post('/income/:idUser', verifyToken, categories.createIcome);
router.get('/income/:idUser', verifyToken, categories.getIncome);
router.get('/income/:idUser/category/:idIncomeCategory', verifyToken, categories.getAnIncome);
router.put('/income/:idUser/category/:idIncomeCategory', verifyToken, categories.updateAnIncome);
router.delete('/income/:idUser/category/:idIncomeCategory', verifyToken, categories.deleteAnIncome);

module.exports = router;
