
import React from "react";


import { IoLogoInstagram } from "react-icons/io5";

import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";

import { Modal } from "react-bootstrap";



function EmployeeManagementDetail() {
 
  return (
    <div>
      <Modal show={show} onHide={onHide} centered size="md">
            <Modal.Header className="bg-white px-1 py-1 text-center text-black" >
              <Modal.Title className="personnelfirst" >
                <h2>{member.title}</h2>
                <p className="text-2xl font-normal">{member.designation}</p>
                <button
                  onClick={onHide}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    border: "none",
                    borderRadius: "50%",
                    color: "black",
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                    fontSize: "30px",
                  }}
                >
                  &times;
                </button>
                </Modal.Title>
                <img
                  src={member.image}
                  alt={member.title}
                  className="rounded-md w-52 h-52 personnelimg object-cover"
                />
            </Modal.Header>
            <Modal.Body className="px-2  py-4 flex gap-50 ">
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
            </Modal.Body>
            
          </Modal>
     
    </div>
  )
}

export default EmployeeManagementDetail




