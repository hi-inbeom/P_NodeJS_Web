const accountModel = require('../../models/account/AccountModel');

class AccountService {
    // 계정 생성
    async createAccount(req) {
        const { email, password } = req.body;  // 요청 본문에서 email과 password 추출
        try {
            // 계정 생성 모델 호출
            const account = await accountModel.createAccount(email, password);
            return account;  // 생성된 계정 반환
        } catch (error) {
            // 에러 발생 시 처리
            throw new Error('Error in AccountService createAccount: ' + error.message);
        }
    }

    // 계정 조회
    async readAccount(req) {
        let { email } = req.params;  // URL 파라미터에서 email 추출
        email = "test@exmaple.com";
        try {
            // 계정 조회 모델 호출
            const account = await accountModel.readAccount(email);
            if (!account) {
                throw new Error('Account not found');  // 계정이 없을 경우 처리
            }
            return account;  // 조회된 계정 반환
        } catch (error) {
            // 에러 발생 시 처리
            throw new Error('Error in AccountService getAccountByEmail: ' + error.message);
        }
    }

    // 계정 수정
    async updateAccount(req) {
        const { email } = req.params;  // URL 파라미터에서 email 추출
        const { newEmail, newPassword } = req.body;  // 요청 본문에서 새 email과 password 추출
        try {
            // 계정 수정 모델 호출
            const updatedAccount = await accountModel.updateAccount(email, newEmail, newPassword);
            if (!updatedAccount) {
                throw new Error('Account not found or update failed');  // 수정 실패 처리
            }
            return updatedAccount;  // 수정된 계정 반환
        } catch (error) {
            // 에러 발생 시 처리
            throw new Error('Error in AccountService updateAccount: ' + error.message);
        }
    }

    // 계정 삭제
    async deleteAccount(req) {
        const { email } = req.params;  // URL 파라미터에서 email 추출
        try {
            // 계정 삭제 모델 호출
            const deletedAccount = await accountModel.deleteAccount(email);
            if (!deletedAccount) {
                throw new Error('Account not found or deletion failed');  // 삭제 실패 처리
            }
            return deletedAccount;  // 삭제된 계정 반환
        } catch (error) {
            // 에러 발생 시 처리
            throw new Error('Error in AccountService deleteAccount: ' + error.message);
        }
    }
}

module.exports = new AccountService();
