import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/trackpi_logo.png';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Admin Management', route: '/admin/admin-management' },
    { name: 'Employee Management', route: '/admin/employee-management' },
    { name: 'Form Management', route: '/admin/form-management' },
    { name: 'Project Management', route: '/admin/project-management' },
    { name: 'News Management', route: '/admin/news-management' },
    { name: 'Footer Management', route: '/admin/footer-management' },
    { name: 'Partnership Management', route: '/admin/partnership-management' }
  ];

  return (
    <div className="bg-white text-black flex flex-col h-screen w-64 sm:w-48 md:w-64">
      {/* Sidebar Header with Logo */}
      <div className="p-4 border-b border-gray-300 flex justify-center">
        <img src={logo} alt="TrackPi Logo" className="h-15 w-auto max-w-full" />
      </div>

      {/* Tab List */}
      <ul className="flex-1">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className={`p-2 mx-4 sm:mx-3 my-1 cursor-pointer transition-colors rounded-3xl text-sm text-center ${
              location.pathname === tab.route
                ? 'bg-black text-white'
                : 'hover:bg-gray-200'
            }`}
            onClick={() => navigate(tab.route)}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      {/* Footer Buttons */}
      <div className="p-4 border-t border-gray-300 flex flex-col items-center space-y-4">
        <button className="w-11/12 sm:w-4/5 px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Settings
        </button>
        <button className="w-11/12 sm:w-4/5 px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Help
        </button>
        <button className="w-11/12 sm:w-4/5 px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;



