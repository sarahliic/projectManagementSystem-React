import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="hero min-h-screen bg-white  ">
        <img
          src={Logo}
          alt="logo-img"
          className="absolute top-0 left-0 mb-4 mt-2 z-10"
          width={150}
        />
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.pinimg.com/564x/39/a0/cd/39a0cdb3a0c418fe6eac94b2fd79c152.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold  text-gray-700 ">
              Project Management Platform
            </h1>
            <p className="py-6 text-gray-700">
              Jouin us to Project Management Platform is a software application
              or online tool that helps teams and organizations plan, execute,
              and manage projects efficiently. .
            </p>
            <Link to="/SignUp">
              <button className="btn btn-primary text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
