require('dotenv-safe').config();
const conexao = require('./src/infra/conexao')
const configServer = require('./src/server/config')

const app = configServer()

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')
})

app.listen(process.env.PORT, () => {
  console.log('API is online')
})
