import React, { useState } from "react";
import editImg from "../../images/editbtn.svg";
import uploadImg from "../../images/uploadimg.svg";
import deleteImg from "../../images/deleteimg.svg";
import "../../CSS/partnershipAdmin.css";
import DeletePopUp from "../../components/Admin/DeletePopUp";

const PartnershipManagement = () => {
    const [fileName1, setFileName1] = useState("");
    const [fileName2, setFileName2] = useState("");
    const [fileName3, setFileName3] = useState("");
        // modal
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [dataDeleted, setDataDeleted] = useState("");

    const handleFileChange1 = (event) => {
        const file1 = event.target.files[0];
        if (file1) {
            setFileName1(file1.name);
        }
    };
    const handleRemoveFile1 = () => {
        setFileName1(null);
        document.getElementById("fileInput1").value = "";
    };

    const handleFileChange2 = (event) => {
        const file2 = event.target.files[0];
        if (file2) {
            setFileName2(file2.name);
        }
    };
    const handleRemoveFile2 = () => {
        setFileName2(null);
        document.getElementById("fileInput2").value = "";
    };

    const handleFileChange3 = (event) => {
        const file3 = event.target.files[0];
        if (file3) {
            setFileName3(file3.name);
        }
    };
    const handleRemoveFile3 = () => {
        setFileName3(null);
        document.getElementById("fileInput3").value = "";
    };

    return (
        <div className="bg-white w-full">
            <div className="py-[40px] px-[30px] grid gap-[40px]">
                <div className="text-[24px] font-bold mb-4">Partnership Management</div>
                <div className="grid gap-[30px]">
                    <form className=" grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">Heading</label>
                        <div className="flex items-center gap-[20px]">
                            <input
                                type="text"
                                defaultValue="OUR CLIENTS"
                                className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-bold"
                            />
                            <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                <img src={editImg} alt="" />
                            </button>
                        </div>
                    </form>
                    <form className=" grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">Sub Heading</label>
                        <div className="flex items-center gap-[20px]">
                            <input
                                type="text"
                                defaultValue="We're fortunate to work with the best!"
                                className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                            />
                            <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                <img src={editImg} alt="" />
                            </button>
                        </div>
                    </form>
                </div>
                {/* Add Client Form */}
                <div className="bg-white partnerContainer border rounded-lg grid p-[40px] gap-[40px]">
                    <h3 className="font-semibold text-[24px] text-center">Add Client</h3>
                    <form className=" grid gap-[40px]">
                        <div className="flex gap-[40px]">
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
                                <input type="file" id="fileInput1" className="hidden" onChange={handleFileChange1} />
                                <label
                                    htmlFor="fileInput1"
                                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                >
                                    {fileName1 ? (
                                        <>
                                            <span>
                                                {fileName1.length > 15 ? `${fileName1.substring(0, 15)}...` : fileName1}
                                            </span>
                                            <button
                                                onClick={handleRemoveFile1}
                                                className="ml-2 text-red-500 hover:text-red-700"
                                            >
                                                ✕
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <div>Upload Image</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                        </>
                                    )}
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/3 gap-[10px]">
                            <div className="text-[14px] font-semibold">Description</div>
                            <textarea
                                type="text" required
                                placeholder="Description"
                                className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                defaultValue={"Verify the authenticity of employee credentials and background details."}
                            />
                        </div>
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
                            </form>
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
                                        <input type="file" id="fileInput2" className="hidden" onChange={handleFileChange2} />
                                        <label
                                            htmlFor="fileInput2"
                                            className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {fileName2 ? (
                                                <>
                                                    <span>
                                                        {fileName2.length > 15
                                                            ? `${fileName2.substring(0, 15)}...`
                                                            : fileName2}
                                                    </span>
                                                    <button
                                                        onClick={handleRemoveFile2}
                                                        className="ml-2 text-red-500 hover:text-red-700"
                                                    >
                                                        ✕
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <div>Upload Image</div>
                                                    <img src={uploadImg} alt="Upload Icon" />
                                                </>
                                            )}
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col w-2/3 gap-[10px]">
                                    <div className="text-[14px] font-semibold">Description</div>
                                    <textarea
                                        type="text"
                                        placeholder="Description"
                                        className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                        defaultValue={"Verify the authenticity of employee credentials and background details."}
                                    />
                                </div>
                                <div className="grid gap-[40px]">
                                    <div className="bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px] cursor-pointer ">
                                        <img src={editImg} alt="" />
                                    </div>
                                    <div  onClick={() => { setIsModalOpen(true); setDataDeleted("Client 1")}} className=" cursor-pointer bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={deleteImg} alt="" />
                                    </div>
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
                                        <input type="file" id="fileInput3" className="hidden" onChange={handleFileChange3}/>
                                        <label
                                            htmlFor="fileInput3"
                                            className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {fileName3 ? (
                                                <>
                                                    <span>
                                                        {fileName3.length > 15
                                                            ? `${fileName3.substring(0, 15)}...`
                                                            : fileName3}
                                                    </span>
                                                    <button
                                                        onClick={handleRemoveFile3}
                                                        className="ml-2 text-red-500 hover:text-red-700"
                                                    >
                                                        ✕
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <div>Upload Image</div>
                                                    <img src={uploadImg} alt="Upload Icon" />
                                                </>
                                            )}
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-col w-2/3 gap-[10px]">
                                    <div className="text-[14px] font-semibold">Description</div>
                                    <textarea
                                        type="text"
                                        placeholder="Description"
                                        className="h-100 text-[16px] partnerInput border px-[15px] py-[10px] rounded-[10px]"
                                        defaultValue={"Verify the authenticity of employee credentials and background details."}
                                    />
                                </div>
                                <div className="grid gap-[40px]">
                                    <div className="cursor-pointer bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={editImg} alt="" />
                                    </div>
                                    <div onClick={() => { setIsModalOpen(true); setDataDeleted("Client 2")}} className="cursor-pointer bg-[#FF9D00] h-[44px] w-[44px] p-[10px] rounded-[8px]">
                                        <img src={deleteImg} alt="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <DeletePopUp onClose={() => setIsModalOpen(false)} dataDeleted={dataDeleted} datas={"Client"}/>}

        </div>
    );
};

export default PartnershipManagement;
