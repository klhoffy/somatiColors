var User = require('../models/user.js'),
      jwt = require('jsonwebtoken'),
      mySpecialSecret = "pizza";

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

  user.name  = request.body.name;
  user.username  = request.body.username;
  user.password  = request.body.password;
  user.first_name = request.body.first_name;
  user.last_name = request.body.last_name;
  user.mental_health_physician  = request.body.mental_health_physician; 
  user.physician_email  = request.body.physician_email;  
  user.joy = request.body.joy;
  user.acceptance = request.body.acceptance;
  user.fear = request.body.thing;
  user.surprise = request.body.fear;
  user.sadness = request.body.sadness;
  user.disgust = request.body.disgust;
  user.anger = request.body.anger;
  user.anticipation = request.body.anticipation; 
    
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

    if(request.body.name) user.username  = request.body.name;
    if(request.body.username) user.username  = request.body.username;
    if(request.body.password) user.password  = request.body.password;
    if(request.body.first_name) user.first_name = request.body.first_name;
    if(request.body.last_name) user.last_name = request.body.last_name;
    if(request.body.mental_health_physician) user.mental_health_physician  = request.body.mental_health_physician; 
    if(request.body.physician_email) user.physician_email  = request.body.physician_email;
    if(request.body.joy) user.joy = request.body.joy;
    if(request.body.acceptance) user.acceptance = request.body.acceptance;
    if(request.body.fear) user.fear = request.body.thing;
    if(request.body.surprise) user.surprise = request.body.fear;
    if(request.body.sadness) user.sadness = request.body.sadness;
    if(request.body.disgust) user.disgust = request.body.disgust;
    if(request.body.anger) user.anger = request.body.anger;
    if(request.body.anticipation) user.anticipation = request.body.anticipation; 

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

//code for apiRouter.route('/authenticate')
function authenticateUser(req, res) {
  console.log('trying to generate a JWT')
  // 1 - find the user in our db
  User.findOne({
    username: req.body.username
  }).select('name username password').exec(function(err, user){
    if(err) throw err
    if(!user){
      res.json({success: false, message: "No such user"})
    } else if(user){
      // check passwords
      var validPassword = user.comparePassword(req.body.password)
      if(!validPassword){
        res.json({success: false, message: "Invalid password"})
      } else {
        // password is good!
        var token = jwt.sign({
          name: user.name,
          username: user.username
        }, mySpecialSecret, {
          expiresInMinutes: 1440
        })
        // now let's actually give it to them!
        console.log("logged in")
        res.json({ success: true, message: "enjoy your token!", token: token})
      }
    }
  })
}

function checkUser(req, res, next){
  // let's check everywhere for the JWT!
  var token = req.body.token || req.param('token') || req.headers['x-access-token']
  // if we find the token, let's use mySpecialSecret to try and decode it.
  if(token){
    jwt.verify(token, mySpecialSecret, function(err, decoded){
      if(err){
        res.status(403).send({success: false, message: "forbidden, token can't be decoded"})
      } else {
        req.decoded = decoded
        next()
      }
    })
  } else {
    res.status(403).send({success: false, message: "no token. You're not even trying"})
  }
  // this is going to run EVERY time our API is hit
  // we want to check if the user is logged in here
  console.log("checking if user is logged in")
}

module.exports = {
  getUsers: getUsers,
  postUser: postUser,
  getUser: getUser,
  putUser: putUser,
  deleteUser: deleteUser,
  authenticateUser: authenticateUser,
  checkUser: checkUser
};