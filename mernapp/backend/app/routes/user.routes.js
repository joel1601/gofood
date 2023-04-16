module.exports = app => {const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/create", user.create);

    router.post("/login", user.login);

    app.use("/api/users/",router);
}
  