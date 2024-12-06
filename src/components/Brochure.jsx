//import React from "react";

const Brochure = () => {
  const pdfPath = "/images/Technical_Round_Assignment.pdf"; // Replace with actual path
  
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a href={pdfPath} download="Technical_Round_Assignment.pdf" style={{ textDecoration: "none" }}>
        <button className=" mt-5 p-2 rounded-pill fw-bold text-black btn"
           style={{
          //  padding: "10px 20px",
          //   fontSize: "16px",
          //   color: "#000",
             backgroundColor: "#fde047",
          //   border: "none",
          //   borderRadius: "5px",
          //   cursor: "pointer",
           }}
        >
          
          Download Brochure
        </button>
      </a>
    </div>
  );
};

export default Brochure;
