var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var usersController = require('../controllers/users.js');
var eventsController = require('../controllers/events.js');

var User = require('../models/user.js');

// Non-Authenticated routes ===========

//make a user
router.route('/users')
	.post(usersController.postUser)

//login
router.route('/authenticate')
	.post(usersController.authenticateUser)

// Authenticated routes  ==============
//config middleware for auth
router.use(usersController.checkUser)

//logged in user detail
router.route('/me')
	.get(function(req, res){
		res.send(req.decoded)
	})

router.route('/users/')
	.get(usersController.getUsers)


//user CRUD
router.route('/users/:id')
	.get(usersController.getUser)
	.delete(usersController.deleteUser)
	.put(usersController.putUser)
    
router.route('/users/:user_id/events')
	.get(eventsController.getEvents)
	.post(eventsController.postEvent)

router.route('/users/:user_id/events/:id')
	.get(eventsController.getEvent)
	.delete(eventsController.deleteEvent)
	.put(eventsController.putEvent)

module.exports = router