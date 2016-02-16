angular.module('SomatiColors')
	.factory('eventsFactory', eventsFactory)

eventsFactory.$inject = ['$http', '$stateParams']

function eventsFactory($http, $stateParams){
	var eventsUrl = "http://localhost:3000/api/users/"
	var events = {}
    var user_id = $stateParams.user_id

	events.list = function(){
		return $http.get(eventsUrl + user_id + '/events')
        console.log(user_id)
	}
    
    events.addEvent = function(data){
		return $http.post(eventsUrl + user_id + '/events', data)
	}

	events.show = function(event_id){
		return $http.get(eventsUrl + user_id + '/events/' + event_id)
	}

    events.updateEvent = function(event_id,data){
		return $http.patch(eventsUrl + user_id + '/events/' + event_id, data)
	}

	events.removeEvent = function(event_id){
		return $http.delete(eventsUrl + user_id + '/events/' + event_id)
	}

	return events
}
