angular.module('SomatiColors')
	.controller('UsersController', UsersController)

UsersController.$inject = ['$state', 'authFactory', '$rootScope', '$window', '$http', '$location', '$scope', '$stateParams']

function UsersController($state, authFactory, $rootScope, $window, $http, $location, $scope, $stateParams) {
	var vm = this
    vm.params = $stateParams.user_id
    


    // User Auth Stuff    
	vm.user = {}
	vm.loggedIn = authFactory.isLoggedIn()
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.error = null

	$rootScope.$on('$stateChangeStart', function() {
		vm.loggedIn = authFactory.isLoggedIn();	
		vm.getUser()
		vm.error = null
        console.log('State changing!')
	});	

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
        console.log("logging out!");
		$window.location.reload();
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			vm.user = response.data
            vm.user_id = response.data.user_id
            console.log( response.data )
            console.log( 'getUser' + vm.user_id )
            getUserApi(vm.user_id)
		})
	}
    getUser()

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
    vm.info = {};
    vm.updatedInfo = {};
    vm.getUserApi = getUserApi;
    function getUserApi(user_id){
    return $http
        .get('http://localhost:3000/api/users/' +  user_id)
        .then(function(response){
            
            vm.info = response.data;
            vm.updatedInfo = response.data;
            console.log(response)
        });
    }
    
    
    // Put One User's Info
    vm.editing = false
    vm.putUserAPI = putUserAPI;
    function putUserAPI(user_id){
    return $http
        .put('http://localhost:3000/api/users/' +  user_id, vm.updatedInfo)
        .then(function(response){
            vm.info = response.data;
            vm.updatedInfo = response.data;
            vm.editing = false;
            console.log(response)
        });
    }
  
    
      // Delete One User    
    vm.deleteUserApi = deleteUserApi;
    function deleteUserApi(user_id){
    return $http
        .delete('http://localhost:3000/api/users/' +  user_id)
        .then(function(response){
            console.log(response);
            logout();
            $location.path('/');
        });
    }

}