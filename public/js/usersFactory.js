angular.module('SomatiColors')
	.factory('userFactory', userFactory)

userFactory.$inject = ['$http', '$window']

function userFactory($http, $window){
	var usersUrl = 'http://localhost:3000/api/users/me'
	var users = {}

	users.user = function(user_id){
		return $http.get(usersUrl + '/' + user_id)
	}

	users.editUser = function(user_id,data){
		return $http.put(usersUrl + '/' + user_id, data)
	}

	users.deleteUser = function(user_id){
		return $http.delete(usersUrl + '/' + user_id)
	}
	
	return users
}