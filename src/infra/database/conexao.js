const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: process.env.DBAPP_HOST,
  port: process.env.DBAPP_PORT,
  user: process.env.DBAPP_USER,
  password: process.env.DBAPP_PASSWORD,
  database: process.env.DBAPP_DATABASE,
  multipleStatements: true
})

module.exports = conexao
