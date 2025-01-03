

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar"; // Adjust path based on your structure

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Mock data fetching
  useEffect(() => {
    const fetchProjects = async () => {
      // Replace with API call
      const mockData = [
        { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", project: "E-commerce Website", date: "2025-01-02" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321", project: "Mobile App Idea", date: "2025-01-01" },
      ];
      setProjects(mockData);
    };

    fetchProjects();
  }, []);

  const handleViewDetails = (projectId) => {
    navigate(`/admin/project-details/${projectId}`);
  };

  return (
    <div className="bg-white">
      <AdminNavbar />
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="font-bold my-0">Project Management</h4>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-dark border-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
              <tr>
                <th className="px-6 py-3 border-r-2 text-center">SI NO</th>
                <th className="px-6 py-3 border-r-2 text-center">Name</th>
                <th className="px-6 py-3 border-r-2 text-center">Email ID</th>
                <th className="px-6 py-3 border-r-2 text-center">Phone</th>
                <th className="px-6 py-3 border-r-2 text-center">Project/Idea</th>
                <th className="px-6 py-3 border-r-2 text-center">Date</th>
                <th className="px-6 py-3 text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id} className="bg-white text-md font-semibold text-black hover:bg-gray-50">
                  <td className="px-6 py-4 border-r-2 text-center">{index + 1}</td>
                  <td className="px-6 py-4 border-r-2 text-center">{project.name}</td>
                  <td className="px-6 py-4 border-r-2 text-center">{project.email}</td>
                  <td className="px-6 py-4 border-r-2 text-center">{project.phone}</td>
                  <td className="px-6 py-4 border-r-2 text-center">{project.project}</td>
                  <td className="px-6 py-4 border-r-2 text-center">{project.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      style={{ color: "#FF9D00", cursor: "pointer" }}
                      className="fw-bold"
                      onClick={() => handleViewDetails(project.id)}
                    >
                      View Details
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminNavbar from "../components/AdminNavbar"; // Adjust path based on your structure

// function ProjectManagement() {
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   // Mock data fetching
//   useEffect(() => {
//     const fetchProjects = async () => {
//       // Replace with API call
//       const mockData = [
//         { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", project: "E-commerce Website", date: "2025-01-02" },
//         { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "0987654321", project: "Mobile App Idea", date: "2025-01-01" },
//       ];
//       setProjects(mockData);
//     };

//     fetchProjects();
//   }, []);

//   const handleViewDetails = (projectId) => {
//     navigate(`/admin/project-details/${projectId}`);
//   };

//   return (
//     <div className="bg-white">
//       <AdminNavbar />
//       <div className="p-5">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="font-bold my-0">Project Management</h4>
//         </div>
//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-dark border-2">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
//               <tr>
//                 <th className="px-6 py-3 border-r-2 text-center">SI NO</th>
//                 <th className="px-6 py-3 border-r-2 text-center">Name</th>
//                 <th className="px-6 py-3 border-r-2 text-center">Email ID</th>
//                 <th className="px-6 py-3 border-r-2 text-center">Phone</th>
//                 <th className="px-6 py-3 border-r-2 text-center">Project/Idea</th>
//                 <th className="px-6 py-3 border-r-2 text-center">Date</th>
//                 <th className="px-6 py-3 text-center">View</th>
//               </tr>
//             </thead>
//             <tbody>
//               {projects.map((project, index) => (
//                 <tr key={project.id} className="bg-white text-md font-semibold text-black hover:bg-gray-50">
//                   <td className="px-6 py-4 border-r-2 text-center">{index + 1}</td>
//                   <td className="px-6 py-4 border-r-2 text-center">{project.name}</td>
//                   <td className="px-6 py-4 border-r-2 text-center">{project.email}</td>
//                   <td className="px-6 py-4 border-r-2 text-center">{project.phone}</td>
//                   <td className="px-6 py-4 border-r-2 text-center">{project.project}</td>
//                   <td className="px-6 py-4 border-r-2 text-center">{project.date}</td>
//                   <td className="px-6 py-4 text-center">
//                     <span
//                       style={{ color: "#FF9D00", cursor: "pointer" }}
//                       className="fw-bold"
//                       onClick={() => handleViewDetails(project.id)}
//                     >
//                       View Details
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectManagement;


