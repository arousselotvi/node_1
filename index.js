const http = require('http') 

var fs = require('fs')

var express = require('express')
var app = express()

app.use((req, res, next) => {
    console.log('Time:', Date.now(), req.url);
    next(); // sans cette ligne on ne pourra pas poursuivre.
})

//On dit que le moteur de vue c'est ejs:
app.set('view engine', 'ejs');

app.use("/static", express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.render('index')
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html'); 
})

app.get('/contact', (request, response) => {
    response.render('contact')
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
})

app.use((req, res, next) => {
    response.render('404')
    console.log("this is the end")
})

//manque 404

app.listen(10402);
console.log("c'est parti")