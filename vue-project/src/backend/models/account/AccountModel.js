const psql = require('../../config/psql');

class AccountModel {
    // 계정 생성
    async createAccount(email, password) {
        const query = {
            text: 'INSERT INTO account(email, password) VALUES($1, $2) RETURNING *',
            values: [email, password],
        };

        try {
            const result = await psql.query(query);  // DB와 직접 상호작용
            return result.rows[0];  // 생성된 계정 반환
        } catch (error) {
            throw new Error('Error in creating account: ' + error.message);  // 에러 처리
        }
    }

    // 계정 조회
    async readAccount(email) {
        const query = {
            text: 'SELECT * FROM account LIMIT1'
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];  // 조회된 계정 반환
        } catch (error) {
            throw new Error('Error in fetching account: ' + error.message);
        }
    }

    // 계정 정보 수정
    async updateAccount(email, newEmail, newPassword) {
        const query = {
            text: 'UPDATE account SET email = $1, password = $2 WHERE email = $3 RETURNING *',
            values: [newEmail, newPassword, email],
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];  // 수정된 계정 정보 반환
        } catch (error) {
            throw new Error('Error in updating account: ' + error.message);
        }
    }

    // 계정 삭제
    async deleteAccount(email) {
        const query = {
            text: 'DELETE FROM account WHERE email = $1 RETURNING *',
            values: [email],
        };

        try {
            const result = await psql.query(query);
            return result.rows[0];  // 삭제된 계정 반환
        } catch (error) {
            throw new Error('Error in deleting account: ' + error.message);
        }
    }
}

module.exports = new AccountModel();
