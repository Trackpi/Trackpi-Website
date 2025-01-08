import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import imagepersonnel1 from '../../images/personnel-1-400x286.jpg'
import imagepersonnel2 from '../../images/personnel-2-400x286.jpg'
import imagepersonnel3 from '../../images/personnel-3-400x310.jpg'
import imagepersonnel4 from '../../images/personnel-4-400x310.jpg'
import imagepersonnel5 from '../../images/personnel-5-400x310.jpg'
import imagepersonnel6 from '../../images/personnel-6-400x310.jpg'
const data = [
  {
    sl_no: 1,
    name: 'Arjun Menon',
    empID: 'EMP001',
    email: 'arjun.menon@gmail.com',
    image:imagepersonnel1,
    phone: 9876543210,
  },
  {
    sl_no: 2,
    name: 'Meera Nair',
    empID: 'EMP002',
    email: 'meera.nair@yahoo.com',
    image:imagepersonnel2,
    phone: 9123456789,
  },
  {
    sl_no: 3,
    name: 'Ravi Krishnan',
    empID: 'EMP003',
    email: 'ravi.krishnan@domain.com',
    image:imagepersonnel3,
    phone: 8765432190,
  },
  {
    sl_no: 4,
    name: 'Divya Rajan',
    empID: 'EMP004',
    email: 'divya.rajan@gmail.com',
    image:imagepersonnel4,
    phone: 9234567812,
  },
  {
    sl_no: 5,
    name: 'Vikram Reddy',
    empID: 'EMP005',
    email: 'vikram.reddy@outlook.com',
    image:imagepersonnel5,
    phone: 9876123456,
  },
  {
    sl_no: 6,
    name: 'Anjali Mohan',
    empID: 'EMP006',
    email: 'anjali.mohan@domain.com',
    image:imagepersonnel6,
    phone: 9345678123,
  },
  {
    sl_no: 7,
    name: 'Karthik Iyer',
    empID: 'EMP007',
    email: 'karthik.iyer@company.com',
    image:imagepersonnel1,
    phone: 9987654321,
  },
  {
    sl_no: 8,
    name: 'Lakshmi Priya',
    empID: 'EMP008',
    email: 'lakshmi.priya@gmail.com',
    image:imagepersonnel2,
    phone: 8765432109,
  },
  {
    sl_no: 9,
    name: 'Manoj Pillai',
    empID: 'EMP009',
    email: 'manoj.pillai@domain.com',
    image:imagepersonnel3,
    phone: 9123678945,
  },
  {
    sl_no: 10,
    name: 'Sharanya Das',
    empID: 'EMP010',
    email: 'sharanya.das@website.com',
    image:imagepersonnel4,
    phone: 8543217890,
  },
];

const TableIntern = () => {
  const navigate = useNavigate();
  const handleViewProfile = (rowDatas) => {
    console.log(rowDatas,"rowDatas")
    navigate('/admin/intern-management-detail/:id', { state: { rowDatas } });
    
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
                    <div className="flex justify-center items-center gap-2 text-[#FF9D00] cursor-pointer"  onClick={() => handleViewProfile(row)}>
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

export default TableIntern;
