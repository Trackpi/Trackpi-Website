import React from 'react';
import Table from 'react-bootstrap/Table';

const ReusableTable = ({ columns, data, bordered=true, hover = true }) => {
  return (
    <Table
      bordered={bordered}
      hover={hover}
      className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 custom-table"
    >
      <thead className="text-md font-bold text-black uppercase border-b-2 border-dark ">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 border-r-2  text-center"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="text-center">
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReusableTable;
