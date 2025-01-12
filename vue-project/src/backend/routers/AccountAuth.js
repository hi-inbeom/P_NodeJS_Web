const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post("/sendCode", async (req, res) => {
    const { usermail, verifyCode } = req.body;

    if (!usermail) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        if (process.env.EMAIL_PASS) {
            await transporter.sendMail({
                from: `"hi-inbeom" <${process.env.EMAIL_USER}>`,
                to: usermail,
                subject: "회원가입 코드 : ${verifyCode}",
                html: `<p>회원가입 코드 : ${verifyCode}</p>`,
            });
        }
        res.status(200).json({ message: "Verification email sent" });
    } catch (error) {
        res.status(500).json({ message: "Failed to send email", error });
    }
});

// 이메일 인증 처리
router.get("/verifyCode", (req, res) => {
    const { email, code } = req.query;

    if (!email || !code) {
        return res.status(400).json({ message: "Email and code are required" });
    }

    // 인증 코드 검증
    if (verificationCodes[usermail] === code) {
        // 인증 코드가 맞으면 인증 성공
        res.status(200).json({ message: "Email verified successfully", email });
    } else {
        // 인증 코드가 다르면 인증 실패
        res.status(400).json({ message: "Invalid or expired code" });
    }
});

module.exports = router;
