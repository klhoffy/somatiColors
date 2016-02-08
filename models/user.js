var mongoose = require('mongoose');

var User = mongoose.Schema({
	username: String,
	email: String,
	password: String,
	first_name: String,
	last_name: String,
});

module.exports = mongoose.model('User', User);
