const executaQuery = require('../queries')
const moment = require('moment');

class Status {

  lista(res) {
    const sql = 'SELECT * FROM status'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM status WHERE id=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { descricao, codigo } = item;
    const data = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    const sql = `INSERT INTO status(descricao, codigo, data_criacao) VALUES('${descricao}', '${codigo}', '${data}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { descricao, codigo } = novoItem
    const sql = `UPDATE status SET codigo='${codigo}', descricao='${descricao}' WHERE id=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM status WHERE id=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Status
