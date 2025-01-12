// 모듈 로드
const express = require('express');
const cors = require('cors');
const path = require('path');

process.env.NODE_ENV = "development";

// 환경 변수 로드
require('dotenv').config({path:path.resolve(__dirname, 'config/.env')});

// Vue 정적 파일 경로 설정
const frontPath = path.join(__dirname, '../frontend/dist');

const port = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
    console.log(`NodeJS Start`);
    console.log(process.env.DB_NAME);
});

// Vue 빌드된 정적 파일을 기본 경로로 설정
app.use( '/', express.static( frontPath ));  
app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

// Routers
const accountRouter = require('../backend/routes/AccountRouter');
app.use('/account',accountRouter);
