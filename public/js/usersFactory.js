angular.module('SomatiColors')
	.factory('userFactory', userFactory)

userFactory.$inject = ['$http']

function userFactory($http){
	var usersUrl = 'http://localhost:3000/api/users'
	var users = {}

	users.list = function(){
		return $http.get(usersUrl)
	}

	users.users = function(){
		return $http.get(usersUrl)
	}

	users.user = function(carId){
		return $http.get(usersUrl + '/' + user_id)
	}

	users.addUser = function(data){
		return $http.post(usersUrl, data)
	}

	users.editUser = function(carId,data){
		return $http.put(usersUrl + '/' + user_id, data)
	}

	users.deleteUser = function(carId){
		return $http.delete(usersUrl + '/' + user_id)
	}
	
	return users
}