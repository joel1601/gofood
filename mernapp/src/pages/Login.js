// import React from 'react'
// import { Link,useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// // export default function Login() {
// //   const [ formData, setFormData] = useState({
// //     email : '',
// //     password : '',
// // });
// // const onChange = (e) => {
// //     const { name, value } = e.target
// //     console.log( name,value);
// //     setFormData({...formData,[name]:value});
// // };

// // const saveData = async() => {
// //     console.log('save Data', formData);
// //    let response = await axios.post('https://reqres.in/api/users',formData);
// //     console.log('responsed',response);
// // };
// //   return (
// //     <div>
// //      <div className="container">
// //              <form method="POST">
// //                  <div className="mb-3">
// //                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
// //                      <input type="email"className="form-control"id="exampleInputEmail1" aria-describedby="emailHelp" name="email"  onChange={onChange}/>
// //                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //                  </div>
// //                  <div className="mb-3">
// //                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
// //                      <input type="password" className="form-control" id="exampleInputPassword1" name="password"  onChange={onChange}/>
// //                  </div>
// //                  <button type="submit" onClick={saveData} className="btn btn-success">Submit</button>
// //                  <Link to="/login" className="m-3 btn btn-danger">User to login</Link>
// //              </form>
// //          </div>
// //     </div>
// //   )
// // }

// const Login= () => {
//     const navigate = useNavigate();
//   const [ formData, setFormData] = useState({
//       email : '',
//       password : '',
// });

//   const onChange = (e) => {
//       const { name, value } = e.target
//       console.log( name,value);
//       setFormData({...formData,[name ]:value});
//   };

//   const saveData = async() => {
//       console.log('save Data', formData);
//      let response = await axios.post('http://localhost:8089/api/users/login',formData);
//       console.log('responsed',response);
//       navigate("/")
//   };
// return (
// <div className='paint'>
//   <div><h2>Login page</h2></div>

//   <div className="box"></div>
//        <form>
//                <div className="login">
//                    <div className="mb-3">
//                    <label  className="form-label">Email</label>
//                     <input onChange={onChange}  type="email" className="form-control" id="exampleInputEmail" name="email"/>
//                    </div>
//                    <div className="mb-3">
//                    <label  className="form-label">Password</label>
//                     <input onChange={onChange}  type="password" className="form-control" id="exampleInputPassword" name="password"/>
//                    </div>
//                    {/* <div className="mb-3 form-check">
//                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                    <label className="form-check-label" >Check me out</label>
//                    </div> */}
//                    <button type="button" onClick={saveData} className="btn btn-primary" >Submit</button>
//                    <Link to="/signup" className="m-3 btn btn-danger">SignUp</Link>
//                </div>
//                {/* <div>
//                   <form>
//                       <input onChange={onChange} firstname="firstname"/>
//                       <input onChange={onChange}lastname="lastName"/>
//                       <button type='button' onClick={saveData}>Submit</button>
//                   </form>
//                </div> */}
//            </form>
//        </div>
// )
// }

// export default Login

import React  from "react";
import Navbar from "../components/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email address").required("required"),
  password: Yup.string().required("required"),
});

export default function Login() {
  // const [users, setusers] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8089/api/users/login", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ email: users.email, password: users.password })

  //   });

  //   const json = await response.json()
  //   console.log(json);
  //   if (json.success) {
  //     //save the auth toke to local storage and redirect
  //     localStorage.setItem('userEmail', users.email)
  //     localStorage.setItem('token', json.authToken)
  //     navigate("/");

  //   }
  //   else {
  //     alert("Enter Valid Credentials")
  //   }
  // }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      let response = await axios
        .post("http://localhost:8089/api/users/login", formik.values)
        .then((res) => {
          if (res.data === "exist") {
            navigate("/");
          } else if (res.data === "not exist") {
            alert("email is not exist");
          }
        })
        .catch((err) => {
          alert("email is not exist");
        });
      console.log(response);
      setSubmitting(false);
    },
  });

  // const onChange = (e) => {
  //   setusers({ ...users, [e.target.name]: e.target.value });
  // };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded"
          onSubmit={formik.handleSubmit}
        >
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="enter your email ID"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone.
            </div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
              name="password"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">
            New User
          </Link>
        </form>
      </div>
    </div>
  );
}

// , 'Accept': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000/login', 'Access-Control-Allow-Credentials': 'true',
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
