import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardsIdeas from "./CardsIdeas";

function AcceptsIdeas() {
  const [accepts, setAccepts] = useState([]);
  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas`;

  const { id } = useParams();

  // useEffect
  useEffect(() => {
    getIdeasData();
  }, []);

  // API
  const getIdeasData = () => {
    axios
      .get(api_url, { ...accepts, status: "Accepts" })
      .then((res) => {
        const filteredIdeas = res.data.filter(
          (item) => item.status === "Accepts"
        );
        setAccepts(filteredIdeas);
        console.log("Add all Accepts");
      })
      .catch((error) => {
        console.log("there error" + error);
      });
  };

  return (
    <>
      <div>
        {accepts.map((item) => {
          return (
            <div key={item.id}>
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
    </>
  );
}

export default AcceptsIdeas;
