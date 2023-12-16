import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddIdeas() {
  // ideas form state
  const [ideasform, setIdeasForm] = useState({
    status: "watting",
    names: "",
    major: "",
    title: "",
    descriptions: "",
  });
  //button state
  const [add, setAdd] = useState([]);
  const nav = useNavigate();

  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas`;
  // hander submit
  const handleAdd = () => {
    // e.preventDefault();
    if (
      ideasform.names === "" ||
      ideasform.major === "" ||
      ideasform.title === "" ||
      ideasform.descriptions === ""
    ) {
      alert("please full all inputs ");
    } else {
      setAdd([...add, ideasform]);
      AddApi();
    }
  };

  // api
  const AddApi = () => {
    // post api
    axios
      .post(api_url, {
        status: ideasform.status,
        name: ideasform.names,
        major: ideasform.major,
        title: ideasform.title,
        descriptions: ideasform.descriptions,
      })
      .then(function (response) {
        console.log(response);
        nav("/MyIdeas");
      })
      .catch(function (error) {
        console.log("There is error" + error);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <form className="bg-white flex rounded-lg w-full font-serif">
          {/* form content */}
          <div className="flex-1 text-gray-700 p-16">
            <h1 className="text-2xl pb-2 font-bold">
              Impress the world with your Ideas &#128525;
            </h1>
            <p className="text-lg text-gray-500">
              Welcome to the creative and get ready to share your ideas.
            </p>
            {/* Fields inputs  */}
            <div className="mt-2">
              {/* Name input field */}
              <div className="pb-4">
                <label htmlFor="" className="block font-serif text-sm pb-2">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  value={ideasform.names}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setIdeasForm({
                      ...ideasform,
                      names: e.target.value,
                    });
                  }}
                />
              </div>
              {/* Scope input field */}
              <div className="pb-4">
                <label htmlFor="" className="block font-serif text-sm pb-2">
                  Idea Scopte Field
                </label>
                <input
                  type="text"
                  value={ideasform.major}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                  placeholder="enter idea scopte field"
                  onChange={(e) => {
                    setIdeasForm({
                      ...ideasform,
                      major: e.target.value,
                    });
                  }}
                />
              </div>
              {/* titel input field */}
              <div className="pb-4">
                <label htmlFor="" className="block font-serif text-sm pb-2">
                  Idea Title:
                </label>
                <input
                  type="text"
                  value={ideasform.title}
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                  placeholder="Enter your Title"
                  onChange={(e) => {
                    setIdeasForm({
                      ...ideasform,
                      title: e.target.value,
                    });
                  }}
                />
              </div>
              {/* Description input field */}
              <div className="pb-4">
                <label className={`block font-serif text-sm pb-2`} htmlFor="">
                  Idea Description
                </label>
                <textarea
                  cols={30}
                  rows={6}
                  type="text"
                  placeholder="Enter your Idea Description"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                  value={ideasform.descriptions}
                  onChange={(e) => {
                    setIdeasForm({
                      ...ideasform,
                      descriptions: e.target.value,
                    });
                  }}
                />
              </div>
              <button
                type="button"
                className="bg-blue-900 text-white font-bold text-sm py-3 mt-6 rounded-lg w-full"
                onClick={handleAdd}
              >
                Add and Send
              </button>
            </div>
          </div>
          {/* form image */}
          <div className="flex relative items-center justify-center">
            <img
              src="https://i.pinimg.com/564x/48/a2/3a/48a23a81306c41c12d34b9f201c3f7cf.jpg"
              alt="form-img"
              className="object-fit rounded-lg"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddIdeas;
