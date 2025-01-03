import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar"; // Import your existing sidebar component

const NewsManagement = () => {
  const [isEditMode, setIsEditMode] = useState(false); // Track whether we're in Edit mode

  return (
    <div className="flex h-screen">
      
      <div className="sticky top-0 h-screen">
        <AdminSidebar />
      </div>

      
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src="path-to-user-image.png"
              alt="User Avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h1 className="text-xl font-semibold">Paul Walker</h1>
              <p className="text-gray-500">Managing Director</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-gray-500">06 December 2024</p>
            <input
              type="text"
              placeholder="Search here"
              className="px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button className="p-2 bg-gray-200 rounded-full">
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </header>

        {/* News Heading */}
        <section className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <input
              type="text"
              value="Real-Time Business News Updates?"
              className="w-1/2 max-w-screen-md p-3 border border-gray-300 rounded-lg shadow-md form-control focus:outline-none"
              readOnly
            />
            <button className="px-4 py-2 text-white bg-yellow-400 rounded-lg">
              Edit
            </button>
          </div>
        </section>

        {/* News Form */}
        <section className="p-6 mb-10 bg-white rounded-lg shadow-md">
        
          <div className="flex justify-center items-center space-x-4 mb-6">
            <button
              onClick={() => setIsEditMode(false)}
              className={`px-6 py-2 ${!isEditMode ? "bg-yellow-400 text-white" : "bg-transparent text-yellow-400 border border-yellow-400"} rounded-lg`}
            >
              Add News
            </button>

            <button
              onClick={() => setIsEditMode(true)}
              className={`px-6 py-2 ${isEditMode ? "bg-yellow-400 text-white" : "bg-transparent text-yellow-400 border border-yellow-400"} rounded-lg`}
            >
              Edit News
            </button>
          </div>

         
          <div className="flex justify-center items-center mb-6">
            <span className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg mr-auto">
              News 1
            </span>
            {isEditMode && (
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
                Delete
              </button>
            )}
          </div>

         
          <div className="flex space-x-4">
            <div className="w-3/10">
              <label className="block text-gray-600">News Headline</label>
              <input
                type="text"
                placeholder="Headline"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600">News Link</label>
              <input
                type="text"
                placeholder="Link"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

        
          <div className="mt-6 flex justify-center">
            <label className="text-center block">
              <input
                type="file"
                className="hidden"
              />
              <button className="px-6 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-400">
                Upload Image
              </button>
            </label>
          </div>

         
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-6 py-2 text-white bg-yellow-400 rounded-lg">
              Submit
            </button>
            <button className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg">
              Cancel
            </button>
          </div>
        </section>

        {/* news */}
        <section className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="p-4 bg-black text-white rounded-lg shadow-md"
            >
              <img
                src="path-to-logo.png"
                alt="News Logo"
                className="mb-4 mx-auto w-12"
              />
              <h3 className="text-lg font-bold mb-2">We See The Challenge</h3>
              <p className="text-sm">
                We’re all wrestling with complexity. Every company, work
                function, and team now faces a tall order.
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default NewsManagement;
