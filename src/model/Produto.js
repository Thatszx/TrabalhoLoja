module.exports = class Produto{
    
    descricao
    codigo
    coddep
    imagem

    construtor(){
      this.codigo = 0;
      this.descricao = "";
      this.imagem = "";
      this.coddep = 0;

    }
    set codigo(c) {
      this.codigo = c;
    }
    get codigo() {
      return this.codigo;
    }

    set descricao(d) {
      this.descricao = d;
    }
    get descricao() {
        return this.descricao;
    }


    set imagem(i) {
        this.imagem = i;
    }
    get imagem() {
        return this.imagem;
    }

    set coddep(c) {
        this.coddep = c;
    }
    get coddep() {
        return this.coddep;
    }
  }