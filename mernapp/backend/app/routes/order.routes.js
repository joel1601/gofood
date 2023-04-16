module.exports = app => {const order = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/create", order.create);

    // router.post("/login", order.findOne);

    app.use("/api/order/",router);
}
  