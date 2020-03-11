const path = require('path');

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/login", function(req, res) {
      // If user has an account send them to the mood page
      if (req.user) {
        return res.redirect("/mood");
      }
      res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });
  
    app.get("/mood", function(req, res) {
      // If the user already has a mood send them to Pokemon page
      if (req.mood) {
        res.redirect("/pokemon");
      }
      res.sendFile(path.join(__dirname, "../public/html/pokemon.html"));
    });

    app.get("/pokemon", function(req, res) {
        if (req.pokemon) {
          res.redirect("/");
        }
        res.sendFile(path.join(__dirname, "../public/html/pokemon.html"));
      });
  
    app.get("/login", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    app.get("/signup", function(req, res) {
        if (!req.user) {
            res.redirect("/signup");
        }
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
      });
  };
  