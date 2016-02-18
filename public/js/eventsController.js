angular.module('SomatiColors')
	.controller('EventsController', EventsController)

EventsController.$inject=['$stateParams','$location', '$http']

function EventsController($stateParams,$location, $http){
	var vm = this
	vm.params = $stateParams.user_id	

   	// vm.events = [];
    //   vm.getEventsAPI = getEventsAPI;

    // 	function getEventsAPI(user_id){
    // 	$http
    //     .get('http://localhost:3000/api/users/' +  user_id + '/events')
    //     .then(function(response){
    //         vm.events = response.data.events;
    //         console.log( response.data.events)
    //         // console.log( vm.events[0].title )
            
    //     });
    // }




}