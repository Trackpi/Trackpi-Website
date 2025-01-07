import '../CSS/employeeinternship.css';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import EmpDetails from '../components/EmpDetails';

function InternManagementDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEdit = () => {
    const internId = "someInternId"; // Replace this with the actual intern's ID
    navigate(`/admin/intern-management-add/${internId}`);
  };
  // Retrieve employeeData passed via navigate
  const employeeData  = location.state.rowDatas || {};
console.log(employeeData,"empDataaaa")
  // Handle Back button functionality
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  if (!employeeData) {
    return <div>No employee data found.</div>;
  }

  return (
    <div>
      <div className="bg-white w-full py-4 px-6 mx-auto flex justify-end items-end gap-3">
        <button onClick={handleEdit} className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center">
          <FaRegEdit /> &nbsp; Edit
        </button>
        <button 
          onClick={handleBack} 
          className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center"
        >
          <IoMdArrowBack /> &nbsp; Back
        </button>
      </div>

      <div className="bg-white w-full py-2 px-6 mx-auto">
        <EmpDetails employeeData={employeeData} /> {/* Pass data to EmpDetails component */}

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-7 2xl:text-2xl md:mt-4 2xl:mt-8">
          <div>
            <h5 className="connect-text-Color font-medium">Feedback</h5>
            <br />
            <ul className="feed list-disc text-justify text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] xl:leading-6 2xl:leading-9 2xl:text-xl leading-7 font-medium space-y-2">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="custom-height3 w-[326px] md:w-full h-[138px] md:h-[310px] xl:h-[320px] flex justify-center items-center rounded-t-md" style={{ backgroundColor: '#2A2A2A' }}>
              <h6 className="text-white text-center container w-50">
                Internship Certificate
              </h6>
            </div>
            <div className="w-[326px] md:w-full h-[22px] md:h-[29px] xl:h-[39px] bg-yellow-400 flex items-center justify-start rounded-b-md">
              <p className="text-white px-4 mt-3 text-sm sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-xl">
                {employeeData.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternManagementDetail;
