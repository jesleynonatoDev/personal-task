const executaQuery = require('../queries')
const moment = require('moment');

class Tarefas {

  lista(res) {
    const sql = 'SELECT * FROM tarefas'

    executaQuery(res, sql)
  }

  buscaPorId(res, id) {
    const sql = `SELECT * FROM tarefas WHERE id=${parseInt(id)}`

    executaQuery(res, sql)
  }

  adiciona(res, item) {
    const { titulo, descricao, status, prioridade, lembrete, data_prevista } = item;
    const data_criacao = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const previsao = moment(data_prevista).format('YYYY-MM-DD HH:mm:ss');

    const sql = `INSERT INTO tarefas(titulo, descricao, status, prioridade, lembrete, data_prevista, data_criacao) VALUES('${titulo}', '${descricao}', '${status}', '${prioridade}', '${lembrete}', '${previsao}', '${data_criacao}')`

    executaQuery(res, sql)
  }

  atualiza(res, novoItem, id) {
    const { titulo, descricao, status, prioridade, lembrete, data_prevista } = novoItem;
    const previsao = moment(data_prevista).format('YYYY-MM-DD HH:mm:ss');
    const data_atualizacao = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const sql = `UPDATE tarefas SET titulo='${titulo}', descricao='${descricao}', status='${status}', prioridade='${prioridade}', lembrete='${lembrete}', data_prevista='${previsao}', data_atualizacao='${data_atualizacao}' WHERE id=${id}`

    executaQuery(res, sql)
  }

  deleta(res, id) {
    const sql = `DELETE FROM tarefas WHERE id=${id}`

    executaQuery(res, sql)
  }
}

module.exports = new Tarefas
