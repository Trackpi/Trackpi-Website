import React from "react";



import EmpDetails from "../components/EmpDetails";

function EmployeeSales() {


  return (
    <div className="mt-20 w-full py-10 px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto ">
       <EmpDetails/>
       <div className=" container text-center flex justify-center mt-20 ">
                  

                    <div
                        className="contianer w-[500px] h-[300px] rounded-lg d-flex justify-content-center align-items-center"
                        style={{ minHeight: "300px", backgroundColor: "#2A2A2A" }}
                    >
                        <h4 className="text-white text-center container w-50 ">
                            Business Card
                        </h4>
                    </div>
                </div>
                

    </div>
  );
}

export default EmployeeSales;
