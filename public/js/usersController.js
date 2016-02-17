angular.module('SomatiColors')
	.controller('UsersController', UsersController)

UsersController.$inject = ['$state', 'authFactory', '$rootScope', '$window', '$http', '$location', '$scope', '$stateParams']

function UsersController($state, authFactory, $rootScope, $window, $http, $location, $scope, $stateParams) {
	var vm = this
    vm.info = [];
    vm.params = $stateParams.user_id
    
    
    

    // User Auth Stuff    
	vm.user = {}
	vm.loggedIn = null
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.error = null

	$rootScope.$on('$stateChangeStart', function() {
		vm.loggedIn = authFactory.isLoggedIn();	
		vm.getUser()
		vm.error = null
	});	

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
		$window.location.reload();
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			vm.user = response.data
            vm.user_id = response.data.user_id
            console.log( response.data )
            console.log( 'getUser' + vm.user_id )
		})
	}

	function signup(){
		authFactory.signup(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				vm.login()
			} else {
				vm.error = response.data.message
			}
		})
	}

	function login(){
		authFactory.login(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				$state.go("landing")
			} else {
				vm.error = response.data.message
			}
		})
	}
    
    
    // Get One User's Info
    vm.info = [];
    vm.getUserApi = getUserApi;
    // getUserApi();
    function getUserApi(user_id){
    $http
        .get('http://localhost:3000/api/users/' +  user_id )
        .then(function(response){
           return vm.info = response.data;
        });
    }
    
    // Delete One User    
    vm.deleteUserApi = deleteUserApi;   
    function deleteUserApi(user_id){
        vm.api.deleteUserApi(user_id).success(function(response){
            console.log(response)
            $location.path('/')
        })
    }

}