const express = require('express');
const router = express.Router();
const categories = require('../../controllers/categories/expense-controller');
const verifyToken = require('../validate-token');

router.post('/:idUser', verifyToken, categories.createExpense);
router.get('/:idUser', verifyToken, categories.getExpenses);
router.get('/:idUser/category/:idExpenseCategory', verifyToken, categories.getAnExpense);
router.put('/:idUser/category/:idExpenseCategory', verifyToken, categories.updateAnExpense);
router.delete('/:idUser/category/:idExpenseCategory', verifyToken, categories.deleteAnExpense);

module.exports = router;
