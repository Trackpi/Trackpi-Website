import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import importImg from "../images/import.svg";
import viewMoreImg from "../images/viewMore.svg";
import "../CSS/projectManagement.css";

function FormManagement() {
    const [formDetails, setFormDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProjects = async () => {
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
                    date: "01/01/2025",
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
                    date: "01/01/2025",
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
                    date: "01/01/2025",
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
                    name: "Robert Smith",
                    email: "robert123@gmail.com",
                    phone: "9847152630",
                    hearAboutUs: "LinkedIn",
                    time: "10.00 AM",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adiserus piscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    date: "01/01/2025",
                    location: "London",
                }
            ];
            setFormDetails(mockData);
        };

        fetchProjects();
    }, []);

    const handleViewDetails = (form) => {
        navigate(`/admin/form-details/${form.id}`,{state:form});
    };

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
                <div className="py-[10px] grid gap-[25px]">
                    <div className="grid gap-[10px]">
                        <div className="text-[#FF9D00] text-[20px]">01/01/2025</div>
                        <div className="projectManagement relative overflow-y-auto h-max">
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
                                            <td className="w-[170px] px-1 mx-auto">{form.email}</td>
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
                                <div className="text-[#FF9D00] mt-[25px] text-[20px]">03/01/2025</div> 
                                <table className="w-full text-center relative">
                                <tbody className="">
                                    {formDetails.map((form, index) => (
                                        <tr key={index}>
                                            <td className="w-[60px] px-1 mx-auto">{index + 1}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.name}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.email}</td>
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
                                <div className="text-[#FF9D00] mt-[25px] text-[20px]">04/01/2025</div> 
                                <table className="w-full text-center relative">
                                <tbody className="">
                                    {formDetails.map((form, index) => (
                                        <tr key={index}>
                                            <td className="w-[60px] px-1 mx-auto">{index + 1}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.name}</td>
                                            <td className="w-[170px] px-1 mx-auto">{form.email}</td>
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
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default FormManagement;
