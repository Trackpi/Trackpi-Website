import React, { useState, Suspense } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Admin Management');

  const tabs = [
    'Admin Management',
    'Employee Management',
    'Form Management',
    'Project Management',
    'News Management',
    'Footer Management',
    'Heading Management',
    'Content Management',
  ];

  // Map tab names to component imports
  const tabComponents = {
    'Admin Management': React.lazy(() => import('../pages/AdminManagement')),
    'Employee Management': React.lazy(() => import('../pages/EmployeeManagement')),
    'Form Management': React.lazy(() => import('../pages/FormManagement')),
    'Project Management': React.lazy(() => import('../pages/ProjectManagement')),
    'News Management': React.lazy(() => import('../pages/NewsManagement')),
    'Footer Management': React.lazy(() => import('../pages/FooterManagement')),
    'Heading Management': React.lazy(() => import('./HeadingManagement')),
    'Content Management': React.lazy(() => import('./ContentManagement')),
  };

  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white text-black flex flex-col">
        <div className="p-4 font-bold text-xl border-b border-gray-300">trackpi</div>
        <ul className="flex-1">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`p-2 mx-6 my-1 cursor-pointer transition-colors rounded-3xl text-sm text-center ${
                activeTab === tab
                  ? 'bg-yellow-400 text-white font-semibold'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
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

      {/* Right Panel */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        <div className="bg-white p-4 shadow rounded-md">
          <Suspense fallback={<div>Loading...</div>}>
            {ActiveComponent ? <ActiveComponent /> : <div>Select a tab to view content.</div>}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;