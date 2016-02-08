var mongoose = require('mongoose');

var Event = mongoose.Schema({	
	title: String,
    location: String,
    user_id: String
});

module.exports = mongoose.model('Event', Event);