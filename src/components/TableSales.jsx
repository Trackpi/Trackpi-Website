import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    sl_no: 1,
    name: 'John Doe',
    empID: 'EMP1234',
    email: 'johndoe@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 2,
    name: 'Jane Smith',
    empID: 'EMP5678',
    email: 'janesmith@yahoo.com',
    phone: 9123456789,
  },
  {
    sl_no: 3,
    name: 'Robert Brown',
    empID: 'EMP9101',
    email: 'robert.brown@hotmail.com',
    phone: 8765432109,
  },
  {
    sl_no: 4,
    name: 'Emily Davis',
    empID: 'EMP1122',
    email: 'emily.davis@gmail.com',
    phone: 9876123456,
  },
  {
    sl_no: 5,
    name: 'Michael Wilson',
    empID: 'EMP3344',
    email: 'michael.wilson@outlook.com',
    phone: 9123678945,
  },
  {
    sl_no: 6,
    name: 'Sarah Johnson',
    empID: 'EMP5566',
    email: 'sarah.johnson@domain.com',
    phone: 8765432190,
  },
  {
    sl_no: 7,
    name: 'Chris Lee',
    empID: 'EMP7788',
    email: 'chris.lee@company.com',
    phone: 9876541230,
  },
  {
    sl_no: 8,
    name: 'Sophia Martin',
    empID: 'EMP9900',
    email: 'sophia.martin@gmail.com',
    phone: 9234567891,
  },
  {
    sl_no: 9,
    name: 'David Taylor',
    empID: 'EMP2233',
    email: 'david.taylor@domain.com',
    phone: 8543217890,
  },
  {
    sl_no: 10,
    name: 'Olivia White',
    empID: 'EMP4455',
    email: 'olivia.white@website.com',
    phone: 9123456780,
  },
];
const TableSales = () => {
  const navigate = useNavigate();
  const handleViewProfile = rowDatas => {
    console.log(rowDatas, 'rowDatasSales');
    navigate('/admin/salesManagement-detail', { state: { rowDatas } });
  };
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  border-dark border-2">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md font-bold text-black uppercase border-b-2 border-dark">
            <tr>
              <th scope="col" className=" border-r-2 text-center">
                SL No.
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                Name
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                Employee ID{' '}
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                Email ID
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                Phone{' '}
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                View
              </th>
              <th scope="col" className="px-2 py-3 border-r-2 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white text-md font-semibold text-black dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 custom-table"
              >
                <>
                  <td key={rowIndex} className=" border-r-2  text-center">
                    {row.sl_no}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    {row.name}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    {row.empID}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    {/* <div className="flex justify-center items-center gap-2 "> */}
                    {row.email}
                    {/* </div> */}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    {row.phone}
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    <div
                      className="flex justify-center items-center gap-2 text-[#FF9D00] cursor-pointer "
                      onClick={() => handleViewProfile(row)}
                    >
                      View Profile <FiExternalLink size={15} />
                    </div>
                  </td>
                  <td className={`px-2 py-3 border-r-2 text-center`}>
                    <div className="flex justify-center items-center">
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

export default TableSales;
