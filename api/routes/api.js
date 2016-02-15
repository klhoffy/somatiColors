var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var usersController = require('../controllers/users.js')

// var User = require('../models/user')


// Non-Authenticated routes ===========

//make a user
apiRouter.route('/users')
	.post(usersController.create)

//login
apiRouter.route('/authenticate')
	.post(usersController.authenticate)

// Authenticated routes  ==============
//config middleware for auth
apiRouter.use(usersController.checkUser)

//users index
apiRouter.route('/users')
	.get(usersController.index)

//logged in user detail
apiRouter.route('/me')
	.get(function(req, res){
		res.send(req.decoded)
	})

//user CRUD
apiRouter.route('/users/:user_id')
	.get(usersController.show)
	.put(usersController.update)
	.delete(usersController.destroy)


// //user CRUD
// apiRouter.route('/users/:id')
// 	.get(usersController.getUser)
// 	.delete(usersController.deleteUser)
// 	.put(usersController.putUser)
    
// apiRouter.route('/users/:user_id/events')
// 	.get(eventsController.getEvents)
// 	.post(eventsController.postEvent)

// apiRouter.route('/users/:user_id/events/:id')
// 	.get(eventsController.getEvent)
// 	.delete(eventsController.deleteEvent)
// 	.put(eventsController.putEvent)

module.exports = apiRouter