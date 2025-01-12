const psql = require('../../config/psql');

class AccountModel {
    async createAccount(userid, userpassword, userphone, useremail) {
        const query = {
            text: 'INSERT INTO account(userid, userpassword, userphone, useremail) VALUES($1, $2, $3, $4)',
            values: [userid, userpassword, userphone, useremail],
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error in creating account: ' + error.message);
        }
    }

    async readAccount(email) {
        const query = {
            text: 'SELECT * FROM account'
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error in fetching account: ' + error.message);
        }
    }

    async updateAccount(email, newEmail, newPassword) {
        const query = {
            text: 'UPDATE account SET email = $1, password = $2 WHERE email = $3',
            values: [newEmail, newPassword, email],
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error in updating account: ' + error.message);
        }
    }

    async deleteAccount(email) {
        const query = {
            text: 'DELETE FROM account WHERE email = $1',
            values: [email],
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error in deleting account: ' + error.message);
        }
    }
}

module.exports = new AccountModel();
