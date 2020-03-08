const path = require('path');
// Routes
// =============================================================
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});
  app.get('/mood', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/dist/mood.html'));
  });
}
  // add route loads the add.html page,
  // where users can enter new characters to the db
  // app.get(“/add”, function(req, res) {
    // res.sendFile(path.join(__dirname, “../public/add.html”));
  // });
  // all route loads the all.html page,
  // where all characters in the db are displayed
  //app.get(“/all”, function(req, res) {
    // res.sendFile(path.join(__dirname, “../public/all.html”));
  //});




