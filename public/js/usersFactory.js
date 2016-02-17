angular.module('SomatiColors')
	.factory('usersFactory', usersFactory)

usersFactory.$inject = ['$http', '$stateParams']

function usersFactory($http, $stateParams){
    
	var users = {}
    
	users.show = function(user_id){
		return $http.get("http://localhost:3000/api/users/" + user_id)
	}

    users.updateUser = function(user_id,data){
		return $http.patch("http://localhost:3000/api/users/" + user_id, data)
	}

	users.removeUser = function(user_id){
		return $http.delete("http://localhost:3000/api/users/" + user_id)
	}

	return users
}
