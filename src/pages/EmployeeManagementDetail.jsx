
import React from "react";


import { IoLogoInstagram } from "react-icons/io5";
import { FaRegEdit } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { useLocation,useNavigate } from "react-router-dom";




function EmployeeManagementDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1); // Go back to previous page
    };
    const handleEdit = () => {
      const employeeId = "someid"; // Replace this with the actual intern's ID
     
      if (employeeId) {
        navigate(`/admin/employeeManagement-addEmployee/${employeeId}`); // Navigate to the edit page with the internId
      }
    };
    const employeeData  = location.state.rowDatas || {};
  if (!employeeData) {
    return <div>Loading...</div>; // Optionally, show a loading state if member is not available
  }
 
  return (
    <div className="bg-white h-[auto]"> 
          <div className="bg-white w-full py-4 px-6 mx-auto flex justify-end items-end gap-3">
                <button 
                onClick={handleEdit} 
                className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center">
                  <FaRegEdit /> &nbsp; Edit
                </button>
                <button 
                  onClick={handleBack} 
                  className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center"
                >
                  <IoMdArrowBack /> &nbsp; Back
                </button>
          </div>
          <div className="flex justify-center items-center">
          <div className="w-[750px] border rounded-xl shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.58)]">
                <div className="mt-30 bg-white px-0 py-0 text-center text-black" >
                      <div className="personnelfirst" >
                          <h2>{employeeData.name}</h2>
                          <p className="text-2xl font-normal">{employeeData.desig}</p>
                          
                          <img
                          src={employeeData.image}
                          alt={employeeData.title}
                          className="rounded-md w-52 h-52 personnelimg1 object-cover"
                        />
                      
                        </div>
                       
                </div>
                <div className="  py-4 flex justify-center gap-50 ">
                      <div className="  ">
                      
                                <div className="  px-8 flex flex-col justify-center items-center ">
                                  
                                      <p className="mt-4 font-medium text-justify"><br/><br/><br/>
                                      <span className="font-bold underline">SELF INTRODUCTION:</span>
                                      &nbsp;
                                      {employeeData.selfIntroduction}</p>
                                </div>
                                <div className=" flex justify-evenly gap-20 mt-6 px-10">
                                      <RiFacebookCircleLine size={35} className="text-yellow-500 cursor-pointer" />
                                    
                                      <IoLogoInstagram size={35} className="text-yellow-500 cursor-pointer" />
                                      <TbBrandLinkedin size={35} className="text-yellow-500 cursor-pointer" />
                              </div>
                      </div>
                </div>
            </div> 
            </div>
     
    </div>
  )
}

export default EmployeeManagementDetail




