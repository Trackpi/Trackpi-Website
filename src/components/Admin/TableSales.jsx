import React , {useState,useEffect} from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import baseURL from '../../Api Services/baseURL';
import DeleteModal from './DeleteModal';
const TableSales = () => {
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");
  const [salesemployees, setSalesemployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
     const [isModalOpen, setIsModalOpen] = useState(false);
        const [deleteId, setDeleteId] = useState("");
         
        const [dataDeleted, setDataDeleted] = useState("");
    useEffect(() => {
      const fetchSalesEmployee = async () => {
        try {
          const response = await baseURL.get('/api/sales/salesemployee');
          setSalesemployees(response.data);
        } catch (err) {
          setError('Failed to load Sales.');
        } finally {
          setLoading(false);
        }
      };
      fetchSalesEmployee();
    }, []);
  const handleViewProfile = (newEmployee) => {
    console.log(newEmployee, 'newEmployee');
    navigate('/admin/salesManagement-detail', { state: { rowDatas: newEmployee } });
  };
  const handleAdd = () => {
    navigate('/admin/salesManagement-add/'); // Navigate Add sales page
  }
  const handleDelete = async () => {
    try {
      await baseURL.delete(`/api/sales/salesemployee/${deleteId}`,{
        headers: {
          Authorization: `Bearer ${adminToken}`,
      },}); // Assuming `id` is the unique identifier
      setSalesemployees(salesemployees.filter(newEmployee => newEmployee._id !== deleteId));
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete the record. Please try again.');
    }
  };
  if (loading) return <div className="text-center mt-4">Loading sales data...</div>;
  if (error) return <div className="text-center mt-4 text-red-500">{error}</div>;
  return (
    <div>
       <div className="flex items-center justify-between">
                  <h4 className="font-bold my-4">Sales Management</h4>
                    <div className="flex gap-2">
                          <div className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2 cursor-pointer">
                            <BsUpload color="white" className="font-bold" /> |{' '}
                            <BsDownload color="white" />
                          </div>
                          <div onClick={handleAdd} className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2 cursor-pointer">
                            <MdAdd color="white" />
                            Add Sales
                          </div>
                    </div>
                </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{ tableLayout: "fixed" }}>
          <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
            <tr>
              <th scope="col" className=" border-r-2 text-center" style={{ width: "10%" }}>
                SL No.
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Name
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Employee ID{' '}
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center" style={{ width: "25%" }}>
                Email ID
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center"style={{ width: "25%" }}>
                Phone{' '}
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center"style={{ width: "25%" }}>
                View
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center"style={{ width: "10%" }}>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {salesemployees.map((newEmployee, index) => (
              <tr
                key={newEmployee._id  || index}
                className="bg-white text-md font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 custom-table"
              >
                <>
                  <td  className=" border-r-2  text-center"   style={{
                              wordWrap: 'break-word',
                              overflowWrap: 'break-word',
                              boxSizing: 'border-box',
                            }}>
                    {index + 1}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`} 
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}>
                    {newEmployee.name}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}>
                     {newEmployee.email}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}>
                    {/* <div className="flex justify-center items-center gap-2 "> */}
                    {newEmployee.email}
                    {/* </div> */}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}>
                    {newEmployee.phone}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      boxSizing: 'border-box',
                    }}>
                    <div
                      className="flex justify-center items-center gap-2 text-[#FF9D00] cursor-pointer "
                      onClick={() => handleViewProfile(newEmployee)}
                    >
                      View Profile <FiExternalLink size={15} />
                    </div>
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    <div className="flex justify-center items-center" onClick={() => 
                      {
                        setIsModalOpen(true);
                        setDataDeleted(`Sales ${index+ 1 }`);
                        setDeleteId(newEmployee._id);
                    }
                      }>
                      <RiDeleteBin6Line size={20} />
                    </div>
                  </td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{' '}
      {isModalOpen && <DeleteModal onClose={() => setIsModalOpen(false)} dataDeleted={dataDeleted} datas={"Sales"} functions={handleDelete} />}   

    </div>
  );
};

export default TableSales;
