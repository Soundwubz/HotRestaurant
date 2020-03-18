
  var tables = [];
  var waitlist = [];

// Routes
// =============================================================

module.exports = function(app) {
  // Create New Tables - takes in JSON input


  if (tables.length > 4) {
      postWaitlist();
  } else {
    postTables();
  }
  function postTables () {
      app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);

    return res.json(tables);
  });
};

function postWaitlist () {
    app.post("/api/waitlist", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  waitlist.push(newReservation);

  res.json(newReservation);

  return res.json(waitlist);
});
};
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
}

