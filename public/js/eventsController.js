angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory']

function EventsController(eventsFactory){
	var self = this;
	self.api = eventsFactory
	



}