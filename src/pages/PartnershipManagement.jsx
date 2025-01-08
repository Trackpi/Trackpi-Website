import React from "react";
import editImg from "../images/editbtn.svg";
import uploadImg from "../images/uploadimg.svg";
import deleteImg from "../images/deleteimg.svg";
import "../CSS/partnershipAdmin.css";

const PartnershipManagement = () => {
    return (
        <div className="bg-white w-full">
            <div className="py-[40px] px-[30px] grid gap-[40px]">
                <div className="text-[24px] font-bold mb-4">Partnership Management</div>
                <div className="grid gap-[30px]">
                    <div className=" grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">Heading</label>
                        <div className="flex items-center gap-[20px]">
                            <input
                                type="text"
                                defaultValue="OUR CLIENTS"
                                className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-bold"
                            />
                            <button className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                <img src={editImg} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className=" grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">Sub Heading</label>
                        <div className="flex items-center gap-[20px]">
                            <input
                                type="text"
                                defaultValue="We're fortunate to work with the best!"
                                className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                            />
                            <button className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                <img src={editImg} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Add Client Form */}
                <div className="bg-white partnerContainer border rounded-lg grid p-[40px] gap-[40px]">
                    <h3 className="font-semibold text-[24px] text-center">Add Client</h3>
                    <form className="flex gap-[40px]">
                        <div className="grid w-1/3 gap-[30px]">
                            <div className="grid gap-[10px]">
                                <label className="block text-[14px] font-semibold">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                                />
                            </div>
                            <div className="relative">
                                <input type="file" id="fileInput" className="hidden" />
                                <label
                                    htmlFor="fileInput"
                                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                >
                                    <div>Upload Image</div>
                                    <img src={uploadImg} alt="Upload Icon" />
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3 gap-[10px]">
                            <div className="text-[14px] font-semibold">Description</div>
                            <textarea
                                type="text"
                                placeholder="Description"
                                className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                value={"Verify the authenticity of employee credentials and background details."}
                            />
                        </div>
                    </form>
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

                {/* Clients Details */}
                <div className="grid gap-[30px]">
                    <div className="flex items-center justify-between">
                        <div className="text-[24px] font-bold ">Clients Details</div>
                        <div className="font-semibold text-[#FF9D00] text-[20px]">(10 Clients)</div>
                    </div>

                    <div className="grid gap-[30px]">
                        <div className="bg-white border partnerContainer rounded-lg  p-[20px] ">
                            <form className="flex gap-[25px]">
                                <div className="grid w-1/3 gap-[30px]">
                                    <div className="grid gap-[10px]">
                                        <label className="block text-[14px] font-semibold">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input type="file" id="fileInput" className="hidden" />
                                        <label
                                            htmlFor="fileInput"
                                            className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            <div>Upload Image</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col w-2/3 gap-[10px]">
                                    <div className="text-[14px] font-semibold">Description</div>
                                    <textarea
                                        type="text"
                                        placeholder="Description"
                                        className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                        value={"Verify the authenticity of employee credentials and background details."}
                                    />
                                </div>
                                <div className="grid gap-[40px]">
                                    <button className="bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={editImg} alt="" />
                                    </button>
                                    <button className="bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={deleteImg} alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white border partnerContainer rounded-lg  p-[20px] ">
                            <form className="flex gap-[25px]">
                                <div className="grid w-1/3 gap-[30px]">
                                    <div className="grid gap-[10px]">
                                        <label className="block text-[14px] font-semibold">Company Name</label>
                                        <input
                                            type="text"
                                            placeholder="Company Name"
                                            className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input type="file" id="fileInput" className="hidden" />
                                        <label
                                            htmlFor="fileInput"
                                            className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            <div>Upload Image</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col w-2/3 gap-[10px]">
                                    <div className="text-[14px] font-semibold">Description</div>
                                    <textarea
                                        type="text"
                                        placeholder="Description"
                                        className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                        value={"Verify the authenticity of employee credentials and background details."}
                                    />
                                </div>
                                <div className="grid gap-[40px]">
                                    <button className="bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={editImg} alt="" />
                                    </button>
                                    <button className="bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={deleteImg} alt="" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnershipManagement;
