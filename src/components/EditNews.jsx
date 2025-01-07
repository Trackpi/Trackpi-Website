import React from 'react'
import uploadImg from "../images/uploadimg.svg";
import deleteImg from "../images/deletenews.svg";

function EditNews() {
  return (
   <div className='grid gap-[40px]'>
    <div className='flex justify-between'>
        <div className='w-[125px]'></div>
        <div className="px-[20px] py-[10px] text-[18px] font-bold rounded-[10px]  newsBtn">
                           News 1
                         </div>
                         <div className="flex items-center justify-center px-[25px] gap-[10px] py-[8px] rounded-[10px] w-[125px] border-[2px] border-[#FF9D00] ">
                            <img className='h-[22px] w-[22px]' src={deleteImg} alt="" />
                            <div className='text-[18px] font-semibold text-[#FF9D00]'>Delete</div>
                         </div>
    </div>
                                 
                           <div className="flex gap-[50px]">
                               <div className="w-2/5">
                                   {" "}
                                   <div className="grid gap-[10px]">
                                       <label className="block text-[14px] font-semibold">News Headline</label>
                                       <input
                                           type="text"
                                           placeholder="Headline"
                                           className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                                       />
                                   </div>
                               </div>
                               <div className="w-3/5">
                                   <div className="grid gap-[10px]">
                                       <label className="block text-[14px] font-semibold">News Link</label>
                                       <input
                                           type="text"
                                           placeholder="Link"
                                           className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                                       />
                                   </div>
                               </div>
                           </div>
   
                           <div className="relative w-[250px] mx-auto">
                               <input type="file" id="fileInput" className="hidden" />
                               <label
                                   htmlFor="fileInput"
                                   className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                               >
                                   <div>Upload Image</div>
                                   <img src={uploadImg} alt="Upload Icon" />
                               </label>
                           </div>
                           <div className=" flex justify-center gap-[30px]">
                               <button
                                   type="submit"
                                   className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                               >
                                   Submit
                               </button>
                               <button
                                   type="button"
                                   className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                               >
                                   Cancel
                               </button>
                           </div>
       </div>
  )
}

export default EditNews