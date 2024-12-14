//import React from "react";

const Brochure = () => {
  const pdfPath = "/images/Technical_Round_Assignment.pdf"; // Replace with actual path
  
  return (
    <div style={{ textAlign: "center", position:"absolute",zIndex:"2",marginTop:"92px",marginLeft:"1250px"}}>
      <a href={pdfPath} download="Technical_Round_Assignment.pdf" style={{ textDecoration: "none" }}>
        <button className=" px-3 py-2 font-bold text-white bg-gradient-to-r from-[#FFC100] to-[#FF9D00]   rounded-2xl  hover:text-white">
       
          
              Company Brochure
              &nbsp;
              <i className="fa-solid fa-download me-2"></i>
        </button>
      </a>
    </div>
  );
};

export default Brochure;
