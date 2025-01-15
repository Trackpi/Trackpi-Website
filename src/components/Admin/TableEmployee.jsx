import React, {useState,useEffect} from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import imagepersonnel1 from '../../images/personnel-1-400x286.jpg'
import imagepersonnel2 from '../../images/personnel-2-400x286.jpg'
import imagepersonnel3 from '../../images/personnel-3-400x310.jpg'
import imagepersonnel4 from '../../images/personnel-4-400x310.jpg'
import imagepersonnel5 from '../../images/personnel-5-400x310.jpg'
import imagepersonnel6 from '../../images/personnel-6-400x310.jpg'
import AddEmployee from '../../pages/Admin/AddEmployee';
import baseURL from '../../Api Services/baseURL';


const TableEmployee = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch employee data from the backend
    const fetchEmployees = async () => {
      try {
        const response = await baseURL.get('/api/employee/employees');
        setEmployees(response.data);
      } catch (error) {
        setError('Failed to load employees.');
      } finally {
        setLoading(false);
      }
    
    };

    fetchEmployees();
  }, []); // Runs once on component mount
  const handleViewProfile = employee => {
    console.log(employee, 'employees');
    navigate('/admin/employeeManagement-detail', { state: {rowDatas: employee } });
  };
  const handleAdd = () => {
    navigate('/admin/employeeManagement-addEmployee/'); // Navigate Add employee page
  }
  const handleDelete = async (id) => {
    try {
      await baseURL.delete(`/api/employee/employees/${id}`); // Assuming `id` is the unique identifier
      setEmployees(employees.filter(employee => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
         <div className="flex items-center justify-between">
            <h4 className="font-bold my-4">Employee Management</h4>
              <div className="flex gap-2">
                    <div className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2 cursor-pointer">
                      <BsUpload color="white" className="font-bold" /> |{' '}
                      <BsDownload color="white" />
                    </div>
                    <div onClick={handleAdd} className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2 cursor-pointer">
                      <MdAdd color="white" />
                      Add Employee
                    </div>
              </div>
          </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 custom-table" style={{ tableLayout: "fixed" }}>
          <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
            <tr>
              <th scope="col" className=" border-r-2 text-center" style={{ width: "10%" }}>
                SL No.
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Name
              </th>

              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Email ID
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Designation{' '}
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                View
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center"style={{ width: "10%" }}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee._id || index}
                className="bg-white text-md font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
              >
                <>
                  <td key={index} className=" border-r-2  text-center"
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                  }}
                  >
                    {index + 1}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                  }}>
                    {employee.name}
                  </td>

                  <td className={`px-2 py-3 border-r-2 text-center`}
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                  }}>
                    {/* <div className="flex justify-center items-center gap-2 "> */}
                    {employee.email}
                    {/* </div> */}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                  }}>
                    {employee.desig}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    boxSizing: 'border-box',
                  }}>
                    <div
                      className="flex justify-center items-center gap-2 text-[#FF9D00] cursor-pointer"
                      onClick={() => handleViewProfile(employee)}
                     
                    >
                      View Profile <FiExternalLink size={15} />
                    </div>
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    <div className="flex justify-center items-center cursor-pointer" onClick={() => handleDelete(employee._id)}>
                      <RiDeleteBin6Line size={20} />
                    </div>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{' '}
    </div>
  );
};

export default TableEmployee;
