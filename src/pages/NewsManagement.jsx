
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';

const NewsManagement = () => {
  return (
    <div className="flex">
      
      <AdminSidebar />

     
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">News Management</h1>
        <div className="bg-white p-4 shadow rounded-md">
          {/* Add news management functionality here */}
          <p>News management content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsManagement;

