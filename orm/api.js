const express = require('express');
const { sincronizarBanco } = require('./sync');
const {} = require('./create');
const criarUsuarios = require('./create');
const { listarUsuarios } = require('./read');

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Olá Mundo"
    })
})

app.post('/usuarios', (req, res) => {
    criarUsuarios(req.body.nome, req.body.email, req.body.idade)
    .then(() => {
        res.status(200).json({
            message: "Olá Mundo"
        })
    }).catch((error) => {
        res.status(400).json({
            message: error.message
        })
    })
})

app.get('/usuarios', async(req, res) => {
    const usuarios = await listarUsuarios();
    res.status(200).json({usuarios})
})


sincronizarBanco()
.then(() => {
    app.listen(3000, () => {
    console.log("Aplicação rodando");
    
})
})
