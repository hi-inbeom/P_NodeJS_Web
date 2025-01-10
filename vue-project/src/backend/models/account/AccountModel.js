const psql = require('../../config/psql');

class AccountModel {
    constructor({ email, password } = {}) {
        this.email = email || null;
        this.password = password || null;
    }
    async createAccount() {
        const query = {
            text: 'INSERT INTO account(email, password) VALUES($1, $2) RETURNING *',
            values: [this.email, this.password]
        };
        const {rows} = await psql.query(query);
        return rows[0];
    }
}

module.exports = new AccountModel;
