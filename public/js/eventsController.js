angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory','$stateParams','$location', '$http']

function EventsController(eventsFactory,$stateParams,$location,$http){
	var vm = this
    vm.params = $stateParams.user_id
    vm.events = [];
    vm.getEventsApi = getEventsApi;
    vm.getEventApi = getEventApi;

    function getEventsApi(user_id){
       $http
        .get
        ('http://localhost:3000/api/users/' + user_id + '/events')
        .then(function(response){
           vm.events = response.data.events;
           console.log( response.data)
           console.log('hello')
        //    getEventApi()
        //    console.log(vm.params)
       });
   }
   
   getEventsApi(vm.params);
   
   // Get One Event Info
    vm.eventInfo = {};
    vm.updatedEventInfo = {};
    vm.event_id = event._id
    
    function getEventApi(user_id, event_id){
     $http
        .get('http://localhost:3000/api/users/' + user_id + '/events/' + event_id)
        .then(function(response){
            vm.eventInfo = response.data.event;
            vm.updatedEventInfo = response.data.event;
            console.log(user_id)
            console.log(vm.eventInfo)
            console.log('heelo')
        });
    }
    
    // Put One Events's Info
    vm.editing = false
    vm.putEventApi = putEventApi;
    function putEventApi(user_id, event_id){
    return $http
        .put('http://localhost:3000/api/users/' + user_id + '/events/' + event_id, vm.updatedEventInfo)
        .then(function(response){
            vm.eventInfo = response.data;
            vm.updatedEventInfo = response.data;
            vm.editing = false;
            console.log(response)
        });
    }
}