angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory','$stateParams','$location']

function EventsController(eventsFactory,$stateParams,$location){
	var self = this;
	self.api = eventsFactory
    self.newEvent = {}
    self.event = null
	self.editing = false
	self.showEvent = function(event_id){
		self.api.show(event_id).success(function(response){
			self.event = response
			console.log(response)
		})
	}
    self.api.list()
        .success(function(res) {
            self.events = res
        })
        self.addEvent = function(title, date, location, people_involved, situation, triggers, bodily_sensations, emotion, automatic_thoughts, rational_thoughts, behaviors, consequences, challenged_beliefs, lesson, old_perspective, new_perspective, coping_strategies, user_id) {
            var data = {title:title, date:date, location:location, people_involved:people_involved, situation:situation, triggers:triggers, bodily_sensations:bodily_sensations, emotion:emotion, automatic_thoughts:automatic_thoughts, rational_thoughts:rational_thoughts, behaviors:behaviors, consequences:consequences, challenged_beliefs:challenged_beliefs, lesson:lesson, old_perspective:old_perspective, new_perspective:new_perspective, coping_strategies:coping_strategies, user_id:user_id}
            self.api.addEvent(data)
                .then(function success(res) {
                    self.events.push(res.data.event)
                    self.newEvent = {}
                })
        }

	self.showEvent($stateParams.event_id)

	self.updateEvents = function(event_id, title, date, location, people_involved, situation, triggers, bodily_sensations, emotion, automatic_thoughts, rational_thoughts, behaviors, consequences, challenged_beliefs, lesson, old_perspective, new_perspective, coping_strategies, user_id){
		var data = {title:title, date:date, location:location, people_involved:people_involved, situation:situation, triggers:triggers, bodily_sensations:bodily_sensations, emotion:emotion, automatic_thoughts:automatic_thoughts, rational_thoughts:rational_thoughts, behaviors:behaviors, consequences:consequences, challenged_beliefs:challenged_beliefs, lesson:lesson, old_perspective:old_perspective, new_perspective:new_perspective, coping_strategies:coping_strategies, user_id:user_id}
		self.api.updateEvents(event_id,data).success(function(response){
			console.log(response)
			self.events = response
			self.editing = false
		})
	}

	self.removeEvents = function(event_id){
		self.api.removeEvents(event_id).success(function(response){
			console.log(response)
			$location.path('/events')
		})
	}


}