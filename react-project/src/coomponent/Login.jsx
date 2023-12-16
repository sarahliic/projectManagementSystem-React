import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formValues, setFormValues] = useState({});
  const api_url = `https://6570e58909586eff66421604.mockapi.io/redister`;
  const admins = {
    name: "sarahAdmin",
    email: "sarahAdmin@tuwaiq.com",
    password: "123123Sa@",
  };
  const nav = useNavigate();

  // const setAdmin = () => {
  //   localStorage.setItem("admin", JSON.stringify(admins));
  // };
  // setAdmin();
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Validate form
    validationSchema: yup.object({
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
    }),

    // onSubmit
    onSubmit: (values) => {
      // admin or students
      const storedAdmin = localStorage.getItem("admin");
      const adminInfo = JSON.parse(storedAdmin);
      if (
        adminInfo.email === values.email &&
        adminInfo.password === values.password
      ) {
        nav("/Admin");
      } else {
        checkUserInfo(values);
      }
    },
  });

  // check user info
  const checkUserInfo = (values) => {
    const storedInfo = sessionStorage.getItem("info");
    const userInfo = JSON.parse(storedInfo);
    if (userInfo) {
      if (
        userInfo.email === values.email &&
        userInfo.password === values.password
      ) {
        console.log("Logged in successfully");
        nav("/Students");
      } else {
        console.log("Invalid email or password");
      }
    } else {
      console.log("User information not found in session storage");
    }
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

            <button
              type="submit"
              className="bg-blue-900 text-white font-bold text-sm py-3 mt-6 rounded-lg w-full"
            >
              Login
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

export default Login;
