// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// LOAD DATA --------------------------------------------------------------------
// Link the routes to a series of "data" sources, which hold arrays of information.

var friendsData = require("../data/friends");
console.log(friendsData);

// ROUTING ----------------------------------------------------------------------

module.exports = function(app) {
  // API GET Requests
  // What happens when users visit a page

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // When a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey.. this data is then sent to the server...
  // Then the server saves the data to the friendsArray)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    res.json(friendsData);
  });
};
