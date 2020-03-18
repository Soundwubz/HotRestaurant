var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

require(path.join(__dirname, 'apiRoutes'))(app);
require(path.join(__dirname, 'htmlRoutes'))(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

module.exports = {
    app: app,
    PORT: PORT
}