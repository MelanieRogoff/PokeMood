// Requiring our models
const db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/moods", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new mood
  app.post("/api/moods", function(req, res) {

    db.User.create({
      user_name: req.body.user_name,
      password: req.body.password,
      mood: req.body.mood
    }).then(function(dbUser) {
      res.json(dbUser);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

}