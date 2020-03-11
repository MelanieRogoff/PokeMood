// Requiring our models and passport 
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user); //If user has valid login, send them to login page, otherwise throw error. 
  });

  // Route for signing up a user 
  app.post("/api/signup", function(req, res) {
    db.User.create({ //if user is created successfully
      email: req.body.email,
      password: req.body.password
    })
      .then(function() { 
        res.redirect(307, "/api/login"); //take them to login page
      })
      .catch(function(err) { //otherwise throw an error
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) { //if user isn't logged in
      res.json({}); //send back empty object
    } else {
      res.json({ //send back user's email + PW
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

//   app.get("/api/moods", function(req, res) {
//     db.User.findAll({}).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

//   // POST route for saving a new mood
//   app.post("/api/moods", function(req, res) {

//     db.User.create({
//       user_name: req.body.user_name,
//       password: req.body.password,
//       mood: req.body.mood
//     }).then(function(dbUser) {
//       res.json(dbUser);
//     })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });

// }