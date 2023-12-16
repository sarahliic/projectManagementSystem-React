import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
function IdeasList() {
  // state
  const [showIdeas, setShowIdeas] = useState([]);
  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas`;

  // use Effect
  React.useEffect(() => {
    getIdeasData();
  }, []);

  // api
  const getIdeasData = () => {
    axios.get(api_url).then((res) => {
      setShowIdeas(res.data);
    });
  };

  // handle Delete Idea

  return (
    <>
      <NavBar />
      <br />
      <h1 className="text-5xl font-bold text-center  text-gray-700 ">
        List of Ideas
      </h1>
      <div className="h-screen flex justify-center items-center">
        <div className="overflow-x-auto w-3/4">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Idea Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {showIdeas.map((item) => {
              return (
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.title}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={`/ViewIdeas/${item.id}`}>
                        <button className="btn  btn-neutral text-white">
                          Viwe
                        </button>
                      </Link>
                      <Link to={`/EditIdeas/${item.id}`}>
                        <button className="btn btn-primary text-white ml-2">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default IdeasList;
