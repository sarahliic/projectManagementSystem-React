import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-blue-900 text-white flex justify-between items-center max-sm:relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/ShowStudents">
                  <a className="text-md font-bold text-gray-700">Studens</a>
                </Link>
              </li>

              <li>
                <Link to="/IdeasList">
                  <a className="text-md font-bold text-gray-700">Ideas</a>
                </Link>
              </li>
            </ul>
          </div>
          <img
            src="https://i.pinimg.com/564x/92/a5/75/92a5753682e74bb71c4396b9c2f89f9f.jpg"
            alt="logo-img"
            className="object-cover rounded-full"
            width={60}
          />
        </div>
        <div className="navbar-center text-center hidden w-[91%]  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/ShowStudents">
                <a className="text-md font-bold">Students</a>
              </Link>
            </li>

            <li>
              <Link to="/IdeasList">
                <a className="text-md font-bold">Ideas</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between text-gray-700">
                Admin Sarah
                <span className="badge">&#128075;</span>
              </a>
            </li>
            <li>
              <Link to="/">
                <a className="text-gray-700">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
