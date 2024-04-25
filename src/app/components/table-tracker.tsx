"use client";
import React from "react";
import { useProjectStore } from "../store";

function TableTracker() {
  const { projects, isLoading } = useProjectStore((state) => ({
    projects: state.projects,
    isLoading: state.isLoading,
  }));
  return (
    <>
      {isLoading ? (
        <button type="button" className="bg-blue-500" disabled>
          Processing...
        </button>
      ) : (
        <table className="border min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hours Worked
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((el) => {
              return (
                <tr key={el.project}>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{el.project}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {el.hours}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default TableTracker;
