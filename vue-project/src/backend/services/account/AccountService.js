const accountModel = require('../../models/account/AccountModel');

class AccountService {
    async handleService(serviceMethod, ...args) {
        try {
            return await serviceMethod(...args);
        } catch (error) {
            throw new Error(`Error in AccountService: ${error.message}`);
        }
    }

    async createAccount(req) {
        const { userid, userpassword, useremail } = req.body;
        return this.handleService(accountModel.createAccount, userid, userpassword, useremail);
    }

    async readAccount(req) {
        const { email } = req.body;
        return this.handleService(accountModel.readAccount, email);
    }

    async updateAccount(req) {
        const { email, newEmail, newPassword } = req.body;
        return this.handleService(accountModel.updateAccount, email, newEmail, newPassword);
    }

    async deleteAccount(req) {
        const { email } = req.body;
        return this.handleService(accountModel.deleteAccount, email);
    }

    async checkUserId(req) {
        const { userid } = req.body;
        const isUserIdAvailable = await this.handleService(accountModel.checkUserId, userid);
        return isUserIdAvailable ? "hello" : "none";
    }

    async updatePassword(req) {
        const { updatePassword } = req.body;
        return this.handleService(accountModel.updatePassword, updatePassword);
    }
}

module.exports = new AccountService();