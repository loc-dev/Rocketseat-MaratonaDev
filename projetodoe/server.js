// Configurando o Servidor
const express = require("express")
const server = express()

// Configurando o Servidor para apresentação dos arquivos estáticos
server.use(express.static('public'))

// Habilitando o Body do Formulário
server.use(express.urlencoded({ extended: true}))

// Configurando a Template Engine (Nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express: server,
    noCache: true,
})

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

/* 
    Utilizando a funcionalidade Get, para o parâmetro (/)
    com função de parâmetro Request : Requisição e Response : Respostas
    Significa a configuração da apresentação da página
*/
server.get("/", function(req, res) {
    return res.render("index.html", { donors })
})

/* 
    Utilizando a funcionalidade Post, responsável
    de receber os dados do formulário
    Significa a configuração da apresentação da página 
*/
server.post("/", function(req, res) {
    // Pegando os dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // Colecionando novos dados dentro do Array
    donors.push({
        name: name,
        blood: blood,
    })

    return res.redirect("/")
})

// Inserindo o valor 3000 (Porta) para acessar o nosso Servidor
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})