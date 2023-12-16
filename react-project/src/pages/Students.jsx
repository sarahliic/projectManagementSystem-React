import React from "react";
import CardsIdeas from "../coomponent/CardsIdeas";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import AcceptsIdeas from "../coomponent/AcceptsIdeas";

function Students() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="hero min-h-screen bg-white  ">
          <div>
            <img
              src={Logo}
              alt="logo-img"
              className="absolute top-0 left-0 mb-4 mt-2 z-10"
              width={150}
            />
          </div>
          <div className="absolute top-20 right-32">
            <Link to="/MyIdeas">
              <a className="link link-info">My Ideas</a>
            </Link>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="diff aspect-[16/9]">
              <div className="diff-item-1">
                <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
                  Creative
                </div>
              </div>
              <div className="diff-item-2">
                <div className="bg-base-200 text-9xl font-black grid place-content-center">
                  Creative
                </div>
              </div>
              <div className="diff-resizer"></div>
            </div>
            <div>
              <h1 className="text-5xl font-bold  text-gray-700 ">
                Welcome to the new Ideas
              </h1>
              <p className="py-6 text-gray-700">
                Jouin us to Project Management Platform is a software
                application or online tool that helps teams and organizations
                plan, execute, and manage projects efficiently. .
              </p>
              <Link to="/AddIdeas">
                <button className="btn btn-primary text-white">New Idea</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center  text-gray-700 ">
        Take a Look at Some Ideas
      </h1>
      <br />
      <br />
      <div className=" flex flex-row justify-center items-center bg-slate-200 ">
        <div className="flex  justify-center items-center flex-wrap gap-20 ">
          <AcceptsIdeas></AcceptsIdeas>
          <AcceptsIdeas></AcceptsIdeas>
        </div>
      </div>
    </>
  );
}

export default Students;
