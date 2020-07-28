const express = require("express")
const server = express()

/* Utilizando a funcionalidade Get, passando o parâmetro (/)
    com função de parâmetro Request : Requisição e Response : Respostas
*/
server.get("/", function(req, res) {
    return res.send("ok, cheguei aqui com nodemon")
})

// Inserindo o valor 3000 (Porta) para acessar o nosso Servidor
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})