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
            templateUrl: '../partials/users/users.html'
        })
        
        .state('events', {
            url: '/events',
            templateUrl: '../partials/events/events.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: '../partials/about.html'
        })
    
    $urlRouterProvider.otherwise('/');
    
}