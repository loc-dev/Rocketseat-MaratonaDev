// Configurando o Servidor
const express = require("express")
const server = express()

// Configurando a Template Engine (Nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

/* 
    Utilizando a funcionalidade Get, para o parâmetro (/)
    com função de parâmetro Request : Requisição e Response : Respostas
    Significa a configuração da apresentação da página
*/
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

// Configurando o Servidor para apresentação dos arquivos estáticos
server.use(express.static('public'))

// Lista de Doadores (Array)
const donors = [
    {
        name: "Diego Fernandes",
        blood: "AB+"
    },
    {
        name: "Cleiton Souza",
        blood: "B+"
    },    
    {
        name: "Robson Marques",
        blood: "O+"
    },    
    {
        name: "Mayk Brito",
        blood: "A-"
    },        
]

// Inserindo o valor 3000 (Porta) para acessar o nosso Servidor
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})