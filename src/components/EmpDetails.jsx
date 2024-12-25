import { GoDotFill } from "react-icons/go";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";

function EmpDetails() {
    return(
        <>
        <div className=" h-[200px] py-6 flex flex-row justify-between items-center sm:text-lg md:text-2xl xl:text-xl xl:leading-7 2xl:leading-10 2xl:text-2xl  ">
        <div className="flex flex-row justify-center items-center  gap-5">
            <img src="src/images/personnel-3-400x310.jpg" height={200} width={180} style={{borderRadius:'30px'}}/>
            <div>
                <p className="font-bold text-2xl">Paul Walker</p>
                <button style={{backgroundColor:" #019304",color:"white"}} className="rounded-pill px-3 py-1 flex flex-row justify-center items-center "> <GoDotFill />Active</button>
            </div>
        </div>
        <div>
            <p className="text-xl">Employee ID</p>
            <p className="font-bold text-2xl">#123456</p>
        </div>
        <div>
            <p className="text-xl">Email</p>
            <p className="font-bold text-2xl">paulwalker@gmail.com</p>
        </div>
   </div>
  <hr />
  <div className=" h-[604px] mt-10 flex flex-row gap-20">
        <div className=" w-full h-[604px] flex flex-col gap-5">
                <h2 className="connect-text-Color font-medium">Personal Information</h2>
                <div>
                    <p className="text-xl">Phone</p>
                    <p className="font-bold text-2xl" >9876543210</p>
                </div>

                <div>
                <p className="text-xl">Address</p>
                <p className="font-bold text-2xl" >Church Street, Jude Town, Evasteen, 31562</p>
                </div>

                <div className="flex flex-row justify-between">
                    <div>
                        <p className="text-xl">Gender</p>
                        <p className="font-bold text-2xl" >Male</p>
                    </div>
                    <div>
                        <p className="text-xl ">Date Of Birth</p>
                        <p className="font-bold text-2xl " >10/03/2000</p>
                    </div>
                
                </div>

                <div>
                <p className="text-xl">Blood Group</p>
                <p className="font-bold text-2xl" >A+</p>
                </div>
        </div>
    
        <div className="w-[1px] h-54 bg-gray-400"></div>   {/* vertical line gap */}


        <div className="   w-full h-[604px] flex flex-col gap-5">
                <h2 className="connect-text-Color font-medium">Employement Overview</h2>
                
                <div>
                    <p className="text-xl">Date Of Joining</p>
                    <p className="font-bold text-2xl" >01/12/20124</p>
                </div>

                <div>
                <p className="text-xl">Job Role</p>
                <p className="font-bold text-2xl" >Sales Manager</p>
                </div>


                <div>
                <p className="text-xl">Employement Status</p>
                <p className="font-bold text-2xl" >Full Time</p>
                </div>
            
                <div>
                <p className="text-xl">Job Level</p>
                <p className="font-bold text-2xl" >Manager Level</p>
                </div>
        </div>
   
  </div>
    <div className="flex justify-center gap-20 mt-6 px-10 py-10 mt-25">
                <RiFacebookCircleLine size={45} className="text-yellow-500 cursor-pointer" />
                
                <IoLogoInstagram size={45} className="text-yellow-500 cursor-pointer" />
                <TbBrandLinkedin size={45} className="text-yellow-500 cursor-pointer" />
     </div>
     </>

    )
}
export default EmpDetails;