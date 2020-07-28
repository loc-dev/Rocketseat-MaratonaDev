// Configurando o Servidor
const express = require("express")
const server = express()

// Configurando a Template Engine (Nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server
})

/* 
    Utilizando a funcionalidade Get, para o parâmetro (/)
    com função de parâmetro Request : Requisição e Response : Respostas
    Significa a configuração da apresentação da página
*/
server.get("/", function(req, res) {
    return res.render("index.html")
})

// Configurando o Servidor para apresentação dos arquivos estáticos
server.use(express.static('public'))

// Inserindo o valor 3000 (Porta) para acessar o nosso Servidor
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})