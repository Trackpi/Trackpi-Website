import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import projectUploadImg from '../images/projectUpload.svg'
import viewMoreImg from '../images/viewMore.svg'
import '../CSS/projectManagement.css'

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const mockData = [
        { id:1, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
        { id:2, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
        { id:3, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
        { id:4, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
        { id:5, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
        { id:6, name: "Name", email: "email@gmail.com", phone: "9876543210", project: "Project Name", date: "10.00 AM" },
      ];
      setProjects(mockData);
    };

    fetchProjects();
  }, []);

  const handleViewDetails = (projectId) => {
    navigate(`/admin/project-details/${projectId}`);
  };

  return (
    <div className="bg-white w-full">
      <div className="py-[40px] px-[30px] grid gap-[30px]">
        <div className="flex justify-between">
          <div className="text-[24px] font-bold">
          Project Management
          </div>
          <div className="">
            <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00] "><img className="m-auto" src={projectUploadImg} alt="" /></button>
          </div>
        </div>
        <div className="py-[10px] grid gap-[25px]">
          <div className="grid gap-[10px]">
            <div className="text-[#FF9D00] text-[20px]">01/01/2025</div>
            <div className="projectManagement">
              <table className="w-full text-center">
                <thead>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Phone</th>
                  <th>Project Name</th>
                  <th>Time</th>
                  <th>View</th>
                </thead>
                <tbody className="">
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{project.name}</td>
                    <td>{project.email}</td>
                    <td>{project.phone}</td>
                    <td>{project.project}</td>
                    <td>{project.date}</td>
                    <td style={{fontWeight:"700"}} onClick={() => handleViewDetails(project.id)} className="cursor-pointer text-[#FF9D00] flex justify-center gap-[10px]">
                      <div>View Details </div>
                      <img src={viewMoreImg} alt="" />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              
            </div>
          </div>
          <div className="grid gap-[10px]">
            <div className="text-[#FF9D00] text-[20px]">02/01/2025</div>
            <div className="projectManagement">
              <table className="w-full text-center">
                <thead>
                  <th>Sl No</th>
                  <th>Name</th>
                  <th>Email ID</th>
                  <th>Phone</th>
                  <th>Project Name</th>
                  <th>Time</th>
                  <th>View</th>
                </thead>
                <tbody className="">
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{project.name}</td>
                    <td>{project.email}</td>
                    <td>{project.phone}</td>
                    <td>{project.project}</td>
                    <td>{project.date}</td>
                    <td style={{fontWeight:"700"}}  onClick={() => handleViewDetails(project.id)} className="cursor-pointer text-[#FF9D00] flex justify-center gap-[10px]">
                      <div>View Details </div>
                      <img src={viewMoreImg} alt="" />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectManagement;