import React, { useEffect, useState } from "react";
import CardsIdeas from "./CardsIdeas";
import axios from "axios";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function MyIdeas() {
  // state
  const [myIdeas, setMyIdeas] = useState([]);
  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas`;
  const nav = useNavigate();
  const studentsId = localStorage.getItem("id");
  // use Effect
  React.useEffect(() => {
    getIdeasData();
  }, []);

  // api
  const getIdeasData = () => {
    axios.get(api_url).then((res) => {
      //   const filteredIdeas = res.data.filter(
      //     (idea) => idea.studentId === studentId
      //   );
      //   setMyIdeas(filteredIdeas);
      console.log(res.data);
      setMyIdeas(res.data);
    });
  };
  return (
    <>
      <div>
        <img src={Logo} alt="logo-img" width={150} />
      </div>

      <h1 className="text-5xl font-bold text-center  text-gray-700 ">
        My Ideas &#128522;
      </h1>
      <br />
      <br />

      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="flex justify-center items-center flex-wrap gap-20">
          {myIdeas.map((item) => {
            return (
              <div key={item.id} className="mt-10">
                <CardsIdeas
                  status={item.status}
                  names={item.names}
                  title={item.title}
                  descriptions={item.descriptions}
                  major={item.major}
                ></CardsIdeas>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyIdeas;
