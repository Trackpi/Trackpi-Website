import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import projectUploadImg from '../../images/projectUpload.svg';
import { FiExternalLink } from 'react-icons/fi';
import baseURL from '../../Api Services/baseURL';

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch the projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await baseURL.get('/api/projects/getAllProjects');
        console.log(response.data, 'responseDataProjects');
        setProjects(response.data); // Assuming the API returns an array of projects
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Group projects by date
  const groupedProjects = projects.reduce((acc, project) => {
    const date = project.createdAt.split('T')[0]; // Extract date part from createdAt
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(project);
    return acc;
  }, {});

  const handleViewDetails = (project) => {
    console.log(project,"projectId")
    navigate(`/admin/project-details/${project._id}`, { state: project });
  };

  if (loading) {
    return <div>Loading...</div>; // You can customize the loading indicator
  }

  if (error) {
    return <div>{error}</div>; // You can customize the error message
  }

  return (
    <div className="bg-white w-full">
      <div className="py-[40px] px-[30px] grid gap-[30px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold">Project Management</div>
          <div>
            <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00]">
              <img className="m-auto" src={projectUploadImg} alt="" />
            </button>
          </div>
        </div>
        {/* Table Content */}
        <div className="py-[10px] grid gap-[25px]">
          {Object.keys(groupedProjects).map((date) => (
            <div className="grid gap-[10px]" key={date}>
              {/* Date Heading */}
              <div className="text-[#FF9D00] text-[20px]">{date}</div>

              {/* Table */}
              <div className="relative shadow-md sm:rounded-lg border-dark border-2">
                <div className="table-wrapper">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed">
                    {/* Table Headers */}
                    <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
                      <tr>
                        <th className="border-r-2 text-center px-2 py-3 w-[60px]">Sl No</th>
                        <th className="border-r-2 text-center px-2 py-3 w-[150px]">Name</th>
                        <th className="border-r-2 text-center px-2 py-3 w-[200px]">Email ID</th>
                        <th className="border-r-2 text-center px-2 py-3 w-[150px]">Phone</th>
                        <th className="border-r-2 text-center px-2 py-3 w-[200px]">Project Name</th>
                        <th className="border-r-2 text-center px-2 py-3 w-[100px]">Time</th>
                        <th className="text-center px-2 py-3 w-[150px]">View</th>
                      </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                      {groupedProjects[date].map((project, projectIndex) => (
                        <tr
                          key={project._id}
                          className="bg-white text-md font-semibold text-black hover:bg-gray-50 dark:hover:bg-gray-600 custom-table"
                        >
                          <td className="border-r-2 text-center px-2 py-3 w-[60px]">{projectIndex + 1}</td>
                          <td className="border-r-2 text-center px-2 py-3 w-[150px]">{project.fullName}</td>
                          <td className="border-r-2 text-center px-2 py-3 w-[200px]">{project.emailAddress}</td>
                          <td className="border-r-2 text-center px-2 py-3 w-[150px]">{project.contactNumber}</td>
                          <td className="border-r-2 text-center px-2 py-3 w-[200px]">{project.projectName}</td>
                          <td className="border-r-2 text-center px-2 py-3 w-[100px]">
                            {project.createdAt.split('T')[1].split('.')[0]} {/* Extract time */}
                          </td>
                          <td
                            className="text-[#FF9D00] font-bold text-center cursor-pointer px-2 py-3 flex justify-center items-center gap-2 w-[150px]"
                            onClick={() => handleViewDetails(project)}
                          >
                            View Details <FiExternalLink size={20} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;
