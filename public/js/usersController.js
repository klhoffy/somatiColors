angular.module('SomatiColors')
	.controller('usersController', usersController)
	.controller('usersProfileController', usersProfileController)

usersController.$inject = ['userFactory', '$window']
usersProfileController.$inject = ['userFactory','$stateParams','$location']

function usersController(userFactory, $window, $timeout){
	var self = this
	self.name = 'User List'
	self.api = userFactory
	self.users = []
	self.newUser = {}

	self.api.list().success(function(response){
		self.users = response
	})

	self.addUser = function(first_name, last_name){
		var data = {first_name: first_name, last_name: last_name}
		self.api.addUser(data).then(function success(response){
			self.users.push(response.data.user)
			self.newUser = {}
			$window.document.querySelectorAll('#new-user-form input')[0].focus()
		})
	}
}

function usersProfileController(userFactory,$stateParams,$location){
	var self = this
	self.name = 'User Detail'
	self.api = userFactory
	self.user = null
	self.editing = false
	self.showUser = function(userId){
		self.api.user(userId).success(function(response){
			self.user = response
			console.log(response)
		})
	}
	self.showUser($stateParams.userId)

	self.updateUser = function(userId, first_name, last_name){
		var data = {first_name: first_name, last_name: last_name}
		self.api.editUser(userId,data).success(function(response){
			console.log(response)
			self.user = response
			self.editing = false
		})
	}

	self.removeUser = function(userId){
		self.api.deleteUser(userId).success(function(response){
			console.log(response)
			$location.path('/users')
		})
	}
}