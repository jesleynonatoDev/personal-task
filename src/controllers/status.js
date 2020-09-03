const Operations = require('../infra/database/operations')

const Status = new Operations('status')

module.exports = app => {

  app.get('/status', (req, res) => {
    Status.lista(res)
  })

  app.get('/status/:id', (req, res) => {
    const { id } = req.params

    Status.buscaPorId(res, id)
  })

  app.post('/status/', (req, res) => {
    const status = req.body

    Status.adiciona(res, status)
  })

  app.put('/status/:id', (req, res) => {
    const { id } = req.params
    const status = req.body

    Status.atualiza(res, status, id)
  })

  app.delete('/status/:id', (req, res) => {
    const { id } = req.params

    Status.deleta(res, id)
  })
}
