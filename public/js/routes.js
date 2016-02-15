angular.module('SomatiColors')
    .config(MainRouter)
    .config(interceptor)

function interceptor($httpProvider){
 $httpProvider.interceptors.push('authInterceptorFactory')
}
        
function MainRouter ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login')

    $stateProvider    
        .state('landing', {
            url: '/',
            templateUrl: '../partials/landing.html'
        })

        .state('login', {
        url: '/login',
        templateUrl: '../partials/login.html',
        controller: 'UsersController as usersCtrl'
        })

        .state("signup", {
            url: '/signup',
            templateUrl: '../partials/signup.html',
            controller: "UsersController as usersCtrl"
        })

         .state('loggedOut', {
        url: '/loggedOut',
        templateUrl: '../partials/landing.html',
        controller: "UsersController as usersCtrl"
        })


        .state('users', {
            url: '/users',
            templateUrl: '../partials/users.html',
            controller: 'UsersController as usersCtrl'
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
  
    
}