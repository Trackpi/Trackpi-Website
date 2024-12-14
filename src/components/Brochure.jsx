import React from "react";
import { RiDownload2Fill } from "react-icons/ri";

const Brochure = () => {
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
