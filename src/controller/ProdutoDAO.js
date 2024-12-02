const Banco = require('../model/Banco');
//const banco = new Banco();


module.exports = class ProdutoDAO {

  async listar(coddep) {
    try {
      Banco.init();
        let tabela = await Banco.conexao.query(
            'select codigo,descricao,imagem,coddep from produto where coddep=$1 order by descricao',[coddep]);
      Banco.conexao.end();
      return tabela
    }
    catch (erro) {
      console.log(erro);
    }

  }
}
