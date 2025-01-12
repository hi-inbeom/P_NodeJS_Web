const accountService = require('../../services/account/AccountService');

class AccountController {
    async createAccount(req) {
        const account = accountService.createAccount(req);
    }
    async readAccount(req) {
        const account = accountService.readAccount(req);
    }
    async updateAccount(req) {
        const account = accountService.updateAccount(req);
    }
    async deleteAccount(req) {
        const account = accountService.deleteAccount(req);
    }
}

module.exports = new AccountController;
