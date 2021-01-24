const express = require('express');
const router = express.Router();
const dashboard = require('../../controllers/dashboard/expense-contoller');
const verifyToken = require('../validate-token');

router.post('/:idUser', verifyToken, dashboard.createExpense);
// router.get('/:idUser', verifyToken, dashboard.getExpenses);
// router.get('/:idUser/item/:idExpense', verifyToken, dashboard.getAnExpense);
// router.put('/:idUser/item/:idExpense', verifyToken, dashboard.updateAnExpense);
// router.delete('/:idUser/item/:idExpense', verifyToken, dashboard.deleteAnExpense);

module.exports = router;
