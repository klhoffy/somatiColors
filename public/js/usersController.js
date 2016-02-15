angular.module('SomatiColors')
	.controller('usersController', usersController)
	// .controller('usersProfileController', usersProfileController)

usersController.$inject = ['userFactory', '$window', '$state', 'authFactory', '$rootScope']
// usersProfileController.$inject = ['userFactory','$stateParams','$location']

function usersController(userFactory, $window, $state, authFactory, $rootScope){
	var self = this;
	self.name = 'User List';
	self.api = userFactory;
	self.users = [];
	self.newUser = {};
	self.user = {};
	self.loggedIn = null;
	self.signup = signup;
	self.login = login;
	self.logout = logout;
	self.getUser = getUser;
	self.error = null;
	// self.api.list().success(function(response){
	// 	self.users = response
	// })

///////////// authentication stuff ///////////
	$rootScope.$on('$stateChangeStart', function() {
		self.loggedIn = authFactory.isLoggedIn();	
		self.getUser()
		self.error = null
	});	

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
		$window.location.reload();
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			self.user = response.data
		})
	}

	function signup(){
		authFactory.signup(self.user.username, self.user.password )
		.then(function(response){
			if(response.data.success){
				self.login()
			} else {
				self.error = response.data.message
			}
		})
	}

	function login(){
		authFactory.login(self.user.username, self.user.password)
		.then(function(response){
			if(response.data.success){
				$state.go("landing")
			} else {
				self.error = response.data.message
			}
		})
	}
}


///////////////////////////////////////////////////////

	// self.addUser = function(first_name, last_name){
	// 	var data = {first_name: first_name, last_name: last_name}
	// 	self.api.addUser(data).then(function success(response){
	// 		self.users.push(response.data.user)
	// 		self.newUser = {}
	// 		$window.document.querySelectorAll('#new-user-form input')[0].focus()
	// 	})
	// }

// function usersProfileController(userFactory,$stateParams,$location){
// 	var self = this
// 	self.name = 'User Detail'
// 	self.api = userFactory
// 	self.user = null
// 	self.editing = false
// 	self.showUser = function(userId){
// 		self.api.user(userId).success(function(response){
// 			self.user = response
// 			console.log(response)
// 		})
// 	}
// 	self.showUser($stateParams.userId)

// 	self.updateUser = function(userId, first_name, last_name){
// 		var data = {first_name: first_name, last_name: last_name}
// 		self.api.editUser(userId,data).success(function(response){
// 			console.log(response)
// 			self.user = response
// 			self.editing = false
// 		})
// 	}

// 	self.removeUser = function(userId){
// 		self.api.deleteUser(userId).success(function(response){
// 			console.log(response)
// 			$location.path('/users')
// 		})
// 	}
