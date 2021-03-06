// =============================================================
// Dependencies
// =============================================================
var path = require("path");

var server = require('./server.js');
var app = server.app;
var PORT = server.PORT;

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

    // A GET Route to /table which should display the table page.
    app.get('/table', function(req, res) {
        res.sendFile(path.join(__dirname, 'viewTable.html'));
    });

    // A GET Route to /reserve which should display the reserve form page.
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname, 'makeReservation.html'));
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'home.html'));
    });

};
