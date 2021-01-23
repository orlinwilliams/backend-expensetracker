const express = require('express');
const router = express.Router();
const categories = require('../../controllers/categories/income-controller');
const verifyToken = require('../validate-token');

router.post('/:idUser', verifyToken, categories.createIncome);
router.get('/:idUser', verifyToken, categories.getIncome);
router.get('/:idUser/category/:idIncomeCategory', verifyToken, categories.getAnIncome);
router.put('/:idUser/category/:idIncomeCategory', verifyToken, categories.updateAnIncome);
router.delete('/:idUser/category/:idIncomeCategory', verifyToken, categories.deleteAnIncome);

module.exports = router;
