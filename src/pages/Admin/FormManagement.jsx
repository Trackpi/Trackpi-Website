import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import importImg from "../../images/import.svg";
import viewMoreImg from "../../images/viewMore.svg";
import "../../CSS/projectManagement.css";

function FormManagement() {
    const [formDetails, setFormDetails] = useState([]);
    const navigate = useNavigate();

    const mockData = [
        {
            id: 1,
            name: "Arnold Bond",
            email: "arnoldbond123@gmail.com",
            phone: "7894563210",
            hearAboutUs: "Instagram",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "01/01/2025",
            location: "Madrid",
        },
        {
            id: 2,
            name: "Clark Bell",
            email: "clarkbell123@gmail.com",
            phone: "9876543210",
            hearAboutUs: "Facebook",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "04/01/2025",
            location: "Sydney",
        },
        {
            id: 3,
            name: "Davidson Paul",
            email: "davidsonpaul@gmail.com",
            phone: "7410258963",
            hearAboutUs: "Linkedin",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "03/01/2025",
            location: "Cape Town",
        },
        {
            id: 4,
            name: "Jackson James",
            email: "jackson123@gmail.com",
            phone: "8597842630",
            hearAboutUs: "Instagram",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "03/01/2025",
            location: "Venice",
        },
        {
            id: 5,
            name: "Howard Lee",
            email: "lee123@gmail.com",
            phone: "96325874110",
            hearAboutUs: "Friends",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "01/01/2025",
            location: "Mexico",
        },
        {
            id: 6,
            name: "Morrison Nolan",
            email: "morrison1234@gmail.com",
            phone: "9512638470",
            hearAboutUs: "Facebook",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "01/01/2025",
            location: "Paris",
        },
        {
            id: 7,
            name: "Geni Smith",
            email: "geni123@gmail.com",
            phone: "9847152630",
            hearAboutUs: "LinkedIn",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "02/01/2025",
            location: "London",
        },
        {
            id: 8,
            name: "Micheal Jackson",
            email: "michealj123@gmail.com",
            phone: "9845712630",
            hearAboutUs: "Instagram",
            time: "10.00 AM",
            message:
                "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            date: "04/01/2025",
            location: "Tokyo",
        },
            {
                id: 9,
                name: "John Smith",
                email: "johnsmith456@gmail.com",
                phone: "9876543210",
                hearAboutUs: "Facebook",
                time: "11.30 AM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in arcu vitae sapien.",
                date: "03/01/2025",
                location: "New York",
            },
            {
                id: 10,
                name: "Alice Brown",
                email: "aliceb789@gmail.com",
                phone: "9765432198",
                hearAboutUs: "Google Ads",
                time: "2.00 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu augue vestibulum, tempor urna at.",
                date: "02/01/2025",
                location: "London",
            },
            {
                id: 11,
                name: "Robert Wilson",
                email: "robertw321@gmail.com",
                phone: "9654783210",
                hearAboutUs: "Twitter",
                time: "3.45 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue turpis quis nunc commodo.",
                date: "03/01/2025",
                location: "Paris",
            },
            {
                id: 12,
                name: "Emily Davis",
                email: "emilydavis654@gmail.com",
                phone: "9988776655",
                hearAboutUs: "LinkedIn",
                time: "4.15 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel metus in risus sodales.",
                date: "03/01/2025",
                location: "Sydney",
            },
            {
                id: 13,
                name: "David Clark",
                email: "davidc098@gmail.com",
                phone: "9098765432",
                hearAboutUs: "Instagram",
                time: "6.00 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ex eu turpis facilisis.",
                date: "01/01/2025",
                location: "Berlin",
            },
            {
                id: 14,
                name: "Sophia Taylor",
                email: "sophiataylor111@gmail.com",
                phone: "9234567890",
                hearAboutUs: "YouTube",
                time: "7.30 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, nisi vel ultricies.",
                date: "01/01/2025",
                location: "Dubai",
            },
            {
                id: 15,
                name: "Liam Martinez",
                email: "liam.martinez999@gmail.com",
                phone: "9123456789",
                hearAboutUs: "Referral",
                time: "9.00 AM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a sapien nec urna pharetra.",
                date: "03/01/2025",
                location: "Toronto",
            },
            {
                id: 16,
                name: "Olivia Anderson",
                email: "olivia.anderson888@gmail.com",
                phone: "9012345678",
                hearAboutUs: "Website",
                time: "12.00 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum lacus ut justo vehicula.",
                date: "02/01/2025",
                location: "Singapore",
            },
            {
                id: 17,
                name: "James Lee",
                email: "jameslee777@gmail.com",
                phone: "9786543210",
                hearAboutUs: "Billboard",
                time: "8.00 AM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla nisi id purus bibendum.",
                date: "03/01/2025",
                location: "Hong Kong",
            },
            {
                id: 18,
                name: "Charlotte Garcia",
                email: "charlotte@gmail.com",
                phone: "9654321098",
                hearAboutUs: "Event",
                time: "1.00 PM",
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat quam at erat fermentum.",
                date: "01/01/2025",
                location: "San Francisco",
            },
                {
                    id: 19,
                    name: "Isabella Wright",
                    email: "isabellawright555@gmail.com",
                    phone: "9871234560",
                    hearAboutUs: "Newsletter",
                    time: "10.30 AM",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur nec.",
                    date: "04/01/2025",
                    location: "Chicago",
                },
                {
                    id: 20,
                    name: "Ethan Walker",
                    email: "ethanwalker444@gmail.com",
                    phone: "9765432109",
                    hearAboutUs: "Flyer",
                    time: "5.15 PM",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non erat sed arcu pharetra.",
                    date: "01/01/2025",
                    location: "Mumbai",
                },
                {
                    id: 21,
                    name: "Mia Harris",
                    email: "miaharris333@gmail.com",
                    phone: "9647852103",
                    hearAboutUs: "Podcast",
                    time: "2.45 PM",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
                    date: "02/01/2025",
                    location: "Seoul",
                }
    ];

    useEffect(() => {
        const fetchProjects = async () => {
           
            setFormDetails(mockData);
        };

        fetchProjects();
    }, []);

    const handleViewDetails = (form) => {
        navigate(`/admin/form-details/${form.id}`,{state:form});
    };

             const groupedByDate = formDetails.reduce((acc, curr) => {
                 (acc[curr.date] = acc[curr.date] || []).push(curr);
                 return acc;
             }, {});
        
            const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));
        

    return (
        <div className=" bg-white">
            <div className="py-[40px] px-[30px] grid gap-[30px]">
                <div className="flex justify-between">
                    <div className="text-[24px] font-bold">Form Management</div>
                    <div className="">
                        <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00] ">
                            <img className="m-auto" src={importImg} alt="" />
                        </button>
                    </div>
                </div>
                <div className="py-[10px] grid gap-[25px] relative">
                    <div className="grid gap-[10px] tableMain " style={{ position: "sticky", top:  "0px" }}
                      >
                    {sortedDates.map((date, index) => (
                        <div key={index}>
                        <div className="text-[#FF9D00] text-[20px]">{date}</div>
                        <div className="projectManagement  overflow-y-auto h-max">
                            <table className={"w-full text-center " }>
                                <thead  className={index === 0 ? 'sticky top-[0px]' : 'hidden'}>
                                    <th className="">Sl No</th>
                                    <th className="">Name</th>
                                    <th className="">Email ID</th>
                                    <th className="">Phone</th> 
                                    <th className="">Hear About Us</th>
                                    <th className="">Time</th>
                                    <th className="">View</th>
                                </thead>
                                <tbody className="">
                                {groupedByDate[date].map((form, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td className=" px-1 mx-auto">{index + 1}</td>
                                            <td className=" px-1 mx-auto">{form.name}</td>
                                            <td className=" px-1 mx-auto">{form.email}</td>
                                            <td className=" px-1 mx-auto">{form.phone}</td>
                                            <td className=" px-1 mx-auto">{form.hearAboutUs}</td>
                                            <td className=" px-1 mx-auto">{form.time}</td>
                                            <td
                                                style={{ fontWeight: "700" }}
                                                onClick={() => handleViewDetails(form)}
                                                className="cursor-pointer px-1 w-100 mx-auto text-[#FF9D00] flex justify-center gap-[10px]"
                                            >
                                                <div>View Details </div>
                                                <img src={viewMoreImg} alt="" />
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

export default FormManagement;





{/* import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import importImg from "../../images/import.svg";
import viewMoreImg from "../../images/viewMore.svg";
import "../../CSS/projectManagement.css";

function FormManagement() {

    const [formDetails, setFormDetails] = useState([]);
    const navigate = useNavigate();
    
            useEffect(() => {
                const fetchProjects = async () => {
                    setFormDetails(mockData);
                };
        
                fetchProjects();
            }, []);
        
            const handleViewDetails = (form) => {
                navigate(/admin/form-details/${form.id}, { state: form });
            };
        
            // Group data by date
            const groupedByDate = formDetails.reduce((acc, curr) => {
                (acc[curr.date] = acc[curr.date] || []).push(curr);
                return acc;
            }, {});
        
            // Sort dates in descending order
            const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));
        
    return (
        <div className="bg-white ">
            <div className="py-[40px] px-[30px] grid gap-[30px] mainFormManagement">
                <div className="flex justify-between ">
                    <div className="text-[24px] font-bold">Form Management</div>
                    <div className="">
                        <button className="w-[55px] h-[45px] rounded-[10px] bg-[#FF9D00] ">
                            <img className="m-auto" src={importImg} alt="" />
                        </button>
                    </div>
                </div>
<div className="relative">
               {sortedDates.map((date, index) => (
  <div key={index} className="py-[10px] grid gap-[0] formTable">
    <div className="sticky top-[-2px]">
      <div className="text-[#FF9D00] text-[20px] bg-white z-10 p-2">
        {date}
      </div> */}

      {/* Displaying only the first header here */}
      {/* <div className="flex font-bold text-center items-center justify-center sticky top-0 bg-white z-10 tableHeaderForm">
        <div className="widthFirstTable">Sl No</div>
        <div className="widthCommonTable">Name</div>
        <div className="widthCommonTable">Email ID</div>
        <div className="widthCommonTable">Phone</div>
        <div className="widthCommonTable">Hear About Us</div>
        <div className="widthCommonTable">Time</div>
        <div className="widthCommonTable">View</div>
      </div>
    </div>

    <div className="overflow-x-auto table123"> */}

      {/* Table Rows */}
      {/* {groupedByDate[date].map((data, rowIndex) => (
        <div key={rowIndex} className="flex text-center justify-center tableContentForm">
          <div className="widthFirstTable ">{rowIndex+1}</div>
          <div className="widthCommonTable ">{data.name}</div>
          <div className="break-all widthCommonTable ">{data.email}</div>
          <div className="widthCommonTable ">{data.phone}</div>
          <div className="widthCommonTable ">{data.hearAboutUs}</div>
          <div className="widthCommonTable ">{data.time}</div>
          <div
            style={{ fontWeight: "700" }}
            onClick={() => handleViewDetails(data)}
            className="widthCommonTable  cursor-pointer px-1 mx-auto text-[#FF9D00] flex justify-center gap-[10px]"
          >
            <div className="text-[16px]">View Details </div>
            <img className="h-[17px]" src={viewMoreImg} alt="" />
          </div>
        </div>
      ))}
    </div>
  </div>
))}
</div>

            </div>
        </div>
);
}

export default FormManagement; */}


 {/* <div className="projectManagement relative overflow-y-auto h-max">
                            <table className="w-full text-center relative">
                                <thead className="sticky top-0">
                                    <th className="">Sl No</th>
                                    <th className="">Name</th>
                                    <th className="">Email ID</th>
                                    <th className="">Phone</th>
                                    <th className="">Hear About Us</th>
                                    <th className="">Time</th>
                                    <th className="">View</th>
                                </thead>
                                <tbody className="">
                                    {formDetails.map((form, index) => (
                                        <tr key={index}>
                                            <td className=" px-1 mx-auto">{index + 1}</td>
                                            <td className=" px-1 mx-auto">{form.name}</td>
                                            <td className=" px-1 mx-auto">{form.email}</td>
                                            <td className=" px-1 mx-auto">{form.phone}</td>
                                            <td className=" px-1 mx-auto">{form.hearAboutUs}</td>
                                            <td className=" px-1 mx-auto">{form.time}</td>
                                            <td
                                                style={{ fontWeight: "700" }}
                                                onClick={() => handleViewDetails(form)}
                                                className="cursor-pointer px-1 w-100 mx-auto text-[#FF9D00] flex justify-center gap-[10px]"
                                            >
                                                <div>View Details </div>
                                                <img src={viewMoreImg} alt="" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                                <div className="text-[#FF9D00] mt-[25px] text-[20px]">02/01/2025</div> 
                                <table className="w-full text-center relative">
                                <tbody className="">
                                    {formDetails.map((form, index) => (
                                        <tr key={index}>
                                            <td className="w-[60px] px-1 mx-auto">{index + 1}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.name}</td>
                                            <td className="w-[170px] px-1 mx-auto break-words">{form.email}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.phone}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.hearAboutUs}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.time}</td>
                                            <td
                                                style={{ fontWeight: "700" }}
                                                onClick={() => handleViewDetails(form)}
                                                className="cursor-pointer px-1 w-100 mx-auto mx-auto text-[#FF9D00] flex justify-center gap-[10px]"
                                            >
                                                <div>View Details </div>
                                                <img src={viewMoreImg} alt="" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div> */}