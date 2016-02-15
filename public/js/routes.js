angular.module('SomatiColors')
    .config(MainRouter)
        
function MainRouter ($stateProvider, $urlRouterProvider){
    $stateProvider
        
        .state('landing', {
            url: '/',
            templateUrl: '../partials/landing.html'
        })

        .state('users', {
            url: '/users',
            templateUrl: '../partials/users.html',
            controller: 'usersController as usersCtrl'
        })
        
        .state('events', {
            url: '/users/:user_id/events',
            templateUrl: '../partials/events.html',
            controller: 'EventsController as eventsCtrl'
        })
        
        .state('event', {
			url: '/users/:user_id/events/:eventId',
			templateUrl: 'partials/events/event.html',
			controller: 'EventsController as eventsCtrl'
		})
    
    $urlRouterProvider.otherwise('/');
    
}