angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory', 'usersFactory', '$stateParams','$location', '$http']

function EventsController(eventsFactory, usersFactory, $stateParams, $location, $http){
	var vm = this
    vm.params = $stateParams.user_id
    vm.user_emotion = $stateParams.user_id._id
    vm.events = [];
    vm.getEventsAPI = getEventsAPI;
    vm.getEventAPI = getEventAPI;
    vm.addEventAPI = addEventAPI;
    vm.putEventAPI = putEventAPI;
    vm.deleteEventAPI = deleteEventAPI;
    
    vm.userInfo = {};
    vm.updatedUserInfo = {};
    vm.getUserEventAPI = getUserEventAPI;
    
    
    
    // Get the list of all events for that user from the API
    function getEventsAPI(user_id){
       $http
        .get
        ('http://localhost:3000/api/users/' + user_id + '/events')
        .then(function(response){
           vm.events = response.data.events;
           
       });
   }
   
   // Call the function of getting the events for that particular user
   getEventsAPI(vm.params);
   
   vm.addEventInfo = {};
   
   function addEventAPI(user_id){
    return $http
        .post('http://localhost:3000/api/users/' +  user_id + '/events', vm.addEventInfo)
        .then(function(response){
            vm.addEventInfo = response.data.event;
            vm.editing = false;
            getEventsAPI(vm.params)
            console.log(vm.addEventInfo)
        });
    }
   
   // Get one event from that user
    vm.eventInfo = {};
    vm.updatedEventInfo = {};
    vm.userInfo = {};
    
    function getUserEventAPI(user_id){
        usersFactory.showUser(user_id)
        .then(function(response){
            vm.userInfo = response.data;
            vm.updatedUserInfo = response.data;
            console.log(user_id)
            console.log(vm.userInfo)
        });
    }
    
    function getEventAPI(user_id, event_id){
       getUserEventAPI(user_id)
       console.log(user_id)
     $http
        .get('http://localhost:3000/api/users/' + user_id + '/events/' + event_id)
        .then(function(response){
            vm.eventInfo = response.data.event;
            vm.updatedEventInfo = response.data.event;
            console.log(vm.userInfo.joy)
        });
        
    }
    
    // Update one event for that user
    vm.editing = false
    vm.putEventAPI = putEventAPI;
    function putEventAPI(user_id, event_id){
    return $http
        .put('http://localhost:3000/api/users/' + user_id + '/events/' + event_id, vm.updatedEventInfo)
        .then(function(response){
            vm.updatedEventInfo = response.data.event;
            vm.editing = false;
            getEventsAPI(vm.params)
        });
    }
    
    // Deletes the one event from that user
    function deleteEventAPI(user_id, event_id){
    $http
        .delete('http://localhost:3000/api/users/' +  user_id + '/events/' + event_id)
        .then(function(response){
            var index = vm.events.indexOf(event_id);
            vm.events.splice(index, 1);
            getEventAPI(vm.params)
        });
    }
}