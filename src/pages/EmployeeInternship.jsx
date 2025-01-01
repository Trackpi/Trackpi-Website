import React from "react";



import EmpDetails from "../components/EmpDetails";
import "./employeeinternship.css";
function EmployeeInternship() {


  return (
    <div className="pad mt-20 w-full py-6 md:py-10 md:px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto ">
       <EmpDetails/>
       <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-12 sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-7 2xl:text-2xl md:mt-19 ">
                  <div>
                    <h5 className="connect-text-Color font-medium ">Feedback</h5>
                    <br/>
                    <ul className="feed list-disc text-justify text-sm sm:text-lg md:text-md xl:text-lg xl:leading-7 2xl:leading-7 2xl:text-xl leading-7  font-medium space-y-2">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo a commodi minus! Repudiandae deleniti excepturi ad ducimus molestiae dicta recusandae nobis earum, quisquam magnam odio! Accusantium ducimus rem fuga optio.</li>
                        
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti nihil ad architecto? Corporis laborum impedit rerum expedita non nemo amet quas! Unde ratione sint laboriosam dolores qui repellendus beatae.</li>
                       
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus ad, beatae facere sint veniam error natus consectetur corrupti quasi omnis quis illo. Quidem, inventore omnis? Nesciunt officia possimus fugit.</li>
                    </ul>
                  </div>
                <div className="flex flex-col justify-center items-center ">
                        <div
                            className=" custom-height3 w-[326px] md:w-full h-[138px] md:h-[350px] xl:h-[360px] flex justify-center items-center rounded-t-md"
                            style={{  backgroundColor: "#2A2A2A" }}
                        >
                            <h6 className="text-white text-center container w-50 ">
                            Internship Certificate
                            </h6>
                        </div>
                        <div className=" w-[326px] md:w-full h-[22px] md:h-[60px] xl:h-[70px] bg-yellow-400 flex items-center justify-start rounded-b-md" >
                            <p className="text-white px-4  mt-3 text-sm sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-xl">Employee Name</p>
                        </div>
                    </div>
                    
        </div>
                

    </div>
  );
}

export default EmployeeInternship;
