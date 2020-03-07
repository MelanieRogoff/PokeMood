// Requiring our models
const db = require("../models");

// Routes
module.exports = function(app) {

  app.get("/api/moods", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new todo
  app.post("/api/moods", function(req, res) {

    db.User.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbUser) {
      res.json(dbUser);
    })
      .catch(function(err) {
        res.json(err);
      });
  });

}