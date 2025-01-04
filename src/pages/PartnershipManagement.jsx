import React from 'react';
import AdminSidebar from '../components/AdminSidebar'; // Updated to import AdminSidebar component

const PartnershipManagement = () => {
  return (
    <div className="flex h-screen bg-gray-100">

      <aside className="w-1/6 bg-white shadow-md sticky top-0 h-screen">
        <AdminSidebar />
      </aside>

      <div className="flex-1 overflow-y-auto p-6">
        
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <img src="/path/to/profile.jpg" alt="User Profile" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-xl font-semibold">Paul Walker</h1>
              <span className="text-gray-500">Managing Director</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">06 December 2024</span>
            <input type="text" placeholder="Search here" className="border border-gray-300 rounded-lg px-4 py-2" />
            <button className="text-gray-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </header>

   
        <div>
          
          <h2 className="text-2xl font-bold mb-4">Partnership Management</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium">Heading</label>
            <div className="flex items-center gap-2">
              <input type="text" defaultValue="OUR CLIENTS" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
              <button className="text-yellow-500">
                <i className="fas fa-pen"></i>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Sub Heading</label>
            <div className="flex items-center gap-2">
              <input type="text" defaultValue="We're fortunate to work with the best!" className="border border-gray-300 rounded-lg px-4 py-2 w-1/2" />
              <button className="text-yellow-500">
                <i className="fas fa-pen"></i>
              </button>
            </div>
          </div>

          {/* Add Client Form */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Add Client</h3>
            <form className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-lg px-4 py-2" />
              <input type="text" placeholder="Description" className="border border-gray-300 rounded-lg px-4 py-2" />
              <div className="col-span-2">
                <button type="button" className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">Upload Image</button>
              </div>
              <div className="col-span-2 flex justify-center gap-4">
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Submit</button>
                <button type="button" className="bg-gray-300 px-4 py-2 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>

          {/* Clients Details */}
          <div className='mb-6'>
            <h3 className="text-lg font-semibold mb-4">Clients Details (10 Clients)</h3>

            {/* Client 1 */}
            <div className="bg-white shadow rounded-lg p-6 mb-4">
              <form className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-lg px-4 py-2" />
                <input type="text" placeholder="Description" className="border border-gray-300 rounded-lg px-4 py-2" />
                <div className="col-span-2">
                  <button type="button" className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">Upload Image</button>
                </div>
                <div className="col-span-2 flex justify-end gap-4">
                  <button type="button" className="text-yellow-500">
                    <i className="fas fa-pen"></i>
                  </button>
                  <button type="button" className="text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* Client 2 */}
            <div className="bg-white shadow rounded-lg p-6 mb-4">
              <form className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" className="border border-gray-300 rounded-lg px-4 py-2" />
                <input type="text" placeholder="Description" className="border border-gray-300 rounded-lg px-4 py-2" />
                <div className="col-span-2">
                  <button type="button" className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100">Upload Image</button>
                </div>
                <div className="col-span-2 flex justify-end gap-4">
                  <button type="button" className="text-yellow-300">
                    <i className="fas fa-pen"></i>
                  </button>
                  <button type="button" className="text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* Repeat more clients as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipManagement;
