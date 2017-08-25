var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 3000;
var nav = [{Link: '/Books', Text: 'Book'}, {Link: '/Authors', Text: 'Author'}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret: 'library', resave: true,
    saveUninitialized: true}));
var sth = require('./src/config/passport')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);
app.get('/', function(req, res){
	res.render('index', 
		{ 
			title: 'BookStore', 
		  	nav: [{Link: '/Books', Text: 'Books'}, {Link: '/Authors', Text: 'Authors'}]
		}
	);
});

app.get('/Books', function(req, res){
	res.send('Hello books!');
});

app.get('/Authors', function(req, res){
	res.send('Hello authors!');
});

app.listen(port, function(err){
	console.log('Running ..... at Port: ' + port);
});

