var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
	{
		title: 'Hello1',
		genre: 'Fiction',
		author: 'William',
		read: false
	},
	{
		title: 'Hello2',
		genre: 'Fiction2',
		author: 'William2',
		read: false
	},
	{
		title: 'Hello3',
		genre: 'Fiction3',
		author: 'William3',
		read: false
	},
	{
		title: 'Hello4',
		genre: 'Fiction4',
		author: 'William4',
		read: false
	},
	{
		title: 'Hello5',
		genre: 'Fiction5',
		author: 'William5',
		read: false
	}
];

bookRouter.route('/')
	.get(function(req, res){
		res.render('books', 		
		{ 
			title: 'Book', 
		  	nav: [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}],
		  	books: books
		});
	});

bookRouter.route('/single')
	.get(function(req, res){
		res.send('Hello Single book');
	});

app.use('/Books', bookRouter);
app.get('/', function(req, res){
	res.render('index', 
		{ 
			title: 'BookStore', 
		  	nav: [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]
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

