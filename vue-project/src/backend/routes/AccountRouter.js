const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account/AccountController');


router.post('/create', (req, res) => {
    console.log('/account/create Work');
    try {
        accountController.createAccount(req);
        res.status(200).send({ message: 'Account Data Created' });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/read', (req, res) => {
    try {
        accountController.readAccount(req);
        res.sendStatus(200).json({ message: 'Account Data Readed'})
    } catch (err) {
        res.sendStatus(500).json({message:err.message});
    }
});

router.post('/update', (req, res) => {
    console.log('/account/create Work');
    try {
        accountController.updateAccount(req);
        res.status(200).send({ message: 'Account Data Updated' });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

router.post('/delete', (req, res) => {
    console.log('/account/create Work');
    try {
        accountController.deleteAccount(req);
        res.status(200).send({ message: 'Account Data Deleted' });
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;
