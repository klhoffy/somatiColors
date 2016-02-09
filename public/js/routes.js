angular.module('SomatiColors')
    .config(MainRouter)
    .directive('nav-top', nav)
    .directive('footer-bottom', footer)
        
function MainRouter ($stateProvider, $urlRouterProvider){
    $stateProvider
        
        .state('users', {
            url: '/',
            templateUrl: 'users.html'
        })
        
        .state('events', {
            url: '/',
            templateUrl: 'events.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        })
    
    $urlRouterProvider.otherwise('/');
    
}

function nav (){
  var directive = {};
  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_nav.html";
  return directive;
}

function footer (){
  var directive = {};
  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}