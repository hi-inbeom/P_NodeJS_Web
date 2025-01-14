const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account/AccountController');

// 계정생성
// 익명 함수와 this 그리고 bind와 참조 함수에 대해 좀 더 알아야겠다.
// 화살표 함수는 신이다
router.post("/create", (req, res) => accountController.createAccount(req, res));
router.get("/read", (req, res) => accountController.readAccount(req, res));
router.post("/update", (req, res) => accountController.updateAccount(req, res));
router.post("/delete", (req, res) =>  accountController.deleteAccount(req, res));

router.post("/checkUserId", (req, res) => accountController.checkUserId(req, res));
router.post("/updatePassword", (req, res) => accountController.updatePassword(req, res));

module.exports = router;
