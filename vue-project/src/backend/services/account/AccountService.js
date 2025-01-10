const AccountModel = require('../../models/account/AccountModel');

class AccountService {
    async createAccount(req) {
        const {email, password} = req.body;
        const account = new AccountModel(email, password);
        return await account.createAccount();
    }
}

module.exports = new AccountService();
