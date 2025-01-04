import EmployeeInternship from "./EmployeeInternship";
import "../CSS/employeeinternship.css";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

function InternManagementDetail ()  {
    return (
      <div >
        <div className=" mt-20 w-full py-6 md:py-10 md:px-6 lg:px-20 xl:px-24 2xl:px-32 mx-auto flex justify-end items-end gap-3">
        <button className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center">
        <FaRegEdit /> &nbsp; Edit
            </button>
          <button className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center"><IoMdArrowBack /> &nbsp; Back</button>

        </div>
        <div >
        <EmployeeInternship/>
        </div>
      </div>
    )
  }
  
  export default InternManagementDetail ;


