const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/authentication/login-controller');

router.post('/',loginController)

module.exports = router;