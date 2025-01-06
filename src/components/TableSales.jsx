import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

const data = [
  {
    sl_no: 1,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 2,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 3,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 4,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 5,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 6,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 7,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 8,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 9,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
  {
    sl_no: 10,
    name: 'Name',
    empID: '####1234',
    email: 'email@gmail.com',
    phone: 9876543210,
  },
];
const TableIntern = () => {
  return (
    <div>
        sales
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
                  <td
                    key={rowIndex}
                    className=" border-r-2  text-center"
                  >
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
                    <div className="flex justify-center items-center gap-2 text-[#FF9D00]">
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
