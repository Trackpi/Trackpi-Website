import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialYoutube } from "react-icons/sl";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function Personel() {
  const location = useLocation();
  const navigate = useNavigate();
  const setCmp = location.state; // Access the passed data here

  return (
    <section className="flex justify-center items-center p-3 w-full h-screen relative">
      <div className="personnel-overlay">
        <div className="personnel-popup">
          {/* Orange Header Section */}
          <div className="personnelfirst rounded-lg">
          <button className="close "  onClick={() => navigate(-1)}><IoMdClose /></button>
            <h1 className="personnel-title">{setCmp?.title}</h1>
            <p className="personnel-designation text-2xl font-normal">
              {setCmp?.designation}
            </p>
          </div>

          {/* Square Image */}
          <img
            src={setCmp?.image}
            alt={setCmp?.title}
            className="personnelimg"
          />

          {/* White Content Section */}
          <div className="personnel-details">
             <p className="text-left"><span className="font-bold underline">SELF INTRODUCTION:</span> &nbsp;{setCmp?.selfIntroduction}</p>
             <Row className="">
            <Col>
              <div className="d-flex justify-evenly flex-row ">
                <Link to={"#"}>
                  <RiFacebookCircleLine
                    style={{ color: "#FFD43B" }}
                    size={36}
                    className="me-3"
                  />
                </Link>
                <Link to={"#"}>
                  <SlSocialYoutube
                    style={{ color: "#FFD43B" }}
                    size={36}
                    className="me-3"
                  />
                </Link>
                <Link to={"#"}>
                  <IoLogoInstagram
                    style={{ color: "#FFD43B" }}
                    size={36}
                    className="me-3"
                  />
                </Link>
                
                <Link to={"#"}>
                  <TbBrandLinkedin
                    style={{ color: "#FFD43B" }}
                    size={36}
                    className="me-3"
                  />
                </Link>
              </div>
            </Col>
          </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personel;
