// // const { employee } = require("../models");
// const db = require("../models");
// const User = db.user;
// const { body, validationResult } = require('express-validator');
// // const jwt = require("jsonwebtoken")
// // const bcrypt = require("bcryptjs");

// // Create and Save a new Employee
// exports.create = 
//                  [body('email').isEmail(),
//                   body('userName').isLength({ min: 5 }),
//                  body('password','incorrect password').isLength({ min: 5 })],
//                  (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // Create a Employee

//     // const salt = await bcrypt.genSalt(10);
//     // const secPassword = await bcrypt.hash(req.body.password,salt)
//     const user = new User({
//         userName:req.body.userName,
//         password:req.body.password,
//         email:req.body.email,
//         location:req.body.location
//     })

    

// //   Save Tutorial in the database
//  user
//     .save(user)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

// exports.findOne = 
//                  body('email').isEmail(),
//                  body('password','incorrect password').isLength({ min: 5 }),
//                  (req, res) => {
//     // const errors = validationResult(req);s
//     // if (!errors.isEmpty()) {
//     //   return res.status(400).json({ errors: errors.array() });
//     // }
//     // // Create a Employee
//   const user = new User({
//         email:req.body.email,
//         password:req.body.password
//   });

//   // Save Tutorial in the database
//  user
//     .save(user)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

const { user } = require("../models");
const db = require("../models");
const User = db.user;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Create a Employee
  const user = new User({
    userName:req.body.userName,
    email:req.body.email,
    password:req.body.password,
    location:req.body.location,
  });

  // Save Tutorial in the database
 user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// exports.findOne = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() })
//     }

//     const { email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });  //{email:email} === {email}
//         if (!user) {
//             return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
//         }

//         const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
//         if (!pwdCompare) {
//             return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
//         }
//         const data = {
//             user: {
//                 id: user.id
//             }
//         }
//         success = true;
//         const authToken = jwt.sign(data, jwtSecret);
//         res.json({ success, authToken })


//     } catch (error) {
//         console.error(error.message)
//         res.send("Server Error")
//     }
// }
exports.login = (req,res)=>{
  if (!req.body.email || !req.body.password) {
        res.send({ message: "Content can not be empty!" });
        return;
      }
  const {email,password} = req.body
  user.findOne({email:email,password:password})
  .then (data => {
  if(data){
    res.json("exist")
  }
  else{
     res.json("not exist")
  }
})
.catch(err => {
  res.json("not exist")
})
}

  // exports.findOne = async(req, res) => {
  //   const email = req.body.email;
    
  //   let userData= await user.findById(email)
  //   if(!userData){
  //   //   .then(data => {
  //   //     if (!data)
  //         res.status(404).send({ message: "Not found Tutorial with id " + id });
  //   }

  //   if(!req.body.password=== userData.password){
  //       //   .then(data => {
  //       //     if (!data)
  //             res.status(404).json({ error:("please check your userName and passwoed")})
  //       }
  //       else res.send(userData);
  //   };
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .send({ message: "Error retrieving Tutorial with id=" + id });
    //   });

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.post('/user', (req, res) => {
//   User.create({
//     username: req.body.username,
//     password: req.body.password,
//   }).then(user => res.json(user));
// });

// // ...rest of the initial code omitted for simplicity.
// const { body, validationResult } = require('express-validator');

// app.post(
//   '/user',
//   // username must be an email
//   body('username').isEmail(),
//   // password must be at least 5 chars long
//   body('password').isLength({ min: 5 }),
//   (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     User.create({
//       userName: req.body.username,
//       password: req.body.password,
//       email: req.body.password,
//       location: req.body.password,
//     }).then(user => res.json(user));
//   },
// );