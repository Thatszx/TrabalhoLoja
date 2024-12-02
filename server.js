const express = require('express');
const app = express();
const port = 3000;
const DepartamentoDAO = require("./src/controller/DepartamentoDAO")
const ProdutoDAO = require("./src/controller/ProdutoDAO")
const Produto = require("./src/model/Produto")

//const router = require(__dirname + '/routes/router');

const path = require('path');
const bodyParser = require('body-parser'); //capturar dados do formulário

// viabiliza o acesso a pasta, deixa tudo público
app.use(express.static(__dirname+'/public'));

//View engine que vai renderizar as páginas
app.set('view engine', 'ejs');
//pastas que vai ficar os templates para serem renderizados.
//app.set("views", path.join(__dirname) + "\\src\\view");
app.set("views", path.join(__dirname) + '/src/view');
//ler dados dos formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//passa as rotas para o aquivo router
//app.use('/', router);

const vetor=Array() //declaração do vetor

app.get("/", function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.get("/ListarDep", async function (req, res) {
  let dao = new DepartamentoDAO()
  let tabela = await dao.listar()
  res.render("departamento", {tabela})
})
app.get("/ProdutoPorDep/:cod", async function (req, res) {
  let codigo = req.params.cod;
  console.log(codigo)
  let dao = new ProdutoDAO()
  let tabela = await dao.listar(codigo)
  res.render("produto",{tabela})
})


//deixa o servidor no ar
app.listen(port, function (erro) {
  if (erro)
    console.log(erro);
  else {
    console.log('Servidor escutando a porta: ', port);
  }
})
