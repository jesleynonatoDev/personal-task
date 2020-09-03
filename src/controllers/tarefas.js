const Operations = require('../infra/database/operations')

const Tarefas = new Operations('tarefas')

module.exports = app => { 

  app.get('/tarefas', (req, res) => {
    Tarefas.lista(res)
  })

  app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params

    Tarefas.buscaPorId(res, id)
  })

  app.post('/tarefas/', (req, res) => {
    const tarefas = req.body

    Tarefas.adiciona(res, tarefas)
  })

  app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const tarefas = req.body

    Tarefas.atualiza(res, tarefas, id)
  })

  app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params

    Tarefas.deleta(res, id)
  })
}
