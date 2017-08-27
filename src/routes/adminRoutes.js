var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
		{
			title: 'Hello1',
			genre: 'Fiction',
			author: 'William',
			bookId: 656,
			read: false
		},
		{
			title: 'Hello2',
			genre: 'Fiction2',
			author: 'William2',
			bookId: 24280,
			read: false
		},
		{
			title: 'Hello3',
			genre: 'Fiction3',
			author: 'William3',
			bookId: 123,
			read: false
		},
		{
			title: 'Hello4',
			genre: 'Fiction4',
			author: 'William4',
			bookId: 520,
			read: false
		},
		{
			title: 'Hello5',
			genre: 'Fiction5',
			author: 'William5',
			bookId: 323,
			read: false
		}
	];

var router = function(nav) {
	adminRouter.route('/addBooks')
		.get(function(req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('books');
				collection.insertMany(books, function(err, result){
					res.send(result);
					db.close();
				});
			});
		});

	return adminRouter;
};

module.exports = router;