const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);
db.employee  = require("./employee.model.js")(mongoose);
db.user  = require("./User.model.js")(mongoose);
db.order = require("./order.model.js")(mongoose);
module.exports = db;
