const psql = require('../../config/psql');

class AccountModel {

    async executeQuery(queryText, values) {
        const query = {
            text: queryText,
            values: values,
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];
        } catch (error) {
            throw new Error('Error executing query: ' + error.message);
        }
    }

    async createAccount(userid, userpassword, useremail) {
        const queryText = 'INSERT INTO account(userid, userpassword, useremail) VALUES($1, $2, $3, $4)';
        return this.executeQuery(queryText, [userid, userpassword, useremail]);
    }

    async readAccount(email) {
        const queryText = 'SELECT * FROM account WHERE useremail = $1';
        return this.executeQuery(queryText, [email]);
    }

    async updateAccount(email, newEmail, newPassword) {
        const queryText = 'UPDATE account SET useremail = $1, userpassword = $2 WHERE useremail = $3';
        return this.executeQuery(queryText, [newEmail, newPassword, email]);
    }

    async deleteAccount(email) {
        const queryText = 'DELETE FROM account WHERE useremail = $1';
        return this.executeQuery(queryText, [email]);
    }

    async checkUserId(userid) {
        const queryText = 'SELECT * FROM account WHERE userid = $1';
        return this.executeQuery(queryText, [userid]);
    }

    async updatePassword(userid, newPassword) {
        const queryText = 'UPDATE account SET userpassword = $1 WHERE userid = $2';
        return this.executeQuery(queryText, [newPassword, userid]);
    }
}

module.exports = new AccountModel();
