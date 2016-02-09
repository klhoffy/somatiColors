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
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_nav.html";
  return directive;
}

function footer (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}

// User Directives //'A' == attribute, 'E' == element, 'C' == class
function allUsers (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}
function oneUser (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}
function newUserForm (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}
function editUserForm (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}

// Event Directives //'A' == attribute, 'E' == element, 'C' == class
function allEvents (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}

function oneEvent (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}

function newEventForm (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}

function editEventForm (){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "_footer.html";
  return directive; 
}