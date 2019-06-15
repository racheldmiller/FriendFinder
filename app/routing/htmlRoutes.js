// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// DEPENDENCIES: use the path package to get the correct file path for html
var path = require("path");

// ---------------------------------------------------------

// ROUTING
module.exports = function(app) {
  // HTML GET requests, what happens when users visit a page.
  // app.get("/home"),
  //   function(req, res) {
  //     res.sendFile(path.join(__dirname, "../public/home.html"));
  //   };

  // method of express (get -> https) looking for route name, takes callback function w/ req + res passed in
  // if it gets a response, send file that's in the public folder
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found, default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
