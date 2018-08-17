let express = require("express");

let router = express.Router();

// Import the model (cat.js) to use its database functions.
let burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
  
    console.log(data);
    res.render("index", {data: data});
  });
});

router.put("/api/burger", function(req, res) {
  console.log(req.body)
  let val = [req.body.burger_name, req.body.devoured]
 burger.create(["burger_name", "devoured"], val, function(data) {
   console.log(data)
 })
});

router.put("/api/burger/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
