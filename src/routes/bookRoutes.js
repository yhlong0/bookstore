var express = require('express');

var bookRouter = express.Router();

var router = function(nav) {

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
			res.render('bookListView', 		
			{ 
				title: 'Book', 
			  	nav: nav,
			  	books: books
			});
		});

	bookRouter.route('/:id')
		.get(function(req, res){
			var id = req.params.id
			res.render('bookView',
			{
				title: 'Book',
				nav: nav,
				books: books[id]
			});
		});
	return bookRouter;
};

module.exports = router;