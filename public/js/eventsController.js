angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['$stateParams','$location', '$http']

function EventsController($stateParams,$location, $http){
	var vm = this
	vm.params = $stateParams.user_id	



}