

import React from "react";

import EmpDetails from "../components/EmpDetails";
import "../CSS/employeeinternship.css";
function EmployeeSales() {
 

  return (
    <div className="pad mt-20  w-full py-5 md:py-10 md:px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto "  >
       <EmpDetails/>
       <div className="  text-center flex justify-center mt-19 md:mt-19 2xl:mt-8 ">
                  

                    <div
                        className=" w-[225px] md:w-[500px] h-[121px] md:h-[300px] rounded-lg d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "#2A2A2A" }}
                    >
                        <h6 className="business text-white text-center container w-50 ">
                            Business Card
                        </h6>
                    </div>
                </div>
                

    </div>
  );
}

export default EmployeeSales;
