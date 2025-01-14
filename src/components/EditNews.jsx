import React, { useEffect, useState } from "react";
import uploadImg from "../images/uploadimg.svg";
import baseURL from "../Api Services/baseURL";

function EditNews({ newsData, editOnclickForBack, index }) {
    const [fileName, setFileName] = useState("");
// 
const adminToken = localStorage.getItem("adminToken");

  const [editNewsData, setEditNewsData] = useState({
    newsFile:"",
    newsLink:""
  });

  useEffect(()=>{
    setEditNewsData({
        newsFile:newsData.newsFile,
    newsLink:newsData.newsLink
    })
  },[newsData])
  
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

    const editNewsDataDetails = async () => {
        if (!editNewsData.newsLink || !editNewsData.newsFile) {
          alert("Both News Link and Image are required!");
          return;
        }
    
        try {
          const formData = new FormData();
          formData.append("newsLink", editNewsData.newsLink);
          formData.append("newsFile", editNewsData.newsFile);
    
          const response = await baseURL.put(`/api/news/news/${newsData._id}`, formData, {
            headers: {
              Authorization: `Bearer ${adminToken}`,
              "Content-Type": "multipart/form-data",
            },
          });
    
          if (response.status === 201) {
            alert("News updated successfully!");
            editOnclickForBack(); // Navigate back after success
          }
        } catch (error) {
          console.error("Error updating news:", error);
          alert("An error occurred while updating news. Please try again.");
        }
      };
    

    return (
        <form className="grid gap-[40px]">
            <div className="flex justify-between items-end">
                <div className="px-[20px] w-[103px] h-[42px] text-[18px] font-bold rounded-[10px] mx-auto newsBtn flex items-center">News {index+1}</div>

                <div className="w-[500px]">
                    <div className="grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">News Link</label>
                        <input
                            type="text"
                            placeholder="Link"
                            value={editNewsData.newsLink}
                            onChange={e=>setEditNewsData({...editNewsData,newsLink:e.target.value})}
                            className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                        />
                    </div>
            </div>

            <div className="relative w-[250px] h-[42px] mx-auto">
                <input type="file" id="fileInput" className="hidden"onChange={e=>setEditNewsData({...editNewsData,newsFile:e.target.files[0]})} />
                <label
                    htmlFor="fileInput"
                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] rounded-[10px] h-[42px] text-[#FF9D00] cursor-pointer"
                >
                    {/* {fileName ? (
                        <>
                            <span>{fileName.length > 15 ? `${fileName.substring(0, 15)}...` : fileName}</span>
                            <button onClick={handleRemoveFile} className="ml-2 text-red-500 hover:text-red-700">
                                ✕
                            </button>
                        </>
                    ) : (
                        <> */}
                            <div>Upload Image</div>
                            <img src={uploadImg} alt="Upload Icon" />
                        {/* </>
                    )} */}
                </label>
            </div>
            </div>
            <div className=" flex justify-center gap-[30px]">
                <button type="submit" className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-bold text-white" onClick={editNewsDataDetails}>
                    Save
                </button>
                <button
                    type="button"
                    className="p-[10px] w-[200px] text-[#FF9D00] border-[2px] border-[#FF9D00] font-medium rounded-[10px] font-bold"
                    onClick={() => editOnclickForBack()}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default EditNews;
