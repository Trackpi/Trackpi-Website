import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import TableIntern from '../../components/Admin/TableIntern';
import TableSales from '../../components/Admin/TableSales';
import TableEmployee from '../../components/Admin/TableEmployee';
import { useNavigate, useLocation } from 'react-router-dom';

const EmployeeManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the active tab from the URL search params
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || 'Employee'; // Default to 'Employee'

  const [activeTab, setActiveTab] = useState(initialTab);

  // Update the URL when the tab changes
  const handleTabChange = tabName => {
    setActiveTab(tabName);
    navigate(`?tab=${tabName}`); // Update the query parameter in the URL
  };

  useEffect(() => {
    // Set the tab state based on the query params when the component mounts
    const queryParams = new URLSearchParams(location.search);
    const tabFromUrl = queryParams.get('tab');
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]); // Re-run effect when URL changes

  return (
    <div className="w-full bg-white">
      <div className="flex justify-center gap-[5rem] py-1">
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Employee'
              ? 'bg-[#FF9D00] text-white'
              : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Employee')}
        >
          Employee
        </button>
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Sales'
              ? 'bg-[#FF9D00] text-white'
              : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Sales')}
        >
          Sales
        </button>
        <button
          className={`px-8 py-1 rounded-md ${
            activeTab === 'Intern'
              ? 'bg-[#FF9D00] text-white'
              : 'text-[#FF9D00] btnBorder'
          }`}
          onClick={() => handleTabChange('Intern')}
        >
          Intern
        </button>
      </div>
      <div className="p-4">
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

export default EmployeeManagement;
