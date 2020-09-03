require('dotenv-safe').config();
const conexao = require('./src/infra/database/conexao');
const Tabelas = require('./src/infra/database/tabelas');
const configServer = require('./src/server/config')

const app = configServer()

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')
  Tabelas.init(conexao)
})

app.listen(process.env.PORT, () => {
  console.log('API is online')
})
