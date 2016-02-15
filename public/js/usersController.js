angular.module('SomatiColors')
	.controller('usersController', usersController)

usersController.$inject = ['userFactory', '$window', '$state', 'authFactory', '$rootScope']

function usersController(userFactory, $window, $state, authFactory, $rootScope){
	var self = this;
    self.api = userFactory;
    
    // Authentication
    self.user = {};
	self.signup = signup;
	self.login = login;
	self.loggedIn = null;
	self.logout = logout;
	self.getUser = getUser;
	self.error = null;

	$rootScope.$on('$stateChangeStart', function() {
		self.loggedIn = authFactory.isLoggedIn();	
		self.getUser()
		self.error = null
	});	

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
    
	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
		$window.location.reload();
	}
}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			self.user = response.data
		})
	}