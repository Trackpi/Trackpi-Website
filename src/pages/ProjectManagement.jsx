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
        {
          id: 1,
          name: "Wilson Adam",
          email: "wilsonadam56@gmail.com",
          phone: "9865741023",
          project: "Project Alpha",
          time: "10.00 AM",
          date: "01/01/2025",
          problem: "Lorem ipsum dolor sit amet, consectetur adiseru piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          skills: "JavaScript, React, Node.js",
          success: "Successfully implemented a real-time notification system.",
          benefit: "Small businesses needing task management solutions.",
          summary: "Developed a task management platform for efficient collaboration.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "Tech University"
      },
      {
          id: 2,
          name: "Emily Brown",
          email: "emilybrown123@gmail.com",
          phone: "9876543210",
          project: "Project Beta",
          time: "11.30 AM",
          date: "01/01/2025",
          problem: "Difficulty in tracking team productivity in remote settings.",
          skills: "Python, Django, SQL",
          success: "Increased productivity by 30% for remote teams.",
          benefit: "Remote teams in IT and marketing industries.",
          summary: "Designed a productivity tracking tool for remote work.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "Innovation Institute"
      },
      {
          id: 3,
          name: "John Doe",
          email: "johndoe78@gmail.com",
          phone: "9123456789",
          project: "Project Gamma",
          time: "01.00 PM",
          date: "01/01/2025",
          problem: "Manual data analysis was time-consuming and error-prone.",
          skills: "Data Analysis, Machine Learning, Python",
          success: "Reduced analysis time by 50% using machine learning algorithms.",
          benefit: "Data analysts and research teams.",
          summary: "Developed a machine learning model for automated data analysis.",
          status: "Graduate",
          qualification: "Master’s Degree",
          institute: "Global University"
      },
      {
          id: 4,
          name: "Sophia Johnson",
          email: "sophiaj123@gmail.com",
          phone: "9812345678",
          project: "Project Delta",
          time: "02.30 PM",
          date: "01/01/2025",
          problem: "Lack of personalized healthcare resources.",
          skills: "React, MongoDB, Node.js",
          success: "Enabled 1000+ patients to access personalized health plans.",
          benefit: "Healthcare providers and patients.",
          summary: "Built a web app for personalized healthcare management.",
          status: "Intern",
          qualification: "Bachelor’s Degree",
          institute: "MedTech Institute"
      },
      {
          id: 5,
          name: "David Carter",
          email: "davidcarter456@gmail.com",
          phone: "9234567890",
          project: "Project Epsilon",
          time: "03.00 PM",
          date: "01/01/2025",
          problem: "Limited engagement in online education platforms.",
          skills: "Angular, TypeScript, Firebase",
          success: "Improved user engagement by 40%.",
          benefit: "E-learning platforms.",
          summary: "Enhanced interactive features for an online education platform.",
          status: "Freelancer",
          qualification: "Bachelor’s Degree",
          institute: "TechWorld Academy"
      },
      {
          id: 6,
          name: "Liam Wilson",
          email: "liamwilson98@gmail.com",
          phone: "9786543210",
          project: "Project Zeta",
          time: "04.00 PM",
          date: "01/01/2025",
          problem: "Small retailers struggling with inventory management.",
          skills: "PHP, MySQL, Laravel",
          success: "Helped 500+ retailers streamline their inventory.",
          benefit: "Small retailers and shop owners.",
          summary: "Developed an inventory management system for small businesses.",
          status: "Entrepreneur",
          qualification: "Diploma",
          institute: "BusinessTech College"
      },
      {
          id: 7,
          name: "Olivia Smith",
          email: "oliviasmith@gmail.com",
          phone: "9012345678",
          project: "Project Eta",
          time: "05.00 PM",
          date: "01/01/2025",
          problem: "Inefficient energy consumption in households.",
          skills: "IoT, C++, Embedded Systems",
          success: "Reduced energy consumption by 20%.",
          benefit: "Homeowners and energy providers.",
          summary: "Created a smart energy monitoring system.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "GreenTech University"
      },
      {
          id: 8,
          name: "James Miller",
          email: "jamesmiller98@gmail.com",
          phone: "9023456789",
          project: "Project Theta",
          time: "06.00 PM",
          date: "01/01/2025",
          problem: "Difficulty in managing financial records for startups.",
          skills: "Accounting, Excel, Power BI",
          success: "Simplified financial tracking for 50+ startups.",
          benefit: "Startup founders and accountants.",
          summary: "Designed a financial tracking tool for startups.",
          status: "Professional",
          qualification: "Certified Accountant",
          institute: "Finance School"
      },
      {
          id: 9,
          name: "Emma Davis",
          email: "emmadavis@gmail.com",
          phone: "8901234567",
          project: "Project Iota",
          time: "07.00 PM",
          date: "01/01/2025",
          problem: "Lack of accessible mental health resources.",
          skills: "Flutter, Firebase, UX Design",
          success: "Helped 2000+ users access mental health support.",
          benefit: "Mental health organizations and patients.",
          summary: "Developed a mobile app for mental health support.",
          status: "Volunteer",
          qualification: "Bachelor’s Degree",
          institute: "Wellness Academy"
      },
      {
          id: 10,
          name: "Charlotte Brown",
          email: "charlotteb123@gmail.com",
          phone: "9087654321",
          project: "Project Kappa",
          time: "08.00 PM",
          date: "01/01/2025",
          problem: "Difficulty in connecting local farmers to markets.",
          skills: "Java, Spring Boot, MySQL",
          success: "Increased farmers' market reach by 50%.",
          benefit: "Local farmers and marketplaces.",
          summary: "Built a platform to connect farmers directly with buyers.",
          status: "Researcher",
          qualification: "Master’s Degree",
          institute: "AgriTech University"
      }
      ];
      setProjects(mockData);
    };

    fetchProjects();
  }, []);

  const handleViewDetails = (project) => {
    navigate(`/admin/project-details/${project.id}`,{state:project});
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
                  <th className="">Sl No</th>
                  <th className="">Name</th>
                  <th className="">Email ID</th>
                  <th className="">Phone</th>
                  <th className="">Project Name</th>
                  <th className="">Time</th>
                  <th className="">View</th>
                </thead>
                
                <tbody className="w-100">
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td className="px-1 mx-auto">{index+1}</td>
                    <td className="px-1 mx-auto ">{project.name}</td>
                    <td className="px-1 mx-auto ">{project.email}</td>
                    <td className="px-1 mx-auto ">A{project.phone}</td>
                    <td className="px-1 mx-auto ">{project.project}</td>
                    <td className="px-1 mx-auto ">{project.time}</td>
                    <td style={{fontWeight:"700"}} onClick={() => handleViewDetails(project)} className="cursor-pointer px-1 text-[#FF9D00] flex justify-center gap-[10px] w-100 mx-auto">
                      <div>View Details </div>
                      <img src={viewMoreImg} alt="" />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              <div className="text-[#FF9D00] mt-[25px] text-[20px]">02/01/2025</div> 
              <table className="text-center w-full">
                <tbody className="w-100">
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td className="px-1 mx-auto">{index+1}</td>
                    <td className="px-1 mx-auto ">{project.name}</td>
                    <td className="px-1 mx-auto ">{project.email}</td>
                    <td className="px-1 mx-auto ">{project.phone}</td>
                    <td className="px-1 mx-auto ">{project.project}</td>
                    <td className="px-1 mx-auto ">{project.time}</td>
                    <td style={{fontWeight:"700"}} onClick={() => handleViewDetails(project)} className="cursor-pointer px-1 text-[#FF9D00] flex justify-center gap-[10px] w-100 mx-auto">
                      <div>View Details </div>
                      <img src={viewMoreImg} alt="" />
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              <div className="text-[#FF9D00] mt-[25px] text-[20px]">03/01/2025</div> 
              <table className="w-full text-center">
                <tbody className="w-100">
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td className="px-1 mx-auto">{index+1}</td>
                    <td className="px-1 mx-auto ">{project.name}</td>
                    <td className="px-1 mx-auto ">{project.email}</td>
                    <td className="px-1 mx-auto ">{project.phone}</td>
                    <td className="px-1 mx-auto ">{project.project}</td>
                    <td className="px-1 mx-auto ">{project.time}</td>
                    <td style={{fontWeight:"700"}} onClick={() => handleViewDetails(project)} className="cursor-pointer px-1 text-[#FF9D00] flex justify-center gap-[10px] w-100 mx-auto">
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