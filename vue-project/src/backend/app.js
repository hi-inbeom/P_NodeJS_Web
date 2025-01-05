const port = 8080;

const express = require('express');
const cors = require('cors');
const path = require('path');
const frontPath = path.join(__dirname, '../frontend/dist');

const app = express();
app.use(cors());

app.listen(port, () => {
    console.log(`NodeJS Start`);
});

// 정적 파일을 서빙하는 미들웨어
// 서빙의 개념과 미들웨어의 개념이 없다.
app.use( '/', express.static( frontPath ));  


app.get('/', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
  