import React from "react";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
// import { IoMdClose } from "react-icons/io";
import { Modal } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

function Personel({ show, onHide, member }) {

  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header className="bg-white px-1 py-1 text-center text-black" >
        <Modal.Title className="personnelfirst" closeButton >
          <h2>{member.title}</h2>
          <p className="text-2xl font-normal">{member.designation}</p>
          </Modal.Title>
          <img
            src={member.image}
            alt={member.title}
            className="rounded-md w-52 h-52 personnelimg object-cover"
          />
      </Modal.Header>
      <Modal.Body className="p-4 flex gap-50 ">
        <div>
         
          <div className="flex flex-col ">
            
            <p className="mt-2"><br/><br/><br/>
            <span className="font-bold underline">SELF INTRODUCTION:</span>
            &nbsp;
            {member.selfIntroduction}</p>
          </div>
          <div className="flex justify-evenly gap-20">
          <RiFacebookCircleLine size={35} className="text-yellow-500 cursor-pointer" />
          <SlSocialYoutube size={35} className="text-yellow-500 cursor-pointer" />
          <IoLogoInstagram size={35} className="text-yellow-500 cursor-pointer" />
          <TbBrandLinkedin size={35} className="text-yellow-500 cursor-pointer" />
        </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Personel;
