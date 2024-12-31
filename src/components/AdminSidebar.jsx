import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const tabs = [
    { name: 'Admin Management', route: '/admin/admin-management' },
    { name: 'Employee Management', route: '/admin/employee-management' },
    { name: 'Form Management', route: '/admin/form-management' },
    { name: 'Project Management', route: '/admin/project-management' },
    { name: 'News Management', route: '/admin/news-management' },
    { name: 'Footer Management', route: '/admin/footer-management' },
  ];

  return (
    <div className="w-64 bg-white text-black flex flex-col h-screen">
      <div className="p-4 font-bold text-xl border-b border-gray-300">trackpi</div>
      <ul className="flex-1">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className="p-2 mx-6 my-1 cursor-pointer transition-colors rounded-3xl text-sm text-center hover:bg-gray-200"
            onClick={() => navigate(tab.route)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      <div className="p-4 border-t border-gray-300 space-y-2">
        <button className="w-4/5 mx-auto px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Settings
        </button>
        <button className="w-4/5 mx-auto px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Help
        </button>
        <button className="w-4/5 mx-auto px-4 py-2 rounded-3xl text-sm text-center hover:bg-gray-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;