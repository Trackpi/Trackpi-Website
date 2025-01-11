import React from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import projectManageBack from '../../images/projectManageBack.svg'

function ProjectManagementDetail() {

   const location = useLocation();
      const mockData = location.state; 

  return (
    <div className="bg-white w-full">
          <div className="py-[40px] px-[30px] grid gap-[40px]">
            <div className="flex justify-between">
              <div className="text-[24px] font-bold">
              Project Management
              </div>
              <div className="">
                <Link className="text-decoration-none" to={"/admin/project-management"}>
                <button className="w-[120px] h-[40px] rounded-[10px] text-white bg-[#FF9D00] flex gap-[10px] justify-center items-center">
                  <div>
                  <img className="m-auto" src={projectManageBack} alt="" />
                  </div>
                  <div className="text-[18px] font-semibold">Back</div>
                  </button>
                  </Link>
              </div>
            </div>
            <div className="pt-[10px] flex flex-wrap justify-between items-center w-100 gap-[20px] 2xl:gap-[90px]">
              <div className="grid gap-[15px]  min-w-[300px] projectDetailsBorderDiv 2xl:grow">
                <div className="text-[18px]">Name</div>
                <div className="text-[20px] font-bold">{mockData.name}</div>
              </div>
              <div className="grid gap-[15px]  min-w-[300px] projectDetailsBorderDiv 2xl:grow">
                <div className="text-[18px]">Contact</div>
                <div className="text-[20x] font-bold">{mockData.phone}</div>
              </div>
              <div className="grid gap-[15px]  min-w-[300px] projectDetailsBorderDiv 2xl:grow">
                <div className="text-[18px]">Email</div>
                <div className="text-[20x] font-bold">{mockData.email}</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center w-100 gap-[20px] 2xl:gap-[90px]">
              <div className="grid gap-[15px] min-w-[300px] projectDetailsBorderDiv 2xl:grow ">
                <div className="text-[18px]">Current Status</div>
                <div className="text-[20px] font-bold">{mockData.status}</div>
              </div>
              <div className="grid gap-[15px] min-w-[300px] projectDetailsBorderDiv 2xl:grow ">
                <div className="text-[18px]">Qualification</div>
                <div className="text-[20px] font-bold">{mockData.qualification}</div>
              </div>
              <div className="grid gap-[15px] min-w-[300px] projectDetailsBorderDiv 2xl:grow ">
                <div className="text-[18px]">Institute Name</div>
                <div className="text-[20px] font-bold">{mockData.institute}</div>
              </div>
            </div>
            <div className="flex gap-[40px] justify-between ">
              <div className="grid gap-[15px] w-100">
                <div className="projectDetailsBorderDiv min-h-[110px]">
                  <div className="text-[18px]">Project/Idea Name</div>
                  <div className="text-[20px] font-bold">{mockData.project}</div>
                </div>
                <div className="projectDetailsBorderDiv min-h-[180px]">
                  <div className="text-[18px]">What Problem Does Your Idea Solve?</div>
                  <div className="text-[20px] font-bold">{mockData.problem}</div>
                </div>
                <div className="projectDetailsBorderDiv min-h-[180px]">
                  <div className="text-[18px]">Who would benefit from this idea?</div>
                  <div className="text-[20px] font-bold">{mockData.benefit}</div>
                </div>
              </div>
              <div className="grid gap-[15px] w-100">
              <div className="projectDetailsBorderDiv min-h-[110px]">
                  <div className="text-[18px]">Do You Have Any Business or Technical Skills?</div>
                  <div className="text-[20px] font-bold">{mockData.skills}</div>
                </div>
                <div className="projectDetailsBorderDiv min-h-[180px]">
                  <div className="text-[18px]">Why Do You Think This Idea Will Succeed?</div>
                  <div className="text-[20px] font-bold">{mockData.success}</div>
                </div>
                <div className="projectDetailsBorderDiv min-h-[180px]">
                  <div className="text-[18px]">Summarize your project ideas.</div>
                  <div className="text-[20px] font-bold">{mockData.summary}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              {/* <div className="w-[500px] h-[230px] grid text-white projectDetailsDocument">
                <div className="bg-[#0A0A0A] h-[200px] flex justify-center items-center my-auto text-[22px]">Document</div>
                <div className="h-[30px] bg-[#FF9D00] text-[12px] px-[7px] font-semi-bold flex items-center">Document Name</div>
              </div> */}
              <div className="w-[500px] h-[230px] grid text-white projectDetailsDocument">
                <div className="bg-[#0A0A0A] h-[200px] flex justify-center items-center text-center my-auto text-[22px]">Document</div>
                <div className="h-[30px] bg-[#FF9D00] text-[12px] px-[7px] font-semi-bold flex items-center">Document Name</div>
              </div>
            </div>
    
          </div>
        </div>
  );
}

export default ProjectManagementDetail;

