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
            controller: 'eventsController as eventsCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: '../partials/about.html'
        })
    
    $urlRouterProvider.otherwise('/');
    
}