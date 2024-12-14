import React from "react";
import { RiDownload2Fill } from "react-icons/ri";

const Brochure = () => {

  const pdfPath = "/images/Technical_Round_Assignment.pdf"; // Replace with actual path
  
  return (
    <div style={{ textAlign: "center", position:"absolute",zIndex:"2",marginTop:"92px",marginLeft:"1250px"}}>
      <a href={pdfPath} download="Technical_Round_Assignment.pdf" style={{ textDecoration: "none" }}>

        {/* <button className=" mt-3 p-3 rounded-pill font-bold text-gray-800   hover:text-yellow-900 "
           style={{
          backgroundColor: "#fde047",
          cursor: "pointer",
           }}
        > </button> */}
        <button className=" px-3 py-2 font-bold text-white bg-gradient-to-r from-[#FFC100] to-[#FF9D00]  rounded-lg  hover:text-white">
       

          
              Company Brochure
              &nbsp;
              <i className="fa-solid fa-download me-2"></i>
        </button>
      </a>
    </div>
  );

    const pdfPath = "/images/Technical_Round_Assignment.pdf"; // Replace with actual path

    return (
        <>
            <a href={pdfPath} download="Technical_Round_Assignment.pdf" style={{ textDecoration: "none" }}>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg py-2 px-6 font-bold flex items-center space-x-2">
                    <span>Company Brochure</span>
                    <RiDownload2Fill />
                </button>
            </a>
        </>
    );

};

export default Brochure;
