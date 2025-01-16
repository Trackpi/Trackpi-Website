import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import projectManageBack from '../../images/projectManageBack.svg';
import '../../CSS/Admin/projectManagement.css'

function FormManagementDetails() {
  const location = useLocation();
  const mockData = location.state;
console.log(mockData,"mocks")
  return (
    <div className="bg-white w-full">
      <div className="py-[40px] px-[30px] grid gap-[50px]">
        <div className="flex justify-between">
          <div className="text-[24px] font-bold">Form Management</div>
          <div className="">
            <Link
              to={'/admin/form-management'}
              className="text-decoration-none"
            >
              <button className="w-[120px] h-[40px] rounded-[10px] text-white bg-[#FF9D00] flex gap-[10px] justify-center items-center">
                <div>
                  <img className="m-auto" src={projectManageBack} alt="" />
                </div>
                <div className="text-[18px] font-semibold">Back</div>
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-[10px] flex flex-wrap justify-between items-center w-100 gap-[50px]">
          <div className="grid gap-[15px] w-[calc(50%-50px)]  projectDetailsBorderDiv grow">
            <div className="text-[18px]">Name</div>
            <div className="text-[20px] font-bold">{mockData.fullName}</div>
          </div>
          <div className="grid gap-[15px] w-[calc(50%-50px)]  projectDetailsBorderDiv grow">
            <div className="text-[18px]">Contact</div>
            <div className="text-[20x] font-bold">{mockData.phone}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center w-100 gap-[50px]">
          <div className="grid gap-[15px] w-[calc(50%-50px)] projectDetailsBorderDiv grow ">
            <div className="text-[18px]">Email</div>
            <div className="text-[20px] font-bold">{mockData.email}</div>
          </div>
          <div className="grid gap-[15px] w-[calc(50%-50px)] projectDetailsBorderDiv grow ">
            <div className="text-[18px]">Location</div>
            <div className="text-[20px] font-bold">{mockData.location}</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center w-100 gap-[50px]">
          <div className="projectDetailsBorderDiv w-50">
            <div className="text-[18px]">How Did You Hear About Us?</div>
            <div className="text-[20px] font-bold">{mockData.info_from}</div>
          </div>
          <div className="projectDetailsBorderDiv min-h-[300px] w-75">
            <div className="text-[18px]">Message</div>
            <div className="text-[20px] font-bold">{mockData.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormManagementDetails;
