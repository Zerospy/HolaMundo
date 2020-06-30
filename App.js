var express = require ('express');
var app = express();
var square = require('./square')
app.get('/', function (req, res)
{
res.send('Hola Mundo!');

});

app.listen(3000, function() {
    console.log('Aplicacion ejemplo, escuchando el 3000');
    console.log('El area es' + square.perimeter(5));
});


setTimeout(function(){
console.log('Primero')
},3000);
console.log('Segundo');

