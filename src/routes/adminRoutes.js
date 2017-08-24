var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(nav) {
	adminRouter.route('/addBooks')
		.get(function(req, res) {
			var url = 'mongodb://localhost:27017/libraryApp';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('books');
				
			});
			res.send('insert books');
		});

	return adminRouter;
};

module.exports = router;