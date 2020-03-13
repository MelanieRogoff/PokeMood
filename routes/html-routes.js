const path = require('path');
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.send("testing");
      //  res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/login", function(req, res) {
      if (req.user) { //if user has an account
        return res.redirect("/mood"); //send them to the mood page
      } //else
      res.sendFile(path.join(__dirname, "../public/html/login.html")); //send login file to user
    });
  
    app.get("/mood", function(req, res) {
       res.sendFile(path.join(__dirname, "../public/html/mood.html"));
    });

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
      });
  };
  