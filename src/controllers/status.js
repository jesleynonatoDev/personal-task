module.exports = app => {
  app.get('/', (req, res) => {
    Servicos.lista(res)
  });
}
