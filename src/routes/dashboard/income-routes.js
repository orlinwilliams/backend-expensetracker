const express = require('express');
const router = express.Router();
const dashboard = require('../../controllers/dashboard/income-contoller');
const verifyToken = require('../validate-token');

router.post('/:idUser', verifyToken, dashboard.createIncome);
router.get('/:idUser', verifyToken, dashboard.getIncome);
// router.get('/:idUser/category/:idIncomeCategory', verifyToken, categories.getAnIncome);
// router.put('/:idUser/category/:idIncomeCategory', verifyToken, categories.updateAnIncome);
router.delete('/:idUser/item/:idIncome', verifyToken, dashboard.deleteAnIncome);

module.exports = router;
