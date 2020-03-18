// =============================================================
// Import the arrays from the separate files
// =============================================================
var tables = require('????');
var waitlist = require('????');

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

    // A GET route with the url /api/tables. This will be used to display a JSON of all possible reservations.
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });

    // A GET route with the url /api/tables. This will be used to display a JSON of all those on a waitlist.
    app.get("/api/waitlist", function(req, res) {
        return res.json(waitlist);
    });

};
// =============================================================
// =============================================================
