import React from "react";

function AdminNavbar() {
  return (
    <header className="bg-white shadow-md px-4 py-1 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-base md:text-lg font-semibold text-gray-900">
              Paul Walker
            </h1>
            <p className="text-sm text-gray-600">Managing Director</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="hidden md:block">
          <p className="text-sm md:text-base text-gray-700 font-medium">
            06 December 2024
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex items-center flex-grow md:flex-grow-0">
            <input
              type="text"
              placeholder="Search here"
              className="w-full md:w-48 lg:w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-200"
            />
            <button className="absolute right-3">
              <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            </button>
          </div>

          {/* Notification Icon */}
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
            <i className="fa-solid fa-bell text-gray-700 text-lg"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
