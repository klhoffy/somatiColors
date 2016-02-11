var User = require('../models/user.js');

// GET /api
function getUsers(request, response) {
 User.find( function (error, users) {
    if(error) response.json({ message: "getUsers ERROR:" + error });
    response.json({ users: users });
  }).select('-__v');
};

// POST /api/
function postUser(request, response) {
  var user = new User();

  user.username  = request.body.username;
  user.password  = request.body.password;
  user.first_name = request.body.first_name;
  user.last_name = request.body.last_name;
  user.email  = request.body.email;
  user.mental_health_physician  = request.body.mental_health_physician; 
  user.physician_email  = request.body.physician_email;
    
  user.save(function (error) {
    if(error) response.json({ message: "postUsers ERROR:" + error });
    response.json({ message: "postUser confirmation" });
  });
};

// GET /api/:id
function getUser(request, response) {
  var id = request.params.id;

  User.findOne({ _id: id }, function (error, user){
    if(error) response.json({ message: "getUser ERROR:" + error });
    response.json({ user: user });
  }).select('-__v');
};

// PUT /api/:id
function putUser(request, response) {
  var id = request.params.id;

  User.findOne({ _id: id }, function (error, user){
    if(error) response.json({ message: "putUser ERROR:" + error });

    if(request.body.username) user.username  = request.body.username;
    if(request.body.password) user.password  = request.body.password;
    if(request.body.first_name) user.first_name = request.body.first_name;
    if(request.body.last_name) user.last_name = request.body.last_name;
    if(request.body.email) user.email  = request.body.email;
    if(request.body.mental_health_physician) user.mental_health_physician  = request.body.mental_health_physician; 
    if(request.body.physician_email) user.physician_email  = request.body.physician_email;

    user.save( function (error, user){
      if (error) response.json({ message: "putUser SAVE ERROR:" + error });
      response.json({ message: "putUser confirmation" });
    });
  });
};

// DELETE /api/:id
function deleteUser(request, response) {
  var id = request.params.id;

  User.remove({ _id: id }, function (error) {
    if(error) response.json({ message: "deleteUser ERROR:" + error });
    response.json({ message: "deleteUser confirmation" });
  });
};

module.exports = {
  getUsers: getUsers,
  postUser: postUser,
  getUser: getUser,
  putUser: putUser,
  deleteUser: deleteUser
};