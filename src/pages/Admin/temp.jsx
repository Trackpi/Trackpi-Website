import React, { useEffect, useState } from "react";
import editImg from "../../images/editbtn.svg";
import uploadImg from "../../images/uploadimg.svg";
import baseURL from "../../Api Services/baseURL";
import { SERVER_URL } from "../../Api Services/serverUrl";

const FooterManagement = () => {
    const [fileNameImage, setFileNameImage] = useState("Upload Image");
    const [fileNameVideo1, setFileNameVideo1] = useState("Upload Video");
    const [fileNameVideo2, setFileNameVideo2] = useState("Upload Video");
    const [fileNameVideo3, setFileNameVideo3] = useState("Upload Video");
    const [allFooterData, setAllFooterData] = useState([]);
    const [videoEditMode1, setVideoEditMode1] = useState(false);
    const [videoEditMode2, setVideoEditMode2] = useState(false);
    const [videoEditMode3, setVideoEditMode3] = useState(false);
    const [videoHeadingEditMode, setVideoHeadingEditMode] = useState(false);
    const [imageEditMode, setImageEditMode] = useState(false);
    const [imageHeadingEditMode, setImageHeadingEditMode] = useState(false);
    const [footerVideoDetails, setFooterVideoDetails] = useState({
        // videofile1: null,
        // videofile2: null,
        // videofile3: null,
        // videourl1: "",
        // videourl2: "",
        // videourl3: "",
        // videoheading: "",
        // imageheading: "",
        // imagefile: null,
    });
    const adminToken = localStorage.getItem("adminToken");

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

    const getAllFooterDatas = async () => {
        try {
            const response = await baseURL.get("/api/footer/getfooterdetails", {
                headers: { Authorization: `Bearer ${adminToken}` },
            });
            if (response.data && response.data.length > 0) {
                setAllFooterData(response.data[0]);
            }
        } catch (error) {
            console.error("Error fetching footer data:", error);
        }
    };

    useEffect(() => {
        if (allFooterData && Object.keys(allFooterData).length > 0) {
            setFooterVideoDetails(allFooterData);
        }
    }, [allFooterData]);
    
    // console.log(footerVideoDetails);

    const editFooterDetails = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("videofile1", footerVideoDetails.videofile1);
            formData.append("videourl1", footerVideoDetails.videourl1);
            formData.append("videofile2", footerVideoDetails.videofile2);
            formData.append("videourl2", footerVideoDetails.videourl2);
            formData.append("videofile3", footerVideoDetails.videofile3);
            formData.append("videourl3", footerVideoDetails.videourl3);
            formData.append("videoheading", footerVideoDetails.videoheading);
            formData.append("imagefile", footerVideoDetails.imagefile);
            formData.append("imageheading", footerVideoDetails.imageheading);

            const response = await baseURL.patch(`/api/footer/updatefooterdetails`, formData, {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                getAllFooterDatas();
                alert("Footer details updated successfully!");
                setVideoEditMode1(false);
                setVideoEditMode2(false);
                setVideoEditMode3(false);
                // setIsEditMode(false);
                // setFileName("Upload Image");
            }
        } catch (error) {
            console.error("Error in updating footer details:", error);
            // setFileName("Upload Image");
            if (error.response && error.response.data) {
                alert(`Error: ${error.response.data.message || "An error occurred"}`);
            } else {
                alert("An error occurred while updating footer details.");
            }
        }
    };
 const cancelUpdate = async (e) => {
        e.preventDefault();
        setVideoEditMode1(false);
        setVideoEditMode2(false);
        setVideoEditMode3(false);
        setVideoHeadingEditMode(false);
        setFooterVideoDetails(allFooterData);
    };
    const video1Change= async()=>{
        //     const file1 = e.target.files[0];
        //     if (file1) {
        //         if (["image/png", "image/jpg", "image/jpeg"].includes(file1.type)) {
        //             setFooterVideoDetails({ ...footerVideoDetails, videofile1: file1 });
        //             // setFileName(file.name);
        //         } else {
        //             alert("Please upload a file in JPG, JPEG, or PNG format.");
        //             setFooterVideoDetails({ ...footerVideoDetails, videofile1: null });
        //             // setFileName("Upload Image");
        //         }
        // };
    }
   
    // const editBannerDetails = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const formData = new FormData();
    //         formData.append("imagefile", footerVideoDetails.imagefile);
    //         formData.append("imageheading", footerVideoDetails.imageheading);

    //         const response = await baseURL.patch(`/api/footer/updatefooterdetails`, formData, {
    //             headers: {
    //                 Authorization: `Bearer ${adminToken}`,
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });

    //         if (response.status === 200) {
    //             getAllFooterDatas();
    //             alert("Banner details updated successfully!");
    //             setVideoEditMode1(false);
    //             setVideoEditMode2(false);
    //             setVideoEditMode3(false);
    //         }
    //     } catch (error) {
    //         console.error("Error in updating footer details:", error);
    //         // setFileName("Upload Image");
    //         if (error.response && error.response.data) {
    //             alert(`Error: ${error.response.data.message || "An error occurred"}`);
    //         } else {
    //             alert("An error occurred while updating footer details.");
    //         }
    //     }
    // };

    return (
        <div className="bg-white w-[calc(100vw-300px)]">
            <div className="py-[40px] px-[30px] grid gap-[40px] w-full">
                <div className="text-[24px] font-bold mb-4">Footer Management</div>
                <div className="bg-white partnerContainer border rounded-lg grid p-[30px] gap-[30px]">
                    <form className="grid gap-[30px] py-[20px]">
                        <div className=" grid gap-[10px]">
                            <label className="block text-[14px] font-semibold">Heading</label>
                            <div className="flex items-center gap-[20px]">
                                <input
                                    type="text"
                                    readOnly={!videoHeadingEditMode}
                                    value={footerVideoDetails.videoheading}
                                    onChange={(e) =>
                                        setFooterVideoDetails({ ...footerVideoDetails, videoheading: e.target.value })
                                    }
                                    className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#FF9D00] p-[10px] rounded-[8px]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        videoHeadingEditMode
                                            ? setVideoHeadingEditMode(false)
                                            : setVideoHeadingEditMode(true);
                                    }}
                                >
                                    <img src={editImg} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="grid py-[20px] gap-[30px] ">
                            <div className="flex  gap-[40px] items-center w-100">
                                <form className="flex justify-between gap-[30px] w-100 items-center">
                                    <div className="videoBtn min-w-[110px] text-center">Video 1</div>
                                    <input
                                        readOnly={!videoEditMode1}
                                        className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
                                        type="text"
                                        placeholder="Video Link"
                                        value={footerVideoDetails.videourl1}
                                        onChange={(e) =>
                                            setFooterVideoDetails({ ...footerVideoDetails, videourl1: e.target.value })
                                        }
                                    />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput1"
                                            className="hidden"
                                            onChange={video1Change}
                                            disabled={!videoEditMode1}
                                        />
                                        <label
                                            htmlFor="fileInput1"
                                            className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {/* {fileName1 ? (
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
                                                <> */}
                                            <div>{fileNameVideo1}</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                            {/* </>
                                            )} */}
                                        </label>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            videoEditMode1 ? setVideoEditMode1(false) : setVideoEditMode1(true);
                                        }}
                                        className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
                                    >
                                        <img src={editImg} alt="" />
                                    </button>
                                </form>
                            </div>
                            <div className="flex gap-[40px] items-center w-100">
                                <form className="flex justify-between gap-[30px] w-100 items-center">
                                    <div className="videoBtn min-w-[110px] text-center">Video 2</div>
                                    <input
                                        readOnly={!videoEditMode2}
                                        className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
                                        type="text"
                                        placeholder="Video Link"
                                        value={footerVideoDetails.videourl2}
                                        onChange={(e) =>
                                            setFooterVideoDetails({ ...footerVideoDetails, videourl2: e.target.value })
                                        }
                                    />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput2"
                                            className="hidden"
                                            onChange={handleFileChange2}
                                            disabled={!videoEditMode2}
                                        />
                                        <label
                                            htmlFor="fileInput2"
                                            className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {/* {fileName2 ? (
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
                                                <> */}
                                            <div>{fileNameVideo2}</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                            {/* </>
                                            )} */}
                                        </label>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            videoEditMode2 ? setVideoEditMode2(false) : setVideoEditMode2(true);
                                        }}
                                        className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
                                    >
                                        <img src={editImg} alt="" />
                                    </button>
                                </form>
                            </div>
                            <div className="flex gap-[40px] items-center w-100">
                                <form className="flex justify-between gap-[30px] w-100 items-center">
                                    <div className="videoBtn min-w-[110px] text-center">Video 3</div>
                                    <input
                                        readOnly={!videoEditMode3}
                                        className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
                                        type="text"
                                        placeholder="Video Link"
                                        value={footerVideoDetails.videourl3}
                                        onChange={(e) =>
                                            setFooterVideoDetails({ ...footerVideoDetails, videourl3: e.target.value })
                                        }
                                    />
                                    <div className="relative me-10">
                                        <input
                                            type="file"
                                            id="fileInput3"
                                            className="hidden"
                                            onChange={handleFileChange3}
                                            disabled={!videoEditMode3}
                                        />
                                        <label
                                            htmlFor="fileInput3"
                                            className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                        >
                                            {/* {fileName3 ? (
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
                                                <> */}
                                            <div>{fileNameVideo3}</div>
                                            <img src={uploadImg} alt="Upload Icon" />
                                            {/* </>
                                            )} */}
                                        </label>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            videoEditMode3 ? setVideoEditMode3(false) : setVideoEditMode3(true);
                                        }}
                                        className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
                                    >
                                        <img src={editImg} alt="" />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className=" flex justify-center gap-[30px]">
                            <button
                                className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                                onClick={editFooterDetails}
                            >
                                Submit
                            </button>
                            <button
                                onClick={cancelUpdate}
                                className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center justify-around gap-[60px]">
                        <a
                            target="_blank"
                            href={`${allFooterData.videourl1}`}
                            className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none"
                        >
                            <video
                                muted
                                autoPlay
                                loop
                                className=" rounded-[10px] "
                                src={`${SERVER_URL}${allFooterData.videofile1}`}
                            ></video>
                        </a>
                        <a
                            target="_blank"
                            href={`${allFooterData.videourl2}`}
                            className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none"
                        >
                            <video
                                muted
                                autoPlay
                                loop
                                className=" rounded-[10px] "
                                src={`${SERVER_URL}${allFooterData.videofile2}`}
                            ></video>
                        </a>
                        <a
                            target="_blank"
                            href={`${allFooterData.videourl3}`}
                            className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none"
                        >
                            <video
                                muted
                                autoPlay
                                loop
                                className=" rounded-[10px] "
                                src={`${SERVER_URL}${allFooterData.videofile3}`}
                            ></video>
                        </a>
                    </div>
                </div>
                <div className="bg-white partnerContainer  border rounded-lg grid p-[30px] gap-[30px]">
                    <form className="grid gap-[30px]">
                        <div className=" grid gap-[10px]">
                            <label className="block text-[14px] font-semibold">Banner Heading</label>
                            <div className="flex items-center gap-[20px]">
                                <input
                                    readOnly={!imageHeadingEditMode}
                                    type="text"
                                    defaultValue="Want to Learn More"
                                    className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
                                    value={footerVideoDetails.imageheading}
                                        onChange={(e) =>
                                            setFooterVideoDetails({ ...footerVideoDetails, imageheading: e.target.value })
                                        }
                                />
                                <button
                                    type="submit"
                                    className="bg-[#FF9D00] p-[10px] rounded-[8px]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        imageHeadingEditMode
                                            ? setImageHeadingEditMode(false)
                                            : setImageHeadingEditMode(true);
                                    }}
                                >
                                    <img src={editImg} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-[30px] items-center justify-start">
                            <div className="relative w-[250px] ">
                                <input
                                    type="file"
                                    id="fileInput"
                                    className="hidden"
                                    onChange={handleFileChange}
                                    disabled={!imageEditMode}
                                />
                                <label
                                    htmlFor="fileInput"
                                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
                                >
                                    {/* {fileName ? (
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
                                        <> */}
                                    <div>{fileNameImage}</div>
                                    <img src={uploadImg} alt="Upload Icon" />
                                    {/* </>
                                    )} */}
                                </label>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-[#FF9D00] p-[10px] rounded-[8px]"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        imageEditMode ? setImageEditMode(false) : setImageEditMode(true);
                                    }}
                                >
                                    <img src={editImg} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className=" flex justify-center gap-[30px]">
                            <button
                                className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                                // onClick={}
                            >
                                Submit
                            </button>
                            <button
                                onClick={cancelUpdate}
                                type="button"
                                className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                    <div>
                        <img
                            className="w-100 rounded-[20px] footerBanner"
                            src={`${SERVER_URL}${allFooterData.imagefile}`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterManagement;














































// import React, { useEffect, useState } from "react";
// import editImg from "../../images/editbtn.svg";
// import uploadImg from "../../images/uploadimg.svg";
// import baseURL from "../../Api Services/baseURL";
// import { SERVER_URL } from "../../Api Services/serverUrl";

// const FooterManagement = () => {
//     const [fileNameImage, setFileNameImage] = useState("Upload Image");
//     const [fileNameVideo1, setFileNameVideo1] = useState("Upload Video");
//     const [fileNameVideo2, setFileNameVideo2] = useState("Upload Video");
//     const [fileNameVideo3, setFileNameVideo3] = useState("Upload Video");
//     const [allFooterData, setAllFooterData] = useState([]);
//     const [videoEditMode1, setVideoEditMode1] = useState(false);
//     const [videoEditMode2, setVideoEditMode2] = useState(false);
//     const [videoEditMode3, setVideoEditMode3] = useState(false);
//     const [footerVideoDetails, setFooterVideoDetails] = useState({
//         // videofile1: null,
//         // videofile2: null,
//         // videofile3: null,
//         // videourl1: "",
//         // videourl2: "",
//         // videourl3: "",
//         // videoheading: "",
//         // imageheading: "",
//         // imagefile: null,
//     });
//     const adminToken = localStorage.getItem("adminToken");

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             setFileName(file.name);
//         }
//     };

//     const handleRemoveFile = () => {
//         setFileName(null);
//         document.getElementById("fileInput").value = "";
//     };
//     const [fileName1, setFileName1] = useState("");
//     const [fileName2, setFileName2] = useState("");
//     const [fileName3, setFileName3] = useState("");

//     const handleFileChange1 = (event) => {
//         const file1 = event.target.files[0];
//         if (file1) {
//             setFileName1(file1.name);
//         }
//     };
//     const handleRemoveFile1 = () => {
//         setFileName1(null);
//         document.getElementById("fileInput1").value = "";
//     };

//     const handleFileChange2 = (event) => {
//         const file2 = event.target.files[0];
//         if (file2) {
//             setFileName2(file2.name);
//         }
//     };
//     const handleRemoveFile2 = () => {
//         setFileName2(null);
//         document.getElementById("fileInput2").value = "";
//     };

//     const handleFileChange3 = (event) => {
//         const file3 = event.target.files[0];
//         if (file3) {
//             setFileName3(file3.name);
//         }
//     };
//     const handleRemoveFile3 = () => {
//         setFileName3(null);
//         document.getElementById("fileInput3").value = "";
//     };

//     const getAllFooterDatas = async () => {
//         try {
//             const response = await baseURL.get("/api/footer/getfooterdetails", {
//                 headers: { Authorization: `Bearer ${adminToken}` },
//             });
//             if (response.data && response.data.length > 0) {
//                 setFooterVideoDetails(response.data[0]);
//             }
//         } catch (error) {
//             console.error("Error fetching footer data:", error);
//         }
//     };

//     useEffect(() => {
//         getAllFooterDatas();
//     }, []);
// console.log(footerVideoDetails);

//     const editFooterDetails = async (e) => {
//         e.preventDefault();
//         // if (!footerVideoDetails.companylogo || !footerVideoDetails.description || !footerVideoDetails.companyname) {
//         //     alert("Please fill empty Fields");
//         //     return;
//         // }

//         try {
//             const formData = new FormData();
//             formData.append("videofile1", footerVideoDetails.videofile1);
//             formData.append("videourl1", footerVideoDetails.videourl1);
//             formData.append("videofile2", footerVideoDetails.videofile2);
//             formData.append("videourl2", footerVideoDetails.videourl2);
//             formData.append("videofile3", footerVideoDetails.videofile3);
//             formData.append("videourl3", footerVideoDetails.videourl3);
//             formData.append("videoheading", footerVideoDetails.videoheading);
//             formData.append("imagefile", footerVideoDetails.imagefile);
//             formData.append("imagefile", footerVideoDetails.imagefile);

//             const response = await baseURL.patch(`/api/footer/updatefooterdetails`, formData, {
//                 headers: {
//                     Authorization: `Bearer ${adminToken}`,
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             if (response.status === 200) {
//                 getAllFooterDatas();
//                 alert("Footer Details updated successfully!");
//                 setVideoEditMode1(false);
//                 setVideoEditMode2(false);
//                 setVideoEditMode3(false);
//                 // setIsEditMode(false);
//                 // setFileName("Upload Image");
//             }
//         } catch (error) {
//             console.error("Error in updating footer details:", error);
//             // setFileName("Upload Image");
//             if (error.response && error.response.data) {
//                 alert(`Error: ${error.response.data.message || "An error occurred"}`);
//             } else {
//                 alert("An error occurred while updating footer details.");
//             }
//         }
//     };
//     return (
//         <div className="bg-white w-[calc(100vw-300px)]">
//             <div className="py-[40px] px-[30px] grid gap-[40px] w-full">
//                 <div className="text-[24px] font-bold mb-4">Footer Management</div>
//                 <div className="bg-white partnerContainer border rounded-lg grid p-[30px] gap-[30px]">
//                     <div className="grid gap-[30px] py-[20px]">
//                         <div className=" grid gap-[10px]">
//                             <label className="block text-[14px] font-semibold">Heading</label>
//                             <div className="flex items-center gap-[20px]">
//                                 <input
//                                     type="text"
//                                     defaultValue="Discover Winning Business Strategies"
//                                     className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
//                                 />
//                                 <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
//                                     <img src={editImg} alt="" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="grid py-[20px] gap-[30px] ">
//                             <div className="flex  gap-[40px] items-center w-100">
//                                 <form className="flex justify-between gap-[30px] w-100 items-center">
//                                     <div className="videoBtn min-w-[110px] text-center">Video 1</div>
//                                     <input
//                                     readOnly={!videoEditMode1}
//                                         className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
//                                         type="text"
//                                         placeholder="Video Link"
//                                         value={footerVideoDetails.videourl1}
//                                         onChange={(e) =>
//                                             setFooterVideoDetails({ ...footerVideoDetails, videourl1: e.target.value })
//                                         }
//                                     />
//                                     <div className="relative me-10">
//                                         <input
//                                             type="file"
//                                             id="fileInput1"
//                                             className="hidden"
//                                             onChange={handleFileChange1}
//                                             disabled={!videoEditMode1}
//                                         />
//                                         <label
//                                             htmlFor="fileInput1"
//                                             className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
//                                         >
//                                             {/* {fileName1 ? (
//                                                 <>
//                                                     <span>
//                                                         {fileName1.length > 15
//                                                             ? `${fileName1.substring(0, 15)}...`
//                                                             : fileName1}
//                                                     </span>
//                                                     <button
//                                                         onClick={handleRemoveFile1}
//                                                         className="ml-2 text-red-500 hover:text-red-700"
//                                                     >
//                                                         ✕
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <> */}
//                                                     <div>{fileNameVideo1}</div>
//                                                     <img src={uploadImg} alt="Upload Icon" />
//                                                 {/* </>
//                                             )} */}
//                                         </label>
//                                     </div>
//                                     <button
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             videoEditMode1?setVideoEditMode1(false):setVideoEditMode1(true)
//                                         }}
//                                         className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
//                                     >
//                                         <img src={editImg} alt="" />
//                                     </button>
//                                 </form>
//                             </div>
//                             <div className="flex gap-[40px] items-center w-100">
//                                 <form className="flex justify-between gap-[30px] w-100 items-center">
//                                     <div className="videoBtn min-w-[110px] text-center">Video 2</div>
//                                     <input
//                                     readOnly={!videoEditMode2}
//                                     className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
//                                         type="text"
//                                         placeholder="Video Link"
//                                         value={footerVideoDetails.videourl2}
//                                         onChange={(e) =>
//                                             setFooterVideoDetails({ ...footerVideoDetails, videourl2: e.target.value })
//                                         }
//                                     />
//                                     <div className="relative me-10">
//                                         <input
//                                             type="file"
//                                             id="fileInput2"
//                                             className="hidden"
//                                             onChange={handleFileChange2}
//                                             disabled={!videoEditMode2}
//                                         />
//                                         <label
//                                             htmlFor="fileInput2"
//                                             className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
//                                         >
//                                             {/* {fileName2 ? (
//                                                 <>
//                                                     <span>
//                                                         {fileName2.length > 15
//                                                             ? `${fileName2.substring(0, 15)}...`
//                                                             : fileName2}
//                                                     </span>
//                                                     <button
//                                                         onClick={handleRemoveFile2}
//                                                         className="ml-2 text-red-500 hover:text-red-700"
//                                                     >
//                                                         ✕
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <> */}
//                                                     <div>{fileNameVideo2}</div>
//                                                     <img src={uploadImg} alt="Upload Icon" />
//                                                 {/* </>
//                                             )} */}
//                                         </label>
//                                     </div>
//                                     <button
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             videoEditMode2?setVideoEditMode2(false):setVideoEditMode2(true)
//                                         }}
//                                         className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
//                                     >
//                                         <img src={editImg} alt="" />
//                                     </button>
//                                 </form>
//                             </div>
//                             <div className="flex gap-[40px] items-center w-100">
//                                 <form className="flex justify-between gap-[30px] w-100 items-center">
//                                     <div className="videoBtn min-w-[110px] text-center">Video 3</div>
//                                     <input
//                                     readOnly={!videoEditMode3}
//                                         className="px-[20px] py-[15px] footerBanner outline-none rounded-[10px] w-100 border"
//                                         type="text"
//                                         placeholder="Video Link"
//                                         value={footerVideoDetails.videourl3}
//                                         onChange={(e) =>
//                                             setFooterVideoDetails({ ...footerVideoDetails, videourl3: e.target.value })
//                                         }
//                                     />
//                                     <div className="relative me-10">
//                                         <input
//                                             type="file"
//                                             id="fileInput3"
//                                             className="hidden"
//                                             onChange={handleFileChange3}
//                                             disabled={!videoEditMode3}
//                                         />
//                                         <label
//                                             htmlFor="fileInput3"
//                                             className="uploadBtn flex items-center justify-center min-w-[200px] gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
//                                         >
//                                             {/* {fileName3 ? (
//                                                 <>
//                                                     <span>
//                                                         {fileName3.length > 15
//                                                             ? `${fileName3.substring(0, 15)}...`
//                                                             : fileName3}
//                                                     </span>
//                                                     <button
//                                                         onClick={handleRemoveFile3}
//                                                         className="ml-2 text-red-500 hover:text-red-700"
//                                                     >
//                                                         ✕
//                                                     </button>
//                                                 </>
//                                             ) : (
//                                                 <> */}
//                                                     <div>{fileNameVideo3}</div>
//                                                     <img src={uploadImg} alt="Upload Icon" />
//                                                 {/* </>
//                                             )} */}
//                                         </label>
//                                     </div>
//                                     <button
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             videoEditMode3?setVideoEditMode3(false):setVideoEditMode3(true)
                                            
//                                         }}
//                                         className="bg-[#FF9D00] min-h-[44px] min-w-[44px] p-[10px] rounded-[8px]"
//                                     >
//                                         <img src={editImg} alt="" />
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className=" flex justify-center gap-[30px]">
//                             <button
//                                 className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
//                                 onClick={editFooterDetails}
//                             >
//                                 Submit
//                             </button>
//                             <button
//                                 type="button"
//                                 className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-around gap-[60px]">
//                         <a target="_blank" href={`${allFooterData.videourl1}`} className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none">
//                             <video
//                                 muted
//                                 autoPlay
//                                 loop
//                                 className=" rounded-[10px] "
//                                 src={`${SERVER_URL}${allFooterData.videofile1}`}
//                             ></video>
//                         </a>
//                         <a target="_blank" href={`${allFooterData.videourl2}`} className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none">
//                             <video
//                                 muted
//                                 autoPlay
//                                 loop
//                                 className=" rounded-[10px] "
//                                 src={`${SERVER_URL}${allFooterData.videofile2}`}
//                             ></video>
//                         </a>
//                         <a target="_blank" href={`${allFooterData.videourl3}`} className="aspect-[9/16] cursor-pointer max-h-[500px] text-decoration-none">
//                             <video
//                                 muted
//                                 autoPlay
//                                 loop
//                                 className=" rounded-[10px] "
//                                 src={`${SERVER_URL}${allFooterData.videofile3}`}
//                             ></video>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="bg-white partnerContainer  border rounded-lg grid p-[30px] gap-[30px]">
//                     <form className="grid gap-[30px]">
//                         <div className=" grid gap-[10px]">
//                             <label className="block text-[14px] font-semibold">Banner Heading</label>
//                             <div className="flex items-center gap-[20px]">
//                                 <input
//                                     type="text"
//                                     defaultValue="Want to Learn More"
//                                     className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-semibold"
//                                 />
//                                 <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
//                                     <img src={editImg} alt="" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="flex gap-[30px] items-center justify-start">
//                             <div className="relative w-[250px] ">
//                                 <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
//                                 <label
//                                     htmlFor="fileInput"
//                                     className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] text-[#FF9D00] cursor-pointer"
//                                 >
//                                     {/* {fileName ? (
//                                         <>
//                                             <span>
//                                                 {fileName.length > 15 ? `${fileName.substring(0, 15)}...` : fileName}
//                                             </span>
//                                             <button
//                                                 onClick={handleRemoveFile}
//                                                 className="ml-2 text-red-500 hover:text-red-700"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </>
//                                     ) : (
//                                         <> */}
//                                             <div>{fileNameImage}</div>
//                                             <img src={uploadImg} alt="Upload Icon" />
//                                         {/* </>
//                                     )} */}
//                                 </label>
//                             </div>
//                             <div>
//                                 <button type="submit" className="bg-[#FF9D00] p-[10px] rounded-[8px]">
//                                     <img src={editImg} alt="" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className=" flex justify-center gap-[30px]">
//                             <button
//                                 type="submit"
//                                 className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
//                             >
//                                 Submit
//                             </button>
//                             <button
//                                 type="button"
//                                 className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                     <div>
//                         <img
//                             className="w-100 rounded-[20px] footerBanner"
//                             src={`${SERVER_URL}${allFooterData.imagefile}`}
//                             alt=""
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FooterManagement;
