
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import React,{useEffect,useState} from "react";
import { IoLogoInstagram } from "react-icons/io5";
// import { SlSocialYoutube } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
// import { IoMdClose } from "react-icons/io";
import { Modal } from "react-bootstrap";

import "../../CSS/personnel.css";
// import { useLocation, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../Api Services/serverUrl";
function Personel({ show, onHide,employee  }) {
  const [profileImage, setProfileImage] = useState(null);
     useEffect(() => {
        if (employee && employee.image) {
            // Construct the full image URL by concatenating SERVER_URL with the image path
            const imageUrl = `${SERVER_URL}${employee.image}`; // Use SERVER_URL directly here
            setProfileImage(imageUrl); // Set the image URL to state
        }
      }, [employee]);
 
  return (
    <Modal show={show} onHide={onHide} centered size="md" >
      <Modal.Header className="modhead backcolor px-1 py-1 text-center text-black" >
        <Modal.Title className="personnelfirst" >
          <h2>{employee.name}</h2>
          <p className="text-2xl font-normal">{employee.desig}</p>
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
          {profileImage && (
                <img
                  src={profileImage}
                  alt={employee.title || "Employee"}
                  className="rounded-md w-52 h-52 personnelimg object-cover"
                  />
              )}
        
      </Modal.Header>
      <Modal.Body className="modbod px-2  py-4 flex gap-50  ">
        <div className="modb">
         
          <div className="  px-8 flex flex-col justify-center items-center ">
            
            <p className="mt-4 font-medium text-justify"><br/><br/><br/>
            <span className="font-bold underline decoration-gray-300">SELF INTRODUCTION</span>
            &nbsp;
            {employee.selfIntroduction}</p>
          </div>
          <div className=" flex justify-evenly gap-20 md:mt-6 px-10">
          <RiFacebookCircleLine size={35} className="text-yellow-500 cursor-pointer" />
          {/* <SlSocialYoutube size={35} className="text-yellow-500 cursor-pointer" /> */}
          <IoLogoInstagram size={35} className="text-yellow-500 cursor-pointer" />
          <TbBrandLinkedin size={35} className="text-yellow-500 cursor-pointer" />
        </div>
        </div>
      </Modal.Body>
      
    </Modal>
  );
}

export default Personel;
