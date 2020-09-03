const Operations = require('../infra/database/operations')

const Prioridade = new Operations('prioridade')

module.exports = app => {

  app.get('/prioridade', (req, res) => {
    Prioridade.lista(res)
  })

  app.get('/prioridade/:id', (req, res) => {
    const { id } = req.params

    Prioridade.buscaPorId(res, id)
  })

  app.post('/prioridade/', (req, res) => {
    const prioridade = req.body

    Prioridade.adiciona(res, prioridade)
  })

  app.put('/prioridade/:id', (req, res) => {
    const { id } = req.params
    const prioridade = req.body

    Prioridade.atualiza(res, prioridade, id)
  })

  app.delete('/prioridade/:id', (req, res) => {
    const { id } = req.params

    Prioridade.deleta(res, id)
  })
}
