const accountModel = require('../../models/account/AccountModel');

class AccountService {
    async createAccount(req) {
        const { userid, userpassword, userphone, useremail } = req.params;
        try {
            const account = await accountModel.createAccount(userid, userpassword, userphone, useremail);
            return account;
        } catch (error) {
            throw new Error('Error in AccountService createAccount: ' + error.message);
        }
    }

    async readAccount(req) {
        let { email } = req.params;
        try {
            const account = await accountModel.readAccount(email);
            if (!account) {
                throw new Error('Account not found');
            }
            return account;
        } catch (error) {
            throw new Error('Error in AccountService getAccountByEmail: ' + error.message);
        }
    }

    async updateAccount(req) {
        const { userid } = req.params;
        const { newUserPassword } = req.body;
        try {
            const updatedAccount = await accountModel.updateAccount(email, newEmail, newPassword);
            if (!updatedAccount) {
                throw new Error('Account not found or update failed');
            }
            return updatedAccount;
        } catch (error) {
            throw new Error('Error in AccountService updateAccount: ' + error.message);
        }
    }

    async deleteAccount(req) {
        const { email } = req.params;
        try {
            const deletedAccount = await accountModel.deleteAccount(email);
            if (!deletedAccount) {
                throw new Error('Account not found or deletion failed');
            }
            return deletedAccount;
        } catch (error) {
            throw new Error('Error in AccountService deleteAccount: ' + error.message);
        }
    }
}

module.exports = new AccountService();
