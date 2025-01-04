import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/tpl.png';
import settingsImg from '../images/settings.svg';
import logoutImg from '../images/logout.svg';
import helpImg from '../images/help.svg';
import '../CSS/adminsidebar.css';

const Tab = ({ name, route, isActive, onClick }) => (
  <div
    className={`tab-item px-[25px] py-[13px] rounded-[15px] cursor-pointer ${isActive ? 'active-tab' : ''}`}
    onClick={onClick}
    aria-label={`Navigate to ${name}`}
  >
    {name}
  </div>
);

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: 'Dashboard', route: '/admin/dashboard' },
    { name: 'Admin Management', route: '/admin/admin-management' },
    { name: 'Employee Management', route: '/admin/employee-management' },
    { name: 'Form Management', route: '/admin/form-management' },
    { name: 'Project Management', route: '/admin/project-management' },
    { name: 'News Management', route: '/admin/news-management' },
    { name: 'Footer Management', route: '/admin/footer-management' },
    { name: 'Heading Management', route: '' },
    { name: 'Content Management', route: '' },
    { name: 'Partnership Management', route: '/admin/partnership-management' }
  ];

  return (
    <div className="h-screen adminsidebarMain flex">
      <div className="tabSideMain flex flex-col justify-between items-center py-3">
        <div className="m-auto">
          <img src={logo} className="h-[75px] " alt="Company Logo" />
        </div>
        <div className="flex flex-col justify-between items-center secondDivAdminsidebar">
          <div className="grid gap-[10px] text-lg">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                name={tab.name}
                route={tab.route} 
                isActive={location.pathname === tab.route}
                onClick={() => (tab.route ? navigate(tab.route) : alert('Feature under construction'))}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between items-center font-semibold">
            <div
              className="flex gap-[5px] px-[30px] py-[13px] cursor-pointer"
              // onClick={() => alert('Settings page coming soon!')}
            >
              <img src={settingsImg} alt="Settings" /> Settings
            </div>
            <div
              className="flex gap-[5px] px-[30px] py-[13px] cursor-pointer"
              // onClick={() => window.open('https://help.website.com', '_blank')}
            >
              <img src={helpImg} alt="Help" /> Help
            </div>
            <div
              className="flex gap-[5px] px-[30px] py-[13px] cursor-pointer"
              // onClick={() => alert('Logging out...')}
            >
              <img src={logoutImg} alt="Logout" /> Logout
            </div>
          </div>
        </div>
      </div>
      {/* <div className='adminHeader flex mx-auto justify-between items-center px-10'>
        <div className="h-[60px] flex gap-[20px] items-center justify-between adminProfilePic">
          <div>
          <img src={profileImg} className=' w-[60px] h-[60px] rounded-[40px] object-cover' alt="" />
          </div>
          <div className="grid">
            <div className="font-bold text-[24px]">Paul Walker</div>
            <div className="text-[14px]">Managing Director</div>
          </div>
        </div>
        <div className="h-[40px] flex gap-[40px] items-center justify-between ">
          <div className="text-[18px]">06 December 2024</div>
          <div className="adminInput">
            <input type="text" placeholder='Search here...' />
          </div>
          <div className="">
            <img src={notifyImg} alt="" />
          </div>
        </div>
      </div> */}
      <div>
        
      </div>
    </div>
  );
};

export default AdminSidebar;
