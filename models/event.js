var mongoose = require('mongoose');

var Event = mongoose.Schema({	
	title: String,
	date: String,
	people_involved: String,
	location: String,
	situation: String,
	triggers: String,
	automatic_thoughts: String,
	rational_response : String,
	outcome: String,
	bodily_sensations: String,
	emotions: String,
	behaviors: String,
	consequences: String,
	challanged_core_beliefs: String,
	fears: String,
	old_perspective: String,
	new_perspective: String,
	lessons: String,
	coping_strategies: String,
    user_id: String
});

module.exports = mongoose.model('Event', Event);