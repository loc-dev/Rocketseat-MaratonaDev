// Configurando o Servidor
const express = require("express")
const server = express()

// Configurando o Servidor para apresentação dos arquivos estáticos
server.use(express.static('public'))

// Habilitando o Body do Formulário
server.use(express.urlencoded({ extended: true}))

// Configurar a conexão com o Banco de dados
const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'projetodoe'
})

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
    db.query("SELECT * FROM donors", function (err, result) {
        // Fluxo de Erro
        if (err) return res.send("Erro de banco de dados.")

        // Fluxo ideal
        const donors = result.rows
        return res.render("index.html", { donors })
    })
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

        // Fluxo de Erro
    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.")
    }
        // Fluxo ideal
    // Colecionando novos dados dentro do Banco de dados
    const query = `
        INSERT INTO donors ("name", "email", "blood")
        VALUES ($1, $2, $3)`

    const values = [name, email, blood]

    db.query(query, values, function(err) {
        // Fluxo de Erro
        if (err) return res.send("Erro no Banco de dados.")

        // Fluxo ideal
        return res.redirect("/")
    })

})

// Inserindo o valor 3000 (Porta) para acessar o nosso Servidor
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})