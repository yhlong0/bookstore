var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
	passport.use(new LocalStrategy(function(username, password, done) {
		var user = {
			username: username,
			password: password
		};
		done(null, user);
	}, {
		usernameField: 'userName',
		passwordField: 'password'
	})); 
};