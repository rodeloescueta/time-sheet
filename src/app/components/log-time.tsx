"use client";
import React, { useState } from "react";
import { useProjectStore } from "../store";

function LogTime() {
  const addProject = useProjectStore((state) => state.addProject);
  const [showForm, setShowForm] = useState(false);
  const [project, setProject] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (project && hours) {
      addProject(project, hours);
      setProject("");
      setHours("");
      setShowForm(false);
    } else {
      alert("Please enter a project name and the number of hours worked");
    }
  };

  return (
    <div className="flex flex-row-reverse pt-4">
      <button
        onClick={() => setShowForm(true)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Log Time
      </button>
      {showForm && (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 ">
                  <h3 className="text-3xl font=semibold">New Timesheet</h3>
                </div>

                <form className="px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Project Name
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:outline-none"
                      placeholder="Project Name"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Hours worked
                    </label>
                    <input
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-sky-500 focus:outline-none"
                      placeholder="hh:mm"
                      value={hours}
                      onChange={(e) => setHours(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowForm(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-blue-500 active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LogTime;
