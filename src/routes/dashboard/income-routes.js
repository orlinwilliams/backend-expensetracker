const express = require('express');
const router = express.Router();
const dashboard = require('../../controllers/dashboard/income-contoller');
const verifyToken = require('../validate-token');

router.post('/:idUser', verifyToken, dashboard.createIncome);
//router.get('/:idUser', verifyToken, dashboard.getIncome);
router.get('/:idUser/item/:idIncome', verifyToken, dashboard.getAnIncome);
router.get('/:idUser/month/:month/year/:year', verifyToken, dashboard.getIncome);
router.put('/:idUser/item/:idIncome', verifyToken, dashboard.updateAnIncome);
router.delete('/:idUser/item/:idIncome', verifyToken, dashboard.deleteAnIncome);

module.exports = router;
