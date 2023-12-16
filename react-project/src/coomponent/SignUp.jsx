import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [formValues, setFormValues] = useState({});
  const api_url = `https://6570e58909586eff66421604.mockapi.io/redister`;
  const nav = useNavigate();
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // Validate form
    validationSchema: yup.object({
      name: yup
        .string()
        .max(20, "Name must be 20 charrcters or less.")
        .required("Name is required"),
      email: yup
        .string()
        .email("Invalid email address")
        .test(
          "tuwaiq",
          "Email must contain 'tuwaiq' after @",
          (value) => value && value.includes("@tuwaiq")
        )
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
        .required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    // onSubmit
    onSubmit: (values) => {
      setFormValues(values);
      postStudentsData();
    },
  });
  // use effect
  useEffect(() => {
    setFormValues(formik.values);
  }, [formik.values]);
  // api
  const postStudentsData = () => {
    axios
      .post(`${api_url}`, formValues)
      .then((res) => {
        sessionStorage.setItem("info", JSON.stringify(res.data));
        console.log(res.data);
        console.log("sign up done");
        nav("/Login");
      })

      .catch((err) => {
        console.log("there is error" + err);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <form
        className="bg-white flex rounded-lg w-full font-serif"
        onSubmit={formik.handleSubmit}
      >
        {/* form content */}
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-bold">
            Let's get started &#128075;
          </h1>
          <p className="text-lg text-gray-500">
            Join our Project Management System paltform today and get ready to
            share your ideas.
          </p>
          {/* Fields inputs forms */}
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* Email input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* password input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.password && formik.errors.password
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="password"
              >
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "Password"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* password input field */}
            <div className="pb-4">
              <label
                className={`block font-serif text-sm pb-2 ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="confirmPassword"
              >
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : "Confirm Password"}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                type="password"
                name="confirmPassword"
                placeholder="Enter your confirm password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white font-bold text-sm py-3 mt-6 rounded-lg w-full"
            >
              Register
            </button>
          </div>
        </div>
        {/* form image */}
        <div className="flex relative items-center justify-center">
          <img
            src="https://i.pinimg.com/564x/8c/81/b8/8c81b879e690f315a68c6958814354c9.jpg"
            alt="form-img"
            className="object-cover rounded-lg"
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
