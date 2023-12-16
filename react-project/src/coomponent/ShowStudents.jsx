import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

function ShowStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const api_url = `https://6570e58909586eff66421604.mockapi.io/redister`;

  useEffect(() => {
    // calling api
    getStudentsData();
  }, []);

  // get students api
  const getStudentsData = () => {
    axios
      .get(api_url)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => console.log("there is error" + err));
  };

  // handle delete
  const handleDelete = (id) => {
    axios
      .delete(`${api_url}/${id}`)
      .then((res) => {
        console.log("Student deleted successfully");

        getStudentsData();

        window.location.reload(false);
        setShowAlert(true);
      })
      .catch((err) => console.log("Error deleting student: " + err));
  };

  // handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //  students search
  // const filteredStudents = students.filter((student) =>
  //   student.username.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <>
      <NavBar></NavBar>
      <div className=" mt-3 text-center">
        <input type="text" placeholder="Search by name" />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="overflow-x-auto w-3/4 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Job</th>
                <th>Emial</th>
                <th>Action</th>
              </tr>
            </thead>
            {students.map((item) => {
              return (
                <tbody>
                  {/* row 1 */}

                  <tr>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>Student</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-error text-white"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      {/* Alert component */}
      {showAlert && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success text-white">
            <span>Student deleted successfully.</span>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowStudents;
