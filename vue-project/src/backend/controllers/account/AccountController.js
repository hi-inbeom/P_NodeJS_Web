const joinService = require('../../services/account/AccountService');

class AccountController {
    async createAccount(req, res) {
        try {
            const account = joinService.createAccount(req);
            res.status(201).json(account);
            res.status(200).json(account);
        } catch(err) {
            res.status(500).json({message: err.message});
        }
    }
}

module.exports = new AccountController;
