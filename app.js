const express = require("express")

const server = express()

const docs = express.static("docs")

const port = process.env.PORT || 2000

server.use( docs )

server.get("/ofertas.html", function(request, response){
    response.end("Acá van a mostrarse las ofertas de MercadoTECH")
})

server.post("/enviar", function(req, res){
    res.end("Aca debo ver el enviar los datos del formulario")
})

server.listen(port)