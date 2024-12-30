//import React from "react";

const AdminSidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-dark flex flex-col">
      {/* Logo/Heading */}
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li>
            <a
              href="/"
              className="block px-4 py-2 text-dark font-bold hover:bg-black hover:text-white rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#admin-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Admin Management
            </a>
          </li>
          <li>
            <a
              href="#employee-management"
              className="block px-4 py-2 hover:bg-gray-700  rounded"
            >
              Employee Management
            </a>
          </li>
          <li>
            <a
              href="#form-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Form Management
            </a>
          </li>
          <li>
            <a
              href="#project-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Project Management
            </a>
          </li>
          <li>
            <a
              href="#poster-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Poster Management
            </a>
          </li>
          <li>
            <a
              href="#footer-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Footer Management
            </a>
          </li>
          <li>
            <a
              href="#content-management"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Content Management
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#help"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Help
            </a>
          </li>
        </ul>
      </nav>

      {/* User Section */}
      <div className="px-6 py-4 border-t border-gray-700">
        <div className="text-sm">Paul Walker</div>
        <div className="text-xs text-gray-400">Managing Director</div>
        <button
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
    
  );
};

export default AdminSidebar;
