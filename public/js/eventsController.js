angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['eventsFactory', 'usersFactory', '$stateParams','$location', '$http', '$window']

function EventsController(eventsFactory, usersFactory, $stateParams, $location, $http, $window){
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
       getUserEventAPI(user_id)
       eventsFactory.showEvents(user_id)
        .then(function(response){
           vm.events = response.data.events;
           
       });
   }
   
   // Call the function of getting the events for that particular user
   getEventsAPI(vm.params);
   
   vm.addEventInfo = {};
   vm.newEvent = false;

   function addEventAPI(user_id){
       eventsFactory.postEvent(user_id, vm.addEventInfo)
        .then(function(response){
            vm.addEventInfo = response.data.event;
            vm.editing = false;
            getEventsAPI(vm.params)
            vm.newEvent = false;
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
        });
    }
    
    function getEventAPI(user_id, event_id){  
       eventsFactory.showEvent(user_id, event_id)
        .then(function(response){
            vm.eventInfo = response.data.event;
            vm.updatedEventInfo = response.data.event;
        });
        
    }
    
    // Update one event for that user
    vm.editing = false
    vm.putEventAPI = putEventAPI;
    function putEventAPI(user_id, event_id){
        eventsFactory.putEvent(user_id, event_id, vm.updatedEventInfo)
        .then(function(response){
            vm.updatedEventInfo = response.data.event;
            vm.editing = false;
            getEventsAPI(vm.params)
        });
    }
      
     // Delete One Event from the front end to the API using a Factory 
    vm.deleteEventAPI = deleteEventAPI;
    function deleteEventAPI(user_id, event_id) {
        if (window.confirm("Are you sure?") ) {
    eventsFactory.removeEvent(user_id, event_id)
        .then(function(response) {
            $location.path("/user/" + vm.params + "/events");
            $window.location.reload()
        });
        } else {
            console.log("not deleting event!")
        }
    }
    
    
    
    
}