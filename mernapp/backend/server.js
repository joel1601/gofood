const express = require("express");
const cors = require("cors");
const app = express();


// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//       "Access-Control-Allow-Header",
//       "Origin X-Requested-With, Content-Type, Accept"
//     );
//     next();
//     })

var corsOptions = {
  origin: "http://localhost:3002"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
app.use('/api',require("./app/routes/displayData"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const  mongoose  = require("mongoose");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to the database!");
    const fetched_Data = mongoose.connection.db.collection("foodData2");
    fetched_Data.find({}).toArray(function(err,data){
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      foodCategory.find({}).toArray(function(err,catData){
      if(err) console.log(err);
      else{
        global.foodData2 = data;
        global.foodCategory = catData;
        // console.log(global.foodData2)
      }
    })
  })
 })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/employee.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/order.routes")(app);
// require("./app/routes/displayData")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// const express = require("express");
// const cors = require("cors");

// const app = express();

// // var corsOptions = {
// //   origin: "http://localhost:8081"
// // };

// // app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// const db = require("./app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

// require("./app/routes/turorial.routes")(app);
// require("./app/routes/employee.routes")(app);

// // set port, listen for requests
// const PORT = process.env.PORT || 8082;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });