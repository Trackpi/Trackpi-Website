import React,{useState} from 'react';
import AdminNavbar from '../components/AdminNavbar';
import { MdAdd } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import TableIntern from '../components/TableIntern';
import TableSales from '../components/TableSales';
import TableEmployee from '../components/TableEmployee';


const InternManagement = () => {
  const [activeTab, setActiveTab] = useState('Employee'); // Default tab

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="w-full bg-white">
      <AdminNavbar />
      <div className="flex justify-center gap-[5rem] py-3">
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Employee' ? 'bg-[#FF9D00] text-white' : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Employee')}
        >
          Employee
        </button>
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Sales' ? 'bg-[#FF9D00] text-white' : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Sales')}
        >
          Sales
        </button>
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Intern' ? 'bg-[#FF9D00] text-white' : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Intern')}
        >
          Intern
        </button>
      </div>
      <div className="p-1">
        <div className="flex items-center justify-between">
          <h4 className="font-bold my-4">Employee Management</h4>
          <div className="flex gap-2">
            <div className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2">
              <BsUpload color="white" className="font-bold" /> |{' '}
              <BsDownload color="white" />
            </div>
            <div className="px-4 py-1 rounded-md bg-[#FF9D00] text-white flex items-center gap-2">
              <MdAdd color="white" />
              Add Employee
            </div>
          </div>
        </div>
        {/* Render the table based on the active tab */}
        {activeTab === 'Employee' && <TableEmployee />}
        {activeTab === 'Sales' && <TableSales />}
        {activeTab === 'Intern' && <TableIntern />}
      </div>
    </div>
  );
};

export default InternManagement;
