const Banco = require('../model/Banco');
//const banco = new Banco();


module.exports = class DepartamentoDAO {

  async listar() {
    try {
      Banco.init();
        let tabela = await Banco.conexao.query(
    'select codigo,nome from departamento order by 1;');
      Banco.conexao.end();
      return tabela
    }
    catch (erro) {
      console.log(erro);
    }

  }
}
