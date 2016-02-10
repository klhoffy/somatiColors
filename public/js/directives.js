angular.module('SomatiColors')
    .directive('navTop', navTop)
    .directive('footerBottom', footerBottom)
    
    .directive('allUsers', allUsers)
    .directive('oneUser', oneUser)
    .directive('newUserForm', newUserForm)
    .directive('editUserForm', editUserForm)

    .directive('allEvents', allEvents)
    .directive('oneEvent', oneEvent)
    .directive('newEventForm', newEventForm)
    .directive('editEventForm', editEventForm)
    
// Index Directives //'A' == attribute, 'E' == element, 'C' == class
function navTop (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/_nav.html"
  };
  return directive;
}

function footerBottom (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/_footer.html"
  };
  return directive;
}

// User Directives //'A' == attribute, 'E' == element, 'C' == class
function allUsers (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/users/users.html"
  };
  return directive;
}

function oneUser (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/users/user.html"
  };
  return directive;
}

function newUserForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/users/new.html"
  };
  return directive;
}

function editUserForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/users/edit.html"
  };
  return directive;
}

// Event Directives //'A' == attribute, 'E' == element, 'C' == class
function allEvents (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/events/events.html"
  };
  return directive;
}

function oneEvent (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/events/event.html"
  };
  return directive;
}

function newEventForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/events/new.html"
  };
  return directive;
}

function editEventForm (){
  var directive = {
  restrict: 'E',
  replace: true,
  templateUrl:  "../partials/events/edit.html"
  };
  return directive;
}