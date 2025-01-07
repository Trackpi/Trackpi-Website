
import React from "react";


import { IoLogoInstagram } from "react-icons/io5";

import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";





function EmployeeManagementDetail({member}) {
  if (!member) {
    return <div>Loading...</div>; // Optionally, show a loading state if member is not available
  }
 
  return (
    <div>
     
            <div className="bg-white px-1 py-1 text-center text-black" >
              <div className="personnelfirst" >
                <h2>{member.title}</h2>
                <p className="text-2xl font-normal">{member.designation}</p>
                
              
                </div>
                <img
                  src={member.image}
                  alt={member.title}
                  className="rounded-md w-52 h-52 personnelimg object-cover"
                />
            </div>
            <div className="px-2  py-4 flex gap-50 ">
              <div>
               
                <div className="  px-8 flex flex-col justify-center items-center ">
                  
                  <p className="mt-4 font-medium text-justify"><br/><br/><br/>
                  <span className="font-bold underline">SELF INTRODUCTION:</span>
                  &nbsp;
                  {member.selfIntroduction}</p>
                </div>
                <div className=" flex justify-evenly gap-20 mt-6 px-10">
                <RiFacebookCircleLine size={35} className="text-yellow-500 cursor-pointer" />
               
                <IoLogoInstagram size={35} className="text-yellow-500 cursor-pointer" />
                <TbBrandLinkedin size={35} className="text-yellow-500 cursor-pointer" />
              </div>
              </div>
            </div>
            
     
     
    </div>
  )
}

export default EmployeeManagementDetail




