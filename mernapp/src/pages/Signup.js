import { Field, Form, Formik, ErrorMessage, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import axios from "axios";
export default function SignUp4() {
    const formik= useFormik({
      initialValues:{
        userName: " ",
        email: " ",
        password: " ",
        location: " ",
  }});
  const navigate = useNavigate();
    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div className="container h-100">
        <div className="w-50 m-auto  border bg-dark border-success rounded">
          <div className="p-3 col-xs-12 col-sm-12 col-md-12 well well-sm">
            {/* <Formik render={props => <ContactForm {...props} />} /> */}
            <Formik
              initialValues={{
                userName: "",
                email: "",
                password: "",
                location: "",
              }}
  
             
              validationSchema={Yup.object({
                userName: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("required"),
                email: Yup.string()
                  .email("invalid email address")
                  .required("required"),
                password: Yup.string().required("required"),
                location: Yup.string()
                  .required("required")
              })}
              onSubmit={ async (values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                 let response = await axios.post("http://localhost:8089/api/users/create",formik.values);
                console.log(response);
                setSubmitting(false);
                navigate("/login")
              }}   
            >
              <Form >
              <h1 className="heading text-white text-center">Sign Up</h1>
                <div className="row pt-3">
                  <div className="col-md-12">
                    <Field
                      className="form-control"
                      name="userName"
                      type="text"
                      placeholder="enter your name"
                    //  onChange={handleChange}
                    ></Field>
                    <ErrorMessage
                      component="label"
                      className="form-label text-danger"
                      name="userName"
                    />
                  </div>
                  <div className="col-md-12 pt-3">
                    <Field
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                    ></Field>
                    <ErrorMessage
                      component="label"
                      className="form-label text-danger"
                      name="email"
                    />
                  </div>
                  <div className="col-md-12 pt-3">
                    <Field
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                    ></Field>
                    <ErrorMessage
                      component="label"
                      className="form-label text-danger"
                      name="password"
                    ></ErrorMessage>
                  </div>
                  <div className="col-md-12 pt-3">
                    <Field
                      className="form-control"
                      name="location"
                      type="text"
                      placeholder="enter your location"
                    ></Field>
                    <ErrorMessage
                      component="label"
                      className="form-label text-danger"
                      name="location"
                    ></ErrorMessage>
                  </div>
                </div>
                <div className="d-flex justify-content-center pt-3 mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      </div>
    );
  }
  