// Your server.js file should require the basic npm packages we've used in class: express and path.

// DEPENDENCIES: The npm packages needed to allow our server to function properly
var express = require("express");

// ----------------------------------------------------------------

// EXPRESS CONFIGURATION: basic properties for our express server
// tell node that we're creating an "express" server
var app = express();

// Set an initial port. This will be used later ini our listener
var PORT = process.env.PORT || 8080;

// Set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----------------------------------------------------------------

// ROUTER
// point our server to a series of "route" files; gives our server a map of how to respond when users visit or request data from various URLs.
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// ----------------------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
