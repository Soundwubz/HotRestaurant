// =============================================================
// Dependencies
// =============================================================
var path = require("path");

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

    // A GET Route to /table which should display the table page.
    app.get('/table', function(req, res) {
        res.sendFile(path.join(__dirname, 'table.html'));
    });

    // A GET Route to /reserve which should display the reserve form page.
    app.get('/reserve', function(req, res) {
        res.sendFile(path.join(__dirname, 'reserve.html'));
    });

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'home.html'));
    });

};
