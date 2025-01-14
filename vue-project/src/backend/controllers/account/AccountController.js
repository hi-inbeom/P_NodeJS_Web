const accountService = require('../../services/account/AccountService');

class AccountController {
    // 공통된 응답 처리 함수 (클래스 내부에 메소드로 정의)
    async handleController(req, res, serviceMethod) {
        try {
            const result = await serviceMethod(req);
            res.status(200).json(result || { message: 'Operation Successful' });
        } catch (err) {
            res.status(500).json({ message: "Controller :" + err.message });
        }
    }

    async createAccount(req, res) {
        await this.handleController(req, res, (req) => accountService.createAccount(req));
    }

    async readAccount(req, res) {
        await this.handleController(req, res, (req) => accountService.readAccount(req));
    }

    async updateAccount(req, res) {
        await this.handleController(req, res, (req) => accountService.updateAccount(req));
    }

    async deleteAccount(req, res) {
        await this.handleController(req, res, (req) => accountService.deleteAccount(req));
    }

    async checkUserId(req, res) {
        await this.handleController(req, res, (req) => accountService.checkUserId(req));
    }

    async updatePassword(req, res) {
        await this.handleController(req, res, (req) => accountService.updatePassword(req));
    }
}

module.exports = new AccountController();
