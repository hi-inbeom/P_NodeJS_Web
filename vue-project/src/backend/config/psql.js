// postgresql 연결부
const { Client } = require('pg');
const client = new Client({
    user: 'notebook',
    host: 'localhost',
    database: 'web_db',
    password: 'notebook',
    port: 5432,
});
client.connect();


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

