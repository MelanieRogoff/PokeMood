const path = require('path');

const isAuthenticated = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
// module.exports = function(app) {
//   app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/html/index.html"));
// });
//   app.get('/mood', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/html/mood.html'));
//   });

// app.get('/pokemon', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/html/pokemon.html'));
// });

// app.get('/login', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public/html/login.html'));
// });
// }

module.exports = function(app) {
    app.get("/", function(req, res) {
      // If user has an account send them to the mood page
      if (req.user) {
        res.redirect("/mood");
      }
      res.sendFile(path.join(__dirname, "../public/html/index.html"));
    });
  
    app.get("/mood", function(req, res) {
      // If the user already has a mood send them to the Pokemon page
      if (req.mood) {
        res.redirect("/pokemon");
      }
      res.sendFile(path.join(__dirname, "../public/html/pokemon.html"));
    });

    app.get("/pokemon", function(req, res) {
        // If the user already has a mood send them to home
        if (req.pokemon) {
          res.redirect("/");
        }
        res.sendFile(path.join(__dirname, "../public/html/pokemon.html"));
      });
  
    // If a user who is not logged in tries to access this route they will be redirected to the login page
    app.get("/login", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });
  
  };
  