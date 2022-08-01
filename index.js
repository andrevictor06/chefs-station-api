
const express = require('express')
const { addLog } = require('./js/log')
const { getReceita, listReceitas } = require('./js/receita')
const app = express()
const port = 4567

require('dotenv/config');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/receita/:receitaId', (req, res) => {
    addLog("RECEITA", "Iniciando Pesquisa de Receita", { "params": req.params, "body": req.query})

    let send = {}
    try {
        send.message    = "";
        send.code       = 200;
        getReceita( req.params).then( (result) =>{
            send.query = result.rows;
            res.send( send)

            addLog("RECEITA", "Terminando Listagem de Receita", { "params": req.params, "body": req.query})
        });
    } catch (error) {
        send.message    = error.message;
        send.code       = 500;
        res.send( send)
        
        addLog("RECEITA", "Terminando com Erros Pesquisa de Receita", { "error": error.message})
    }
})

app.get('/receita', (req, res) => {
    addLog("RECEITA", "Iniciando Listagem de Receita", { "params": req.params, "body": req.query})

    let send = {}
    try {
        send.message    = "";
        send.code       = 200;
        listReceitas( req.query).then( (result) =>{
            send.query = result.rows;
            res.send( send)

            addLog("RECEITA", "Terminando Listagem de Receita", { "params": req.params, "body": req.query})
        });
    } catch (error) {
        send.message    = error.message;
        send.code       = 500;
        res.send( send)
        
        addLog("RECEITA", "Terminando com Erros Pesquisa de Receita", { "error": error.message})
    }
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.send({"message": "Endpoint não encontrado!", "code": 502})
});

app.post('*', function(req, res){
    res.send({"message": "Endpoint não encontrado!", "code": 502})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
