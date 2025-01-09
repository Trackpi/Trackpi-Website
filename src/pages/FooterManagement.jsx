import React, { useState } from "react";
import editImg from "../images/editbtn.svg";
import uploadImg from "../images/uploadimg.svg";
import footerBannerImg from "../images/footerbanner.jpg";
import { Col, Row } from "react-bootstrap";

const FooterManagement = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleRemoveFile = () => {
        setFileName(null);
        document.getElementById("fileInput").value = "";
    };
    const [fileName1, setFileName1] = useState("");
    const [fileName2, setFileName2] = useState("");
    const [fileName3, setFileName3] = useState("");

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
                <div className="text-[24px] font-bold mb-4">Footer Management</div>
                <div className="bg-white partnerContainer border rounded-lg grid p-[30px] gap-[30px]">
                    <form className="grid gap-[30px] py-[20px]">
                        <div className=" grid gap-[10px]">
                            <label className="block text-[14px] font-semibold">Heading</label>
                            <div className="flex items-center gap-[20px]">
                                <input
                                    type="text"
                                    defaultValue="Discover Winning Business Strategies"
                                    className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                                />
                                <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="grid py-[20px] gap-[30px]">
                        <div className="flex  gap-[40px] items-center w-100">
                            <form className="flex justify-between gap-[30px] w-100 items-center">
                                  <div className="videoBtn min-w-[110px] text-center">Video 1</div>
                                  <input className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"  type="text" placeholder="Video Link" value={''} />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput1"
                                            className="hidden"
                                            onChange={handleFileChange1}
                                        />
                                        <label
                                            htmlFor="fileInput1"
                                            className="uploadBtn flex items-center justify-center min-w-[180px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {fileName1 ? (
                                                <>
                                                    <span>
                                                        {fileName1.length > 15
                                                            ? `${fileName1.substring(0, 15)}...`
                                                            : fileName1}
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
                                                    <div>Upload Video</div>
                                                    <img src={uploadImg} alt="Upload Icon" />
                                                </>
                                            )}
                                        </label>
                                </div>
                                <button type="submit" className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
                            </form>
                        </div>
                        <div className="flex gap-[40px] items-center w-100">
                            <form className="flex justify-between gap-[30px] w-100 items-center">
                                  <div className="videoBtn min-w-[110px] text-center">Video 1</div>
                                  <input className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"  type="text" placeholder="Video Link" value={''} />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput2"
                                            className="hidden"
                                            onChange={handleFileChange2}
                                        />
                                        <label
                                            htmlFor="fileInput2"
                                            className="uploadBtn flex items-center justify-center min-w-[180px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
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
                                                    <div>Upload Video</div>
                                                    <img src={uploadImg} alt="Upload Icon" />
                                                </>
                                            )}
                                        </label>
                                </div>
                                <button type="submit" className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
                            </form>
                        </div>
                        <div className="flex gap-[40px] items-center w-100">
                            <form className="flex justify-between gap-[30px] w-100 items-center">
                                  <div className="videoBtn min-w-[110px] text-center">Video 3</div>
                                  <input className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"  type="text" placeholder="Video Link" value={''} />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput3"
                                            className="hidden"
                                            onChange={handleFileChange3}
                                        />
                                        <label
                                            htmlFor="fileInput3"
                                            className="uploadBtn flex items-center justify-center min-w-[180px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
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
                                                    <div>Upload Video</div>
                                                    <img src={uploadImg} alt="Upload Icon" />
                                                </>
                                            )}
                                        </label>
                                </div>
                                <button type="submit" className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
                            </form>
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
                    <div className="flex items-center justify-around gap-[60px]">
                      <iframe src="https://youtube.com/embed/eDnDpUTbwRw?si=7OPOyMXMznVlQJd9"  className="rounded-[10px] aspect-[14/25]"  frameborder="0"></iframe>
                      <iframe src="https://youtube.com/embed/YS6ymYgd6k0?si=LR4bUIs4IwT3mAgq"  className="rounded-[10px] aspect-[14/25]"  frameborder="0"></iframe>
                      <iframe src="https://youtube.com/embed/AR1Rwhg5Tdo?si=OUPSKDekgLkAarqP"  className="rounded-[10px] aspect-[14/25]"  frameborder="0"></iframe>
                    </div>
                </div>
                <div className="bg-white partnerContainer border rounded-lg grid p-[30px] gap-[30px]">
                    <form className="grid gap-[30px]">
                        <div className=" grid gap-[10px]">
                            <label className="block text-[14px] font-semibold">Banner Heading</label>
                            <div className="flex items-center gap-[20px]">
                                <input
                                    type="text"
                                    defaultValue="Want to Learn More"
                                    className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                                />
                                <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-[30px] items-center justify-start">
                            <div className="relative w-[250px] ">
                                <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                                <label
                                    htmlFor="fileInput"
                                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                >
                                    {fileName ? (
                                        <>
                                            <span>
                                                {fileName.length > 15 ? `${fileName.substring(0, 15)}...` : fileName}
                                            </span>
                                            <button
                                                onClick={handleRemoveFile}
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
                            <div>
                                <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                                    <img src={editImg} alt="" />
                                </button>
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
                    <div>
                        <img className="w-100 rounded-[20px] footerBanner" src={footerBannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterManagement;
