import React from "react";



import EmpDetails from "../components/EmpDetails";

function EmployeeInternship() {


  return (
    <div className="mt-20 w-full py-10 px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto ">
       <EmpDetails/>
       <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-7 2xl:text-2xl mt-20 ">
                  <div>
                    <h3 className="connect-text-Color font-bold">Feedback</h3>
                    <br/>
                    <ul className="list-disc text-justify text-xl sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-7 2xl:text-xl leading-7  font-bold space-y-2.5">
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo a commodi minus! Repudiandae deleniti excepturi ad ducimus molestiae dicta recusandae nobis earum, quisquam magnam odio! Accusantium ducimus rem fuga optio.</li>
                        
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti nihil ad architecto? Corporis laborum impedit rerum expedita non nemo amet quas! Unde ratione sint laboriosam dolores qui repellendus beatae.</li>
                       
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus ad, beatae facere sint veniam error natus consectetur corrupti quasi omnis quis illo. Quidem, inventore omnis? Nesciunt officia possimus fugit.</li>
                    </ul>
                  </div>
                <div className=" ">
                        <div
                            className="w-full h-[300px] md:h-[350px] xl:h-[400px] flex justify-center items-center rounded-t-md"
                            style={{ minHeight: "300px", backgroundColor: "#2A2A2A" }}
                        >
                            <h4 className="text-white text-center container w-50 ">
                            Internship Certificate
                            </h4>
                        </div>
                        <div className="w-full h-[50px] md:h-[60px] xl:h-[70px] bg-yellow-400 flex items-center justify-center rounded-b-md" >
                            <p className="text-white mt-3 text-lg sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl">Employee Name</p>
                        </div>
                    </div>
                    
        </div>
                

    </div>
  );
}

export default EmployeeInternship;
