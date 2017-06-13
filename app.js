var express = require('express');

var app = express();
var port = 3000;

app.use(express.static('public'));

app.use(express.static('src/views'));

app.get('/', function(req, res){
	res.send('Hello World');
});

app.get('/books', function(req, res){
	res.send('Hello books!');
});

app.get('/authors', function(req, res){
	res.send('Hello authors!');
});

app.listen(port, function(err){
	console.log("running /....." + port);
});

