import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
function ViewIdeas() {
  const [viewIdeas, setViewIdeas] = useState(null);
  const [reason, setReason] = useState("");
  const [showReasonInput, setShowReasonInput] = useState(false);
  const api_url = `https://6570e58909586eff66421604.mockapi.io/ideas`;

  const { id } = useParams();

  // use Effect
  React.useEffect(() => {
    getIdeasData();
  }, []);

  // api
  const getIdeasData = () => {
    axios.get(api_url).then((res) => {
      setViewIdeas(res.data.find((item) => item.id == id));
    });
  };

  // Accepts
  const handleAccept = () => {
    if (viewIdeas) {
      const updatedIdeas = { ...viewIdeas, status: "Accepts" };
      axios.put(`${api_url}/${id}`, updatedIdeas).then((res) => {
        setViewIdeas(res.data);
        console.log("done change Accepts");
      });
    }
  };

  // Refuse
  const handleRefuse = () => {
    if (viewIdeas) {
      const updatedIdeas = { ...viewIdeas, status: "Refuse" };
      axios.put(`${api_url}/${id}`, updatedIdeas).then((res) => {
        setViewIdeas(res.data);
        console.log("done change Refuse");
        setShowReasonInput(true);
      });
    }
  };

  // Delete
  const handleDelete = () => {
    if (viewIdeas) {
      axios.delete(`${api_url}/${id}`).then(() => {
        console.log("done delete");
        // Redirect to the page where you want to navigate after deleting the idea
      });
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="h-screen flex justify-center items-center">
        {viewIdeas ? (
          <div class="bg-white overflow-hidden shadow rounded-lg border w-3/4">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Ideas Details
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                More information about the ideas...
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {viewIdeas.name}
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Idea Title</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {viewIdeas.title}
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Descriptions Idea
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {viewIdeas.descriptions}
                  </dd>
                </div>
                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Status</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {viewIdeas.status}
                  </dd>
                </div>
              </dl>
            </div>
            {viewIdeas.status === "Refuse" && showReasonInput ? (
              <>
                <div className="flex justify-center">
                  Reason:
                  <input
                    type="text"
                    className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-blue-900 focus:ring-blue-500"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <Link to="/IdeasList">
                    <button
                      className="btn btn-error text-white"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex justify-end">
                <Link to="/IdeasList">
                  <button
                    className="btn btn-active btn-accent text-white"
                    onClick={handleAccept}
                  >
                    Accept
                  </button>
                </Link>
                <button
                  className="btn btn-active btn-neutral text-white ml-2"
                  onClick={handleRefuse}
                >
                  Refuse
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default ViewIdeas;
