var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', 
		{ 
			title: 'BookStore', 
		  	nav: [{Link: "/Books", Text: "Books"}, {Link: "/Authors", Text: "Authors"}]
		}
	);
});

app.get('/books', function(req, res){
	res.send('Hello books!');
});

app.get('/authors', function(req, res){
	res.send('Hello authors!');
});

app.listen(port, function(err){
	console.log('Running ..... at Port: ' + port);
});

