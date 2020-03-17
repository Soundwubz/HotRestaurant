var tables = [];
var waitlist = [];


// Routes
// =============================================================

// Basic route that sends the user first to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "new.html"));
});

// Route to the page where tables/waitlist is displayed
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Route to the page where users can reserve tables
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
  
// Displays page with all tables (JSON response)
app.get("/api/tables", function(req, res) {
return res.json(tables);
});

// Displays all in waiting list (JSON response)
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});
  
  // Displays a single character, or returns false
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newcharacter = req.body;
  
    console.log(newcharacter);
  
    // We then add the json the user sent to the character array
    characters.push(newcharacter);
  
    // We then display the JSON to the users
    res.json(newcharacter);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  