class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.criaStatus();
    this.criaPrioridade();
    this.criaUsuario();
    this.criaTarefa();

    console.log('tabelas criadas!')
  }

  criaStatus() {
    const sql = 'CREATE TABLE IF NOT EXISTS status (id INT NOT NULL AUTO_INCREMENT, descricao varchar(150) NOT NULL, codigo varchar(10) NOT NULL, data_criacao datetime, PRIMARY KEY (id));'

    this.criaTabela(sql)
  }

  criaPrioridade() {
    const sql = 'CREATE TABLE IF NOT EXISTS prioridade (id INT NOT NULL AUTO_INCREMENT, codigo varchar(10) NOT NULL, descricao varchar(150), data_criacao datetime, PRIMARY KEY(id));'

    this.criaTabela(sql)
  }

  criaUsuario() {
    const sql = 'CREATE TABLE IF NOT EXISTS usuario (id INT NOT NULL AUTO_INCREMENT, nome varchar(250) NOT NULL, email varchar(250), password varchar(250), data_criacao datetime, PRIMARY KEY(id));'

    this.criaTabela(sql)
  }

  criaTarefa() {
    const sql = 'CREATE TABLE IF NOT EXISTS tarefas (id INT NOT NULL AUTO_INCREMENT, titulo varchar(250) NOT NULL, descricao TEXT, status INT NOT NULL, prioridade INT NOT NULL, lembrete BOOL, data_criacao datetime, data_prevista datetime, data_atualizacao datetime, PRIMARY KEY(id), FOREIGN KEY (status) REFERENCES status(id), FOREIGN KEY (prioridade) REFERENCES prioridade(id));';
    
    this.criaTabela(sql)
  }

  criaTabela(sql) {
    this.conexao.query(sql, erro => {
      if(erro) {
        console.log(erro)
      }
    })
  }
}

module.exports = new Tabelas
