
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

const ProjectManagement = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // State to hold selected project for viewing details


  // Simulating data fetch
  useEffect(() => {
    const fetchData = async () => {
      const userData = [
        { id: 1, name: "John Doe", email: "john.doe@gmail.com", qualification: "BTech", projectIdea: "AI-Powered Chatbot" },
        { id: 2, name: "Jane Smith", email: "jane.smith@gmail.com", qualification: "MTech", projectIdea: "Blockchain Voting System" },
        { id: 3, name: "Alice Johnson", email: "alice.j@gmail.com", qualification: "BSc", projectIdea: "E-Learning Platform" },
        { id: 4, name: "Bob Brown", email: "bob.b@gmail.com", qualification: "MBA", projectIdea: "SaaS CRM Tool" },
      ];
      setTableData(userData);
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setTableData(tableData.filter((data) => data.id !== id));
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project); // Set the selected project for viewing details
  };

  const handleBack = () => {
    setSelectedProject(null); // Clear the selected project to go back to the table
  };

  return (
    <div className="container mx-auto my-10 p-5 border border-gray-300 rounded-lg shadow-md bg-yellow-50">
      {/* Conditional Rendering: Show project details or table */}
      {selectedProject ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Project Details</h2>
          <p><strong>Name:</strong> {selectedProject.name}</p>
          <p><strong>Email:</strong> {selectedProject.email}</p>
          <p><strong>Qualification:</strong> {selectedProject.qualification}</p>
          <p><strong>Project Idea:</strong> {selectedProject.projectIdea}</p>
          <button
            onClick={handleBack}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Back to Table
          </button>
        </div>
      ) : (
        <div>
          {/* Move the heading to the left */}
          <h1 className="text-left text-2xl font-bold mb-5 text-yellow-600" style={{ marginLeft: "220px" }}>
            Project Management
          </h1>
          <table className="w-full max-w-[calc(100%-450px)] mx-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-3 py-2">Name</th>
                <th className="border border-gray-300 px-3 py-2">Email</th>
                <th className="border border-gray-300 px-3 py-2">Qualification</th>
                <th className="border border-gray-300 px-3 py-2">Project Idea</th>
                <th className="border border-gray-300 px-3 py-2">View</th>
                <th className="border border-gray-300 px-3 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id} className="text-center hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.qualification}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.projectIdea}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href="#"
                      onClick={() => handleViewDetails(data)}
                      className="text-yellow-700 underline hover:text-gray-900"
                    >
                      Full Details
                    </a>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <AiFillDelete
                      onClick={() => handleDelete(data.id)}
                      className="text-black-700 mx-auto text-xl cursor-pointer hover:text-red-600"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProjectManagement;

