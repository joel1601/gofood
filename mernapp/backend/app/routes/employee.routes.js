module.exports = app => {
    const employee = require("../controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", employee.create);
  
    // Retrieve all Employee
    router.get("/", employee.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", employee.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", employee.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", employee.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use("/api/user", router);
  };