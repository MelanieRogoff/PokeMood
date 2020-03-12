const path = require('path');
const express = require("express");


const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.use('/public', express.static('public'));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });

    app.get("/login", function(req, res) {
      if (req.user) { //if user has an account
        return res.redirect("/mood"); //send them to the mood page
      } //else
      res.sendFile(path.join(__dirname, "../public/html/login.html")); //send login file to user
    });
  
    app.get("/mood", isAuthenticated, function(req, res) {
      if (req.mood) { //if user has a mood picked out
        res.redirect("/pokemon"); //send them to Pokemon page
      }
      res.sendFile(path.join(__dirname, "../public/html/mood.html"));
    });
  

    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
      });
  };
  