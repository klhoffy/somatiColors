angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory','$stateParams','$location']

function EventsController(eventsFactory,$stateParams,$location){
	var vm = this
    vm.params = $stateParams.user_id	

}