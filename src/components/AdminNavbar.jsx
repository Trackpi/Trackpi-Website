import React from "react";
import notifyImg from '../images/notify.svg';
import profileImg from '../images/profile.png';

function AdminNavbar() {
  return (
   <div className='adminHeader bg-white flex mx-auto justify-between items-center px-10'>
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
      </div>
  );
}

export default AdminNavbar;
