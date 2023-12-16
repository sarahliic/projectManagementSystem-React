import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
function EditIdeas() {
  const { id } = useParams();

  // state
  const [editIdeas, setEditIdeas] = useState({
    id: id,
    title: "",
    descriptions: "",
  });
  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas/${id}`;

  // use Effect
  React.useEffect(() => {
    getIdeasData();
  }, []);

  // api
  const getIdeasData = () => {
    axios.get(api_url).then((res) => {
      setEditIdeas({
        ...editIdeas,
        title: res.data.title,
        descriptions: res.data.descriptions,
      });
    });
  };

  // handleEdit
  const handleEdit = () => {
    axios
      .put(api_url, editIdeas)
      .then((res) => {
        console.log("Edit done ");
      })
      .catch((error) => {
        console.log("there is error" + error);
      });
  };
  return (
    <>
      <NavBar></NavBar>
      <br />

      <h1 className="text-5xl font-bold text-center  text-gray-700 ">
        Edit Ideas
      </h1>

      <div className="h-screen flex justify-center items-center">
        {editIdeas ? (
          <div class="bg-white overflow-hidden shadow rounded-lg border w-3/4">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Edit Ideas
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                You can edit the idea..
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                {/* <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {editIdeas.name}
                    </dd>
                  </div> */}
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Idea Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      className="w-[60%]"
                      placeholder="Enter Title"
                      value={editIdeas.title}
                      onChange={(e) =>
                        setEditIdeas({ ...editIdeas, title: e.target.value })
                      }
                    />
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Descriptions Idea
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      className="w-[60%]"
                      value={editIdeas.descriptions}
                      onChange={(e) =>
                        setEditIdeas({
                          ...editIdeas,
                          descriptions: e.target.value,
                        })
                      }
                    />
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Status</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {editIdeas.status}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex justify-end">
              <Link to="/IdeasList">
                <button
                  className="btn btn-primary m-4 text-white"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default EditIdeas;
