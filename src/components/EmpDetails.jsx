import { GoDotFill } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import "./employeedet.css";
function EmpDetails() {
    return(
        <>
        <div className="custom-height h-[200px] py-6 flex flex-col md:flex-row justify-between items-center sm:text-lg md:text-2xl xl:text-xl xl:leading-5 2xl:leading-5 2xl:text-2xl  ">
                <div className=" div1 w-full flex flex-row  items-center  gap-5 ">
                    <img src="src/images/personnel-3-400x310.jpg" height={200} width={180} className="empimg" style={{borderRadius:'30px'}}/>
                    <div className="div-frame w-full  flex flex-col justify-between items-start md:flex-row sm:text-lg md:text-2xl xl:text-xl xl:leading-5 2xl:leading-5 2xl:text-2xl ">
                            <div className="div2 ">
                                <p className="font-bold md:text-2xl">Paul Walker</p>
                                <button style={{backgroundColor:" #019304",color:"white"}} className="active rounded-pill px-4 md:px-3 md:py-1 flex flex-row justify-center items-center text-sm md:text-lg "> <GoDotFill />Active</button>
                            </div>
                   
                            <div className="div2 ">
                                <p className="md:text-xl">Employee ID</p>
                                <p className="font-bold md:text-2xl">#123456</p>
                            </div>
                            <div className="div2">
                                <p className="email md:text-xl">Email</p>
                                <p className="font-bold md:text-2xl">paulwalker@gmail.com</p>
                            </div> 
                    
                    </div>
                </div>
               
       </div>
  <hr className="horizontal" />
  <div className="custom-height2 h-[400px] md:mt-10 flex flex-col md:flex-row md:gap-20 sm:gap-3">
        <div className="div3 w-full h-[604px] flex flex-col gap-3">
                <h2 className="connect-text-Color font-medium">Personal Information</h2>
                <div className="phone" style={{ lineHeight: '1px' }}>
                    <p className="text-xl" style={{ margin: 0 }}>Phone</p>
                    <p className="font-bold text-xl" style={{ margin: 0 }} >9876543210</p>
                </div>

                <div  className="phone" style={{ lineHeight: '1px' }}>
                <p className="text-xl" style={{ margin: 0 }}>Address</p>
                <p className="font-bold text-xl" style={{ margin: 0 }} >Church Street, Jude Town, Evasteen, 31562</p>
                </div>

                <div className="flex flex-col  gap-3 md:flex-row justify-between">
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                        <p className="text-xl" style={{ margin: 0 }}>Gender</p>
                        <p className="font-bold text-xl" style={{ margin: 0 }} >Male</p>
                    </div>
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                        <p className="text-xl " style={{ margin: 0 }}>Date Of Birth</p>
                        <p className="font-bold text-xl " style={{ margin: 0 }} >10/03/2000</p>
                    </div>
                
                </div>

                <div  className="phone" style={{ lineHeight: '1px' }}>
                <p className="text-xl" style={{ margin: 0 }}>Blood Group</p>
                <p className="font-bold text-xl" style={{ margin: 0 }} >A+</p>
                </div>
        </div>
    
        <div className=" vertical-line w-[1px] h-53 bg-gray-400"></div>   {/* vertical line gap */}


        <div className=" div4  w-full h-[604px] flex flex-col gap-3">
                <h2 className="connect-text-Color font-medium">Employement Overview</h2>
               
                        <div  className="phone " style={{ lineHeight: '1px' }}>
                            <p className="text-xl" style={{ margin: 0 }}>Date Of Joining</p>
                            <p className="font-bold text-xl"style={{ margin: 0 }} >01/12/20124</p>
                        </div>

                        <div  className="phone" style={{ lineHeight: '1px' }}>
                        <p className="text-xl" style={{ margin: 0 }}>Job Role</p>
                        <p className="font-bold text-xl" style={{ margin: 0 }}>Sales Manager</p>
                        </div>
               
               
                   <div  className="phone" style={{ lineHeight: '1px' }}>
                    <p className="text-xl"style={{ margin: 0 }}>Employement Status</p>
                    <p className="font-bold text-xl" style={{ margin: 0 }}>Full Time</p>
                    </div>
                
                    <div  className="phone" style={{ lineHeight: '1px' }}>
                    <p className="text-xl"style={{ margin: 0 }}>Job Level</p>
                    <p className="font-bold text-xl" style={{ margin: 0 }}>Entry Level</p>
                    </div>
             
        </div>
   
  </div>
    <div className="flex justify-center gap-20 md:mt-6 px-10 py-10 mt-25">
                <RiFacebookCircleLine size={45} className="text-yellow-500 cursor-pointer" />
                
                <IoLogoInstagram size={45} className="text-yellow-500 cursor-pointer" />
                <TbBrandLinkedin size={45} className="text-yellow-500 cursor-pointer" />
     </div>
     </>

    )
}
export default EmpDetails;