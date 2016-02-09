angular.module('SomatiColors')
    .directive('nav-top', nav)
    .directive('footer-bottom', footer)
    
    .directive('users', allUsers)
    .directive('user', oneUser)
    .directive('new-user', newUserForm)
    .directive('edit-user', editUserForm)

    .directive('events', allEvents)
    .directive('event', oneEvent)
    .directive('new-event', newEventForm)
    .directive('edit-event', editEventForm)
    
// Index Directives //'A' == attribute, 'E' == element, 'C' == class
function nav (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/_nav.html"
  };
  return directive;
}

function footer (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

// User Directives //'A' == attribute, 'E' == element, 'C' == class
function allUsers (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function oneUser (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function newUserForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function editUserForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

// Event Directives //'A' == attribute, 'E' == element, 'C' == class
function allEvents (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function oneEvent (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function newEventForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}

function editEventForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "_footer.html"
  };
  return directive;
}