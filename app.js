var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var port = 3000


app.get('/', (req, res) => {
    res.send('Oi mundo');
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});


function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function dvisao(a, b) {
    return a / b;
}


app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);
    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/subtracao', function (req, res) {
    var body = req.body;
    var resultado = subtracao(body.a, body.b);
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/multiplicacao', function (req, res) {
    var body = req.body;
    var resultado = multiplicacao(body.a, body.b);
    res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultado}`);
});


app.post('/divisao', function (req, res) {
    var body = req.body;
    var resultado = dvisao(body.a, body.b);
    res.send(`O resultado da dvisao de ${body.a} e ${body.b} é ${resultado}`);
});