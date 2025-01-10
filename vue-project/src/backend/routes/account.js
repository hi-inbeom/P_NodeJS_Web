const express = require('express');
const router = express.Router();

const accountController = require('./controllers/account/AccountController');

router.post("/account/create", accountController.createAccount)

module.exports = router;
