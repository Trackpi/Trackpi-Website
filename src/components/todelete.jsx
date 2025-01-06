import { GoDotFill } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import "../CSS/employeedet.css";
import imagepersonnel1 from '../images/personnel-1-400x286.jpg'
function EmpDetails() {
    return(
        <>
        <div className=" custom-height h-[135px] py-2 flex flex-col md:flex-row justify-between items-center sm:text-lg md:text-2xl xl:text-xl xl:leading-5 2xl:leading-5 2xl:text-2xl  ">
                <div className="  w-full flex flex-row  justify-center items-center gap-4 md:gap-5  ">
                    
                    <img src={imagepersonnel1} alt="employee image" height={200} width={180} className="empimg " style={{borderRadius:'30px'}}/>
                    <div className="hidden md:block w-full">
                    <div className="  flex flex-row justify-between items-center text-2xl xl:text-xl w-full ">
                            <div className="">
                                <p className="font-bold  text-2xl" >Paul Walker</p>
                            
                                <button style={{backgroundColor:" #019304",color:"white"}} className=" act rounded-pill px-3 py-1 flex flex-row justify-center items-center md:gap-1 text-xs md:text-sm "> <GoDotFill size={8}/>Active</button>
                            </div>
                   
                            <div >
                                <p className="text-sm md:text-lg" >Employee ID</p>
                               
                                <p className="font-bold text-sm md:text-lg" >#123456</p>
                            </div>
                            <div >
                                <p className="email text-sm md:text-lg" >Email</p>
                                <p className="font-bold text-sm md:text-lg" >paulwalker@gmail.com</p>
                            </div> 
                    
                    </div>
                    </div>
                    <div className="md:hidden w-full   flex flex-col justify-between items-start  md:flex-row lg:flex-row md:text-2xl xl:text-xl  ">
                            <div className="flex flex-row items-center gap-3   " style={{ lineHeight: '1px' }}>
                                <p className="font-bold " style={{ margin: 0 }}>Paul Walker</p>
                            
                                <button style={{backgroundColor:" #019304",color:"white",margin:'0px'}} className=" active rounded-pill px-3 py-1 sm:py-0 sm:px-0 flex flex-row justify-center items-center md:gap-1 text-xs sm:text-xs md:text-sm "> <GoDotFill size={8}/>Active</button>
                            </div>
                   
                            <div className="div-1 flex flex-row md:flex-col lg:flex-col  gap-2  " style={{ lineHeight: '1px' }}>
                                <p className="text-sm md:text-lg"  style={{ margin: 0 }}>Employee ID</p>
                               
                                <p className="font-bold text-sm md:text-lg"  style={{ margin: 0 }}>#123456</p>
                            </div>
                            <div className=" flex flex-row md:flex-col" style={{ lineHeight: '1px' }}>
                                <p className="email text-sm md:text-lg" style={{ margin: 0 }}>Email</p>
                                <p className="font-bold text-sm md:text-lg"  style={{ margin: 0 }}>paulwalker@gmail.com</p>
                            </div> 
                    
                    </div>
                  
                </div>
               
       </div>
  <hr className="horizontal" />
  <div className=" custom-height2  h-[300px] mt-3 md:mt-10 flex flex-col md:flex-row md:gap-20 sm:gap-3">
        <div className=" div3 w-full h-[300px] flex flex-col gap-2 md:gap-4">
                <h5 className=" connect-text-Color font-medium ">Personal Information</h5>
                <div className="phone" style={{ lineHeight: '1px' }}>
                    <p className=" text-sm md:text-lg" style={{ margin: 0 }}>Phone</p>
                    <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }} >9876543210</p>
                </div>

                <div  className="phone" style={{ lineHeight: '1px' }}>
                <p className="text-sm md:text-lg" style={{ margin: 0 }}>Address</p>
                <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }} >Church Street, Jude Town, Evasteen, 31562</p>
                </div>
                 <div className="hidden md:block">
                <div className="flex flex-row justify-between   ">
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                        <p className="text-lg" style={{ margin: 0 }}>Gender</p>
                        <p className="font-bold text-lg" style={{ margin: 0 }} >Male</p>
                    </div>
                    <div  className="phone " style={{ lineHeight: '1px' }}>
                        <p className="text-lg " style={{ margin: 0 }}>Date Of Birth</p>
                        <p className="font-bold text-lg " style={{ margin: 0 }} >10/03/2000</p>
                    </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between  md:hidden  ">
                <div  className="phone " style={{ lineHeight: '1px' }}>
                        <p className="text-sm " style={{ margin: 0 }}>Date Of Birth</p>
                        <p className="font-bold text-sm" style={{ margin: 0 }} >10/03/2000</p>
                    </div>
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                        <p className="text-sm" style={{ margin: 0 }}>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p className="font-bold text-sm" style={{ margin: 0 }} >Male</p>
                    </div>
                </div>

                <div  className="phone" style={{ lineHeight: '1px' }}>
                <p className="text-sm md:text-lg" style={{ margin: 0 }}>Blood Group</p>
                <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }} >A+</p>
                </div>
        </div>
    
        <div className=" vertical-line w-[1px] h-[300px] bg-gray-400"></div>   {/* vertical line gap */}


        <div className=" div4  w-full h-[300px] flex flex-col gap-2 md:gap-4">
                <h5 className="connect-text-Color font-medium  ">Employement Overview</h5>
               <div className="hidden md:block ">
                <div className="flex flex-col gap-2">
                        <div  className="phone " style={{ lineHeight: '1px' }}>
                            <p className="text-sm md:text-lg" style={{ margin: 0 }}>Date Of Joining</p>
                            <p className="font-bold text-sm md:text-lg"style={{ margin: 0 }} >01/12/20124</p>
                        </div>

                        <div  className="phone " style={{ lineHeight: '1px' }}>
                        <p className="text-sm md:text-lg" style={{ margin: 0 }}>Job Role</p>
                        <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Sales Manager</p>
                        </div>
                 
                 
                   <div  className="phone" style={{ lineHeight: '1px' }}>
                    <p className="text-sm md:text-lg"style={{ margin: 0 }}>Employement Status</p>
                    <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Full Time</p>
                    </div>
                
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                    <p className="text-sm md:text-lg"style={{ margin: 0 }}>Job Level</p>
                    <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Entry Level</p>
                    </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-row justify-between">
                    <div className="flex flex-col gap-2" >
                        <div  className="phone " style={{ lineHeight: '1px' }}>
                            <p className="text-sm md:text-lg" style={{ margin: 0 }}>Date Of Joining</p>
                            <p className="font-bold text-sm md:text-lg"style={{ margin: 0 }} >01/12/20124</p>
                        </div>
                        <div  className="phone" style={{ lineHeight: '1px' }}>
                            <p className="text-sm md:text-lg"style={{ margin: 0 }}>Employement Status</p>
                            <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Full Time</p>
                       </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div  className="phone " style={{ lineHeight: '1px' }}>
                        <p className="text-sm md:text-lg" style={{ margin: 0 }}>Job Role</p>
                        <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Sales Manager</p>
                        </div>
                        <div  className="phone" style={{ lineHeight: '1px' }}>
                            <p className="text-sm md:text-lg"style={{ margin: 0 }}>Job Level</p>
                            <p className="font-bold text-sm md:text-lg" style={{ margin: 0 }}>Entry Level</p>
                        </div>
                    </div>
                </div>
        </div>
   
  </div>
    <div className="flex justify-center gap-20 mt-8 md:mt-3 2xl:mt-8 px-10 py-2 md:py-0 mb-3 md:mb-3 lg:mb-3 xl:mb-2 2xl:mb-4">
                <RiFacebookCircleLine  className="text-yellow-500  text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                
                <IoLogoInstagram  className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
                <TbBrandLinkedin  className="text-yellow-500  text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
     </div>
     </>

    )
}
export default EmpDetails;


import { useNavigate } from 'react-router-dom';
import "../CSS/employeeinternship.css";
import { FaRegEdit } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import EmpDetails from "../components/EmpDetails";

function InternManagementDetail ()  {
    const navigate = useNavigate();
    const handleEdit = () => {
        const internId = "someInternId"; // Replace this with the actual intern's ID
        navigate(`/admin/intern-management-add/${internId}`);
      };
    return (
      <div>
         
          <div className="bg-white  w-full py-4 px-6 mx-auto flex justify-end items-end gap-3">
              <button onClick={handleEdit} className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center">
              <FaRegEdit /> &nbsp; Edit
                  </button>
                <button className="px-4 py-2 text-white bg-[#FF9D00] rounded-lg flex justify-center items-center"><IoMdArrowBack /> &nbsp; Back</button>

          </div>
          <div className="bg-white w-full py-2 px-6 mx-auto " >
              <EmpDetails/>
             <div className="   grid grid-cols-1 md:grid-cols-2 md:gap-12 sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-7 2xl:text-2xl md:mt-4 2xl:mt-8  ">
                      
                <div>
                        <h5 className="connect-text-Color font-medium ">Feedback</h5>
                        <br/>
                          <ul className="feed list-disc text-justify text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] xl:leading-6 2xl:leading-9 2xl:text-xl leading-7  font-medium space-y-2">
                              <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo a commodi minus! Repudiandae deleniti excepturi ad ducimus molestiae dicta recusandae nobis earum, quisquam magnam odio! Accusantium ducimus rem fuga optio.</li>
                              
                              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti nihil ad architecto? Corporis laborum impedit rerum expedita non nemo amet quas! Unde ratione sint laboriosam dolores qui repellendus beatae.</li>
                            
                              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti minus ad, beatae facere sint veniam error natus consectetur corrupti quasi omnis quis illo. Quidem, inventore omnis? Nesciunt officia possimus fugit.</li>
                          </ul>
                </div>
                <div className="flex flex-col justify-center items-center ">
                        <div
                            className=" custom-height3 w-[326px] md:w-full h-[138px] md:h-[310px] xl:h-[320px] flex justify-center items-center rounded-t-md"
                            style={{  backgroundColor: "#2A2A2A" }}
                        >
                            <h6 className="text-white text-center container w-50 ">
                            Internship Certificate
                            </h6>
                        </div>
                        <div className=" w-[326px] md:w-full h-[22px] md:h-[29px] xl:h-[39px] bg-yellow-400 flex items-center justify-start rounded-b-md" >
                            <p className="text-white px-4  mt-3 text-sm sm:text-lg md:text-xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-xl">Employee Name</p>
                        </div>
                    </div>
                      
              </div>
          </div>
  </div>
  
    )
  }
  
  export default InternManagementDetail ;


