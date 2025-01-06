
import "../CSS/employeeinternship.css";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import EmpDetails from "../components/EmpDetails";

function SalesManagementDetail ()  {
    return (
      <div>
         
          <div className="bg-white  w-full py-4 px-6 mx-auto flex justify-end items-end gap-3">
          <button className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center">
          <FaRegEdit /> &nbsp; Edit
              </button>
            <button className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center"><IoMdArrowBack /> &nbsp; Back</button>

          </div>
          <div className="bg-white w-full py-2 px-6 mx-auto " >
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
      </div>
      
    )
  }
  
  export default SalesManagementDetail ;


