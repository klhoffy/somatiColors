angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory','$stateParams','$location', '$http']

function EventsController(eventsFactory, $stateParams, $location, $http){
	var vm = this
    vm.params = $stateParams.user_id
    vm.events = [];
    vm.getEventsApi = getEventsApi;
    vm.getEventApi = getEventApi;

    // Get the list of all events for that user from the API
    function getEventsApi(user_id){
       $http
        .get
        ('http://localhost:3000/api/users/' + user_id + '/events')
        .then(function(response){
           vm.events = response.data.events;
           console.log( response.data)
           console.log('hello')
       });
   }
   
   // Call the function of getting the events for that particular user
   getEventsApi(vm.params);
   
   // Get one event from that user
    vm.eventInfo = {};
    vm.updatedEventInfo = {};
    
    function getEventApi(user_id, event_id){
     $http
        .get('http://localhost:3000/api/users/' + user_id + '/events/' + event_id)
        .then(function(response){
            vm.eventInfo = response.data.event;
            vm.updatedEventInfo = response.data.event;
            console.log(vm.eventInfo)
            console.log(vm.updatedEventInfo)
        });
    }
    
    // Update one event for that user
    vm.editing = false
    vm.putEventAPI = putEventAPI;
    function putEventAPI(user_id, event_id){
    return $http
        .put('http://localhost:3000/api/users/' + user_id + '/events/' + event_id, vm.updatedEventInfo)
        .then(function(response){
            vm.eventInfo = response.data.event;
            console.log(vm.eventInfo)
            vm.updatedEventInfo = response.data.event;
            console.log(vm.updatedEventInfo)
            vm.editing = false;
            console.log(response)
        });
    }
}