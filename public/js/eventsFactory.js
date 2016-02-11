angular.module('SomatiColors')
	.factory('eventsFactory', eventsFactory)

eventsFactory.$inject = ['$http']

function eventsFactory($http){
	var eventsUrl = "http://localhost:3000/api/events"
	var events = {}

	events.list = function(){
		return $http.get(eventsUrl)
	}

	events.show = 





	return events
}
