// postgresql 연결부
const { Client } = require('pg');
const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});
client.connect();

// 클라이언트 객체를 내보내는 역할
module.exports = client;

const query = {
    text: "INSERT INTO public.member VALUES ($1, $2)",
    values: [1, "홍길동"],
  };
  client
  .query(query)
  .then((res) => {
    console.log(res);
    client.end();
  })
  .catch((e) => console.error(e.stack));
