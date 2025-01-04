

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar"; // Adjust path based on your structure

function ProjectManagementDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Replace with API call to fetch project details by projectId
  const mockData = {
    id: projectId,
    name: "Paul Walker",
    contact: "9876543210",
    email: "paulwalker@gmail.com",
    status: "Student",
    qualification: "Bachelor’s Degree",
    institute: "Name of the Institute",
    projectName: "Project/Idea Name",
    problem: "What Problem Does Your Idea Solve?",
    skills: "Lorem ipsum dolor sit amet, consectetur adiserus.",
    success: "Lorem ipsum dolor sit amet, consectetur adiserus.",
    benefit: "Who would benefit from this idea?",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    documents: ["Document 1", "Document 2"],
    date: "01/01/2025",
  };

  return (
    <div
      className="bg-white"
      style={{
        maxWidth: "1200px", // Increased width to align with the back button
        margin: "0 auto",
      }}
    >
      <AdminNavbar />
      <div className="p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h4 className="font-bold my-0 text-lg md:text-xl">Project Management</h4>
          <div className="d-flex align-items-center gap-2">
            <span className="text-sm text-gray-500">{mockData.date}</span>
            <button 
              className="btn btn-warning text-white mt-2 md:mt-0 " style={{ backgroundColor: "#FF9D00" }}
              onClick={() => navigate(-1)} 
            >
              &larr; Back
            </button>
          </div>
        </div>

        <div className="mt-2">
          {/* Row for Name, Contact, and Email */}
          <div className="row g-5">
            {[ 
              { label: "Name", value: mockData.name },
              { label: "Contact", value: mockData.contact },
              { label: "Email", value: mockData.email },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="border-2 border-gray-400 p-3 rounded">
                  <label className="font-semibold text-gray-700 d-block">{item.label}</label>
                  <div className="text-gray-900">{item.value}</div> {/* Brighter content */}
                </div>
              </div>
            ))}
          </div>

          {/* Row for Current Status, Qualification, and Institute Name */}
          <div className="row g-5 mt-0">
            {[ 
              { label: "Current Status", value: mockData.status },
              { label: "Qualification", value: mockData.qualification },
              { label: "Institute Name", value: mockData.institute },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="border-2 border-gray-400 p-3 rounded">
                  <label className="font-semibold text-gray-700 d-block">{item.label}</label>
                  <div className="text-gray-900">{item.value}</div> {/* Brighter content */}
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Line */}
          <hr className="my-5" style={{ borderTop: "2px solid #000" }} />

          {/* Rows for Project/Idea Details */}
          <div className="row g-3">
            {[ 
              { label: "Project/Idea Name", value: mockData.projectName },
              { label: "Do You Have Any Business or Technical Skills?", value: mockData.skills },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border-2 border-gray-400 p-4 rounded">
                  <label className="font-semibold text-gray-700 d-block">{item.label}</label>
                  <div className="text-gray-900">{item.value}</div> {/* Brighter content */}
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 mt-3">
            {[ 
              { label: "What Problem Does Your Idea Solve?", value: mockData.problem },
              { label: "Why Do You Think This Idea Will Succeed?", value: mockData.success },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border-2 border-gray-400 p-4 rounded" style={{ height: "180px" }}>
                  <label className="font-semibold text-gray-700 d-block">{item.label}</label>
                  <div className="text-gray-900">{item.value}</div> {/* Brighter content */}
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 mt-3">
            {[ 
              { label: "Who Would Benefit From This Idea?", value: mockData.benefit },
              { label: "Summarize Your Project Ideas", value: mockData.summary },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="border-2 border-gray-400 p-4 rounded" style={{ height: "180px" }}> {/* Increased height */}
                  <label className="font-semibold text-gray-700 d-block">{item.label}</label>
                  <div className="text-gray-900">{item.value}</div> {/* Brighter content */}
                </div>
              </div>
            ))}
          </div>

          {/* Documents Section */}
          <div className="row g-3 mt-3">
            {mockData.documents.map((doc, index) => (
              <div key={index} className="col-12 col-md-6">
                <div
                  className="bg-black rounded d-flex flex-column align-items-center"
                  style={{
                    borderRadius: "6px",
                    position: "relative",
                    padding: "80px 8px",
                    height: "200px", // Increased height
                  }}
                >
                  <h5 className="text-white mb-3">Documents</h5>
                  <div
                    className="d-flex justify-content-between align-items-center bg-yellow-400 text-center p-2"
                    style={{
                      backgroundColor: "#FF9D00",
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      height: "40px",
                      borderRadius: "0 0 5px 5px",
                    }}
                  >
                    <span className="text-white ms-1">Document Name</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagementDetail;

