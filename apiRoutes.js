// =============================================================
// Import the arrays from the separate files
// =============================================================
var tables = [
    {
        name: "Vince",
        phone: 5555555555,
        email: "email@gmail.com",
        unique_id: 1
    },
    {
        name: "Rando",
        phone: 555234455,
        email: "anotheremail@gmail.com",
        unique_id: 2
    },
    {
        name: "Rando",
        phone: 555234455,
        email: "anotheremail@gmail.com",
        unique_id: 2
    },
    {
        name: "Rando",
        phone: 555234455,
        email: "anotheremail@gmail.com",
        unique_id: 2
    },
    {
        name: "Rando",
        phone: 555234455,
        email: "anotheremail@gmail.com",
        unique_id: 2
    },
    {
        name: "Mr. Waitlist",
        phone: 555234455,
        email: "anotheremail@gmail.com",
        unique_id: 2
    }
];

// =============================================================
// Export the API routes so that they can be accessed in other files
// =============================================================
module.exports = function(app) {

      // A GET route with the url /api/tables. This will be used to display a JSON of all possible reservations.
      app.get("/api/tables", function(req, res) {
          return res.json(tables.slice(0,5));
      });
  
      // A GET route with the url /api/tables. This will be used to display a JSON of all those on a waitlist.
      app.get("/api/waitlist", function(req, res) {
          return res.json(tables.slice(5));
      });

    // If the tables array already has five reservations, add new reservations to the waitlist.
    // if (tables.length > 4) {
    //     postWaitlist();
    // } else {
    //   postTables();
    // }

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
  
      // return res.json(tables);
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
  
    // return res.json(waitlist);
  });
  };

};
// =============================================================
// =============================================================
