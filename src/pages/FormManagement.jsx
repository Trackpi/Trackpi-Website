//import React from "react";

import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const FormManagement = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Page Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Footer Management</h1>
        <div className="bg-white p-4 shadow rounded-md">
          {/* Add footer management functionality here */}
          <p>Form management content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default FormManagement;
