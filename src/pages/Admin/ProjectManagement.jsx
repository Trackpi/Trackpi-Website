import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectUploadImg from '../../images/projectUpload.svg';
import { FiExternalLink } from 'react-icons/fi';

function ProjectManagement() {
  const [projects] = useState([
    {
      date: '01/01/2025',
      projects: [
        {
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          phone: '9876543210',
          projectName: 'Project Alpha,',
          time: '10:00 AM',
        },
        {
          name: 'Jane Doe',
          email: 'jane.doe@gmail.com',
          phone: '9876543211',
          projectName: 'Project Beta',
          time: '11:00 AM',
        },
      ],
    },
    {
      date: '02/01/2025',
      projects: [
        {
          name: 'Michael Smith',
          email: 'michael.smith@gmail.com',
          phone: '9876543212',
          projectName: 'Project Gamma',
          time: '12:00 PM',
        },
      ],
    },
  ]);

  const navigate = useNavigate();

  const handleViewDetails = project => {
    navigate(`/admin/project-details/${project.id}`, { state: project });
  };

  return (
    <div className="bg-white w-full">
      <div className="py-[40px] px-[30px] grid gap-[30px]">
        {/* Header */}
        <div className="flex justify-between">
          <div className="text-[24px] font-bold">Project Management</div>
          <div>
            <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00]">
              <img className="m-auto" src={projectUploadImg} alt="" />
            </button>
          </div>
        </div>
        {/* Table Content */}
        <div className="py-[10px] grid gap-[25px]">
          {projects.map((dateGroup, dateIndex) => (
            <div className="grid gap-[10px]" key={dateIndex}>
              {/* Date Heading */}
              <div className="text-[#FF9D00] text-[20px]">{dateGroup.date}</div>

              {/* Table */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
                {/* <div className="table-wrapper"> */}
                <table
                  className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  style={{ tableLayout: 'fixed' }}
                >
                  {' '}
                  {/* Render Table Headers Only for First Table */}
                  {dateIndex === 0 && (
                    <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
                      <tr>
                        <th
                          scope="col"
                          className=" border-r-2 text-center"
                          style={{ width: '10%' }}
                        >
                          Sl No
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          Email ID
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          Project Name
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          Time
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-3 border-r-2 text-center"
                          style={{ width: '25%' }}
                        >
                          View
                        </th>
                      </tr>
                    </thead>
                  )}
                  {/* Table Body */}
                  <tbody>
                    {dateGroup.projects.map((project, projectIndex) => (
                      <tr
                        key={projectIndex}
                        className="bg-white text-md font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 custom-table"
                      >
                        <td
                          key={projectIndex}
                          className=" border-r-2  text-center"
                          style={{
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            boxSizing: 'border-box',
                          }}
                        >
                          {projectIndex + 1}
                        </td>
                        <td
                      className={`px-2 py-3 border-r-2 text-center`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        boxSizing: 'border-box',
                      }}
                    >
                          {project.name}
                        </td>
                        <td
                      className={`px-2 py-3 border-r-2 text-center`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        boxSizing: 'border-box',
                      }}
                    >
                          {project.email}
                        </td>
                        <td
                      className={`px-2 py-3 border-r-2 text-center`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        boxSizing: 'border-box',
                      }}
                    >
                          {project.phone}
                        </td>
                        <td
                      className={`px-2 py-3 border-r-2 text-center`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        boxSizing: 'border-box',
                      }}
                    >
                          {project.projectName}
                        </td>
                        <td
                      className={`px-2 py-3 border-r-2 text-center`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        boxSizing: 'border-box',
                      }}
                    >
                          {project.time}
                        </td>
                        <td
                          className="text-[#FF9D00] font-bold text-center cursor-pointer px-2 py-3 flex justify-center items-center gap-2 "
                          onClick={() => handleViewDetails(project)}
                        >
                          View Details <FiExternalLink size={20} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;
