var User = require('../models/user.js');
var Event = require('../models/event.js');

// GET api/:id/events
function getEvents(request, response) {
  var id = request.params.id;

  Event.find({ user_id: id}, function (error, events) {
      if(error) response.json({ message: "getEvents ERROR:" + error });
      response.json(events);
  });
};

// POST api/:id/events/new
function postEvent(request, response) { 
  var id = request.params.id; 
  var event = new Event();

  event.title             = request.body.title;
  event.location          = request.body.location;
  event.user_id           = id;
  event.save(function (error) {
    if(error) response.json({ message: "postEvent ERROR:" + error });
    response.json({ message: "postEvent confirmation" });
  });
};

// GET api/:id/events/:id
function getEvent(request, response) {
  var id = request.params.id;

  Event.findById({ _id: id }, function (error, event){
    if(error) response.json({ message: "getEvent ERROR:" + error });
    response.json(event);
  });
};

// PUT api/:id/events/:id
function putEvent(request, response) {
  var id = request.params.id;

  Event.findById({ _id: id }, function (error, event){
    if(error) response.json({ message: "putEvent ERROR:" + error });

    if(request.body.title) event.title               = request.body.title;
    if(request.body.location) event.name             = request.body.location;
    event.save( function (error, event){
      if (error) response.json({ message: "putEvent SAVE ERROR:" + error });
      response.json({ message: "putEvent confirmation" });
    });
  });
};

// DELETE api/:id/events/:id
function deleteEvent(request, response) {
  var id = request.params.id;

  Event.remove({ _id: id }, function (error) {
    if(error) response.json({ message: "deleteEvent ERROR:" + error });
    response.json({ message: "deleteEvent confirmation" });
  });
};

module.exports = {
  getEvents: getEvents,
  postEvent: postEvent,
  getEvent: getEvent,
  putEvent: putEvent,
  deleteEvent: deleteEvent
};