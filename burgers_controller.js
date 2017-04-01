var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("./models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {





 db.burgers.findAll()
    // use promise method to pass the burgers...
    .then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {

  db.burgers.create({
    burger_name: req.body.name,
    devoured:req.body.sleepy
  })
    // pass the result of our call
  .then(function(dbBurger) {
      // log the result to our terminal/bash window
    console.log(dbBurger);
      // redirect
    res.redirect("/");
  });




});

router.put("/:id", function(req, res) {

 db.burgers.update({
    devoured: req.body.sleepy
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(dbBurger) {
    res.redirect("/");
  });



  




});


// Export routes for server.js to use.
module.exports = router;
