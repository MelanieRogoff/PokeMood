const express = require("express");
const session = require("express-session");
//const db = require("./models"); //get the model for syncing

// Setting up port 
const PORT = process.env.PORT || 8080;

//Start Express:
const app = express();


// Express.static middleware serves static content from "public" directory in app.
app.use(express.static("public"));

// Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setting up the routes and then running app.use on them
require("./routes/html-routes.js");
require("./routes/api-routes.js");


// Syncing the database and logging a message to the user upon success
//db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
//});
