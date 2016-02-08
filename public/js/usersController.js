angular
    .module('SomatiColors')
    .controller('UsersController', UsersController);

UsersController.$inject = ['$http'];

function UsersController($http){
  var self = this;


  // New User
  self.newUser = newUser;
  self.addUser = {};

  function newUser(){
    $http
      .post('http://localhost:3000/api/', self.addUser)
      .then(function(response){
        getUsers();
    });
    self.addUser = {};
  }
  
  
  // Get Users
  self.getUsers = getUsers;
  self.users = [];
  
  function getUsers(){
    $http
      .get('http://localhost:3000/api')
      .then(function(response){
        self.users = response.data.users;
    });
  }
  getUsers();
  
  
  // Get User
  self.getUser = getUser;
  self.showUser = {};

  function getUser(user_id){
    $http
      .get('http://localhost:3000/api/' + user_id)
      .then(function(response){
        self.showUser = response.data.user;
    });
  }
  
  // Update User
  self.putUser = putUser;
  self.updateUser = {};
  
  function putUser(user_id){
    $http
      .put('http://localhost:3000/api/' + user_id)
      .then(function(response){
        getUsers();
    });
    self.updateUser = {};
  }
  

  // Delete User
  self.deleteUser = deleteUser;
  
  function deleteUser(user){
    $http
      .delete("http://localhost:3000/api/" + user._id)
      .then(function(response){
        var index = self.all.indexOf(user);
        self.all.splice(index, 1);
      });
  }

}