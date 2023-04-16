module.exports = app => {const displayData = require("../controllers/displayData.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", User.create);

    router.post("/login", User.findOne);

    app.use("/api/displayData/",router);
}