angular
    .module('SomatiColors', ['ui.router'])
    .config(MainRouter)
    
function MainRouter ($stateProvider, $urlRouterProvider){
    $stateProvider
        
        .state('users', {
            url: '/',
            templateUrl: 'users.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
    
    $urlRouterProvider.otherwise('/');
    
}