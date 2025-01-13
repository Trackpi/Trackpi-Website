import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectUploadImg from '../../images/projectUpload.svg';
import viewMoreImg from "../../images/viewMore.svg";

function ProjectManagement() {
 
      const [projectDetails, setProjectDetails] = useState([]);

      const mockData = [
        {
          id: 1,
          name: "Wilson Adam",
          email: "wilsonadam56@gmail.com",
          phone: "9865741023",
          project: "Project Alpha",
          time: "10.00 AM",
          date: "03/01/2025",
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
          name: "Michael Clark",
          email: "michaelclark77@gmail.com",
          phone: "9845672109",
          project: "Project Gamma",
          time: "09.00 AM",
          date: "04/01/2025",
          problem: "Optimizing inventory management for e-commerce platforms.",
          skills: "Java, Spring Boot, MySQL",
          success: "Reduced inventory errors by 40%.",
          benefit: "E-commerce businesses looking to streamline inventory.",
          summary: "Developed a robust inventory management system.",
          status: "Professional",
          qualification: "Bachelor’s Degree",
          institute: "Global Tech Institute"
        },
        {
          id: 4,
          name: "Sophia Martinez",
          email: "sophiamartinez89@gmail.com",
          phone: "9832456781",
          project: "Project Delta",
          time: "02.00 PM",
          date: "03/01/2025",
          problem: "Enhancing user engagement on blogging platforms.",
          skills: "React, Redux, MongoDB",
          success: "Increased user engagement by 25%.",
          benefit: "Content creators and bloggers.",
          summary: "Developed a platform for personalized content recommendations.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "City University"
        },
        {
          id: 5,
          name: "Liam Johnson",
          email: "liamjohnson91@gmail.com",
          phone: "9813456723",
          project: "Project Epsilon",
          time: "10.30 AM",
          date: "01/01/2025",
          problem: "Reducing energy consumption in smart homes.",
          skills: "IoT, Node.js, Python",
          success: "Achieved 20% reduction in energy use.",
          benefit: "Homeowners with smart home systems.",
          summary: "Built an intelligent energy management system.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "EnergyTech University"
        },
        {
          id: 6,
          name: "Ava Wilson",
          email: "avawilson23@gmail.com",
          phone: "9871236540",
          project: "Project Zeta",
          time: "03.00 PM",
          date: "02/01/2025",
          problem: "Improving healthcare record management.",
          skills: "Angular, Firebase, Java",
          success: "Streamlined record access for over 50 clinics.",
          benefit: "Healthcare providers and patients.",
          summary: "Developed a secure healthcare record system.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "HealthTech Institute"
        },
        {
          id: 7,
          name: "Ethan Taylor",
          email: "ethantaylor44@gmail.com",
          phone: "9823456178",
          project: "Project Theta",
          time: "12.00 PM",
          date: "03/01/2025",
          problem: "Automating report generation in financial analysis.",
          skills: "Python, Pandas, Tableau",
          success: "Reduced reporting time by 50%.",
          benefit: "Financial analysts and firms.",
          summary: "Created an automated financial reporting tool.",
          status: "Professional",
          qualification: "Bachelor’s Degree",
          institute: "FinanceTech University"
        },
        {
          id: 8,
          name: "Mia Davis",
          email: "miadavis34@gmail.com",
          phone: "9812673458",
          project: "Project Iota",
          time: "01.30 PM",
          date: "04/01/2025",
          problem: "Ensuring data security in cloud storage.",
          skills: "AWS, Kubernetes, Python",
          success: "Enhanced data security by 40%.",
          benefit: "Organizations using cloud storage.",
          summary: "Designed a secure cloud storage architecture.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "Cloud Computing Institute"
        },
        {
          id: 9,
          name: "Noah Robinson",
          email: "noahrobinson55@gmail.com",
          phone: "9834561289",
          project: "Project Kappa",
          time: "04.00 PM",
          date: "05/01/2025",
          problem: "Improving AI-based chatbot accuracy.",
          skills: "Python, TensorFlow, NLP",
          success: "Improved chatbot response accuracy by 30%.",
          benefit: "Customer support teams in various industries.",
          summary: "Developed an AI-powered chatbot for customer support.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "AI Research Center"
        },
        {
          id: 10,
          name: "Charlotte Garcia",
          email: "charlottegarcia88@gmail.com",
          phone: "9821456378",
          project: "Project Lambda",
          time: "05.00 PM",
          date: "01/01/2025",
          problem: "Enhancing logistics efficiency in supply chains.",
          skills: "Python, Flask, SQL",
          success: "Reduced delivery delays by 25%.",
          benefit: "Logistics companies and supply chain managers.",
          summary: "Developed a logistics optimization platform.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "Logistics Academy"
        },
        {
          id: 11,
          name: "Wilson Adam",
          email: "wilsonadam56@gmail.com",
          phone: "9865741023",
          project: "Project Alpha",
          time: "10.00 AM",
          date: "03/01/2025",
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
          id: 12,
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
          id: 13,
          name: "Michael Clark",
          email: "michaelclark77@gmail.com",
          phone: "9845672109",
          project: "Project Gamma",
          time: "09.00 AM",
          date: "02/01/2025",
          problem: "Optimizing inventory management for e-commerce platforms.",
          skills: "Java, Spring Boot, MySQL",
          success: "Reduced inventory errors by 40%.",
          benefit: "E-commerce businesses looking to streamline inventory.",
          summary: "Developed a robust inventory management system.",
          status: "Professional",
          qualification: "Bachelor’s Degree",
          institute: "Global Tech Institute"
        },
        {
          id: 14,
          name: "Sophia Martinez",
          email: "sophiamartinez89@gmail.com",
          phone: "9832456781",
          project: "Project Delta",
          time: "02.00 PM",
          date: "03/01/2025",
          problem: "Enhancing user engagement on blogging platforms.",
          skills: "React, Redux, MongoDB",
          success: "Increased user engagement by 25%.",
          benefit: "Content creators and bloggers.",
          summary: "Developed a platform for personalized content recommendations.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "City University"
        },
        {
          id: 15,
          name: "Liam Johnson",
          email: "liamjohnson91@gmail.com",
          phone: "9813456723",
          project: "Project Epsilon",
          time: "10.30 AM",
          date: "05/01/2025",
          problem: "Reducing energy consumption in smart homes.",
          skills: "IoT, Node.js, Python",
          success: "Achieved 20% reduction in energy use.",
          benefit: "Homeowners with smart home systems.",
          summary: "Built an intelligent energy management system.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "EnergyTech University"
        },
        {
          id: 16,
          name: "Ava Wilson",
          email: "avawilson23@gmail.com",
          phone: "9871236540",
          project: "Project Zeta",
          time: "03.00 PM",
          date: "02/01/2025",
          problem: "Improving healthcare record management.",
          skills: "Angular, Firebase, Java",
          success: "Streamlined record access for over 50 clinics.",
          benefit: "Healthcare providers and patients.",
          summary: "Developed a secure healthcare record system.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "HealthTech Institute"
        },
        {
          id: 17,
          name: "Ethan Taylor",
          email: "ethantaylor44@gmail.com",
          phone: "9823456178",
          project: "Project Theta",
          time: "12.00 PM",
          date: "04/01/2025",
          problem: "Automating report generation in financial analysis.",
          skills: "Python, Pandas, Tableau",
          success: "Reduced reporting time by 50%.",
          benefit: "Financial analysts and firms.",
          summary: "Created an automated financial reporting tool.",
          status: "Professional",
          qualification: "Bachelor’s Degree",
          institute: "FinanceTech University"
        },
        {
          id: 18,
          name: "Mia Davis",
          email: "miadavis34@gmail.com",
          phone: "9812673458",
          project: "Project Iota",
          time: "01.30 PM",
          date: "05/01/2025",
          problem: "Ensuring data security in cloud storage.",
          skills: "AWS, Kubernetes, Python",
          success: "Enhanced data security by 40%.",
          benefit: "Organizations using cloud storage.",
          summary: "Designed a secure cloud storage architecture.",
          status: "Professional",
          qualification: "Master’s Degree",
          institute: "Cloud Computing Institute"
        },
        {
          id: 19,
          name: "Noah Robinson",
          email: "noahrobinson55@gmail.com",
          phone: "9834561289",
          project: "Project Kappa",
          time: "04.00 PM",
          date: "02/01/2025",
          problem: "Improving AI-based chatbot accuracy.",
          skills: "Python, TensorFlow, NLP",
          success: "Improved chatbot response accuracy by 30%.",
          benefit: "Customer support teams in various industries.",
          summary: "Developed an AI-powered chatbot for customer support.",
          status: "Student",
          qualification: "Bachelor’s Degree",
          institute: "AI Research Center"
        }
      ];
      
    useEffect(() => {
        const fetchProjects = async () => {
            setProjectDetails(mockData);
        };

        fetchProjects();
    }, []);

  const navigate = useNavigate();

  const handleViewDetails = project => {
    navigate(`/admin/project-details/${project.id}`, { state: project });
  };

  const groupedByDate = projectDetails.reduce((acc, curr) => {
    (acc[curr.date] = acc[curr.date] || []).push(curr);
    return acc;
}, {});

const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));


  return (
           <div className=" bg-white">
               <div className="py-[40px] px-[30px] grid gap-[30px]">
                   <div className="flex justify-between">
                       <div className="text-[24px] font-bold">Project Management</div>
                       <div className="">
                           <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00] ">
                               <img className="m-auto" src={projectUploadImg} alt="" />
                           </button>
                       </div>
                   </div>
                   <div className="py-[10px] grid gap-[25px] relative">
                       <div className="grid gap-[10px] tableMain " style={{ position: "sticky", top: "0px" }}>
                           {sortedDates.map((date, index) => (
                               <div key={index}>
                                   <div className="text-[#FF9D00] text-[20px]">{date}</div>
                                   <div className="projectManagement  overflow-y-auto h-max">
                                       <table className={"w-full text-center "}>
                                           <thead
                                           //  className={index === 0 ? "sticky top-[0px]" : "hidden"}
                                            >
                                               <th className="">Sl No</th>
                                               <th className="">Name</th>
                                               <th className="">Email ID</th>
                                               <th className="">Phone</th>
                                               <th className="">Project Name</th>
                                               <th className="">Time</th>
                                               <th className="">View</th>
                                           </thead>
                                           <tbody className="">
                                               {groupedByDate[date].map((project, rowIndex) => (
                                                   <tr key={rowIndex}>
                                                       <td className=" px-1 mx-auto">{rowIndex + 1}</td>
                                                       <td className=" px-1 mx-auto">{project.name}</td>
                                                       <td className=" px-1 mx-auto">{project.email}</td>
                                                       <td className=" px-1 mx-auto">{project.phone}</td>
                                                       <td className=" px-1 mx-auto">{project.project}</td>
                                                       <td className=" px-1 mx-auto">{project.time}</td>
                                                       <td>
                                                           <div
                                                               style={{ fontWeight: "700" }}
                                                               onClick={() => handleViewDetails(project)}
                                                               className="cursor-pointer px-1 w-full m-auto text-[#FF9D00] flex items-center justify-center gap-[10px] h-full"
                                                           >
                                                               <div>View Details </div>
                                                               <img src={viewMoreImg} alt="" />
                                                           </div>
                                                       </td>
                                                   </tr>
                                               ))}
                                           </tbody>
                                       </table>
                                   </div>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>
           </div>
  );
}

export default ProjectManagement;
