const path = require('path');
// Routes
// =============================================================
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});
  app.get('/mood', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/mood.html'));
  });

app.get('/pokemon', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/pokemon.html'));
});
}