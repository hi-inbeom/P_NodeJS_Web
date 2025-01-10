// 모듈 로드
const express = require('express');
const cors = require('cors');
const path = require('path');

process.env.NODE_ENV = "test"

// 환경 변수 로드
require('dotenv').config({
    path: process.env.NODE_ENV == 'test'
    ? path.resolve(__dirname, 'config/.env.test')
    : path.resolve(__dirname, 'config/.env')
});
console.log(process.env.DB_NAME);

// Vue 정적 파일 경로 설정
const frontPath = path.join(__dirname, '../frontend/dist');

const port = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(port, () => {
    console.log(`NodeJS Start`);
});

// controllers
const accountController = require('./controllers/account/AccountController');

// Vue 빌드된 정적 파일을 기본 경로로 설정
app.use( '/', express.static( frontPath ));  
app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

app.post('/account/create', (req, res) => {
    console.log("??????????????????????")
    console.log('/account/create Work');
    res.status(200).send({ message: 'Account created' }); // 클라이언트에 응답
});

// app.post('/account/create', accountController.createAccount);
