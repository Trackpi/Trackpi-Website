import '../../CSS/employeeinternship.css';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import EmpDetails from '../../components/User/EmpDetails';

function SalesManagementDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  // Retrieve employeeData passed via navigate
  const employeeData = location.state.rowDatas || {};
  console.log(employeeData, 'empDataaaa');
  // Handle Back button functionality
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };
  const handleEdit = () => {
    const salesId = location.state?.rowDatas?.empID;// Replace this with the actual intern's ID
   
    if (salesId) {
      navigate(`/admin/salesManagement-add/${salesId}`, { state: { employeeData: location.state.rowDatas } }); // Navigate to the edit page with the internId
    }
  };
  if (!employeeData) {
    return <div>No employee data found.</div>;
  }
  return (
    <div >
      <div className="bg-white   w-full py-4 px-6 mx-auto flex justify-end items-end gap-3">
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
      <div className="bg-white w-full py-2 px-14 lg:px-16 xl:px-18 2xl:px-18 mx-auto ">
        <EmpDetails employeeData={employeeData} />
        <div className="  text-center flex justify-center mt-19 md:mt-19 2xl:mt-8 ">
          <div
            className=" w-[225px] md:w-[500px] h-[121px] md:h-[300px] rounded-lg d-flex justify-content-center align-items-center"
            style={{ backgroundColor: '#2A2A2A' }}
          >
            <h6 className="business text-white text-center container w-50 ">
              Business Card
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesManagementDetail;
