import React, { useEffect, useState } from "react";
import uploadImg from "../images/uploadimg.svg";
import baseURL from "../Api Services/baseURL";

function AddNews({newsData }) {
    // const [fileName, setFileName] = useState("");
    // state to load datas on input
    const[newsDatas,setNewsDatas]=useState({
        newsLink:"",newsFile:""
      })

    // // Handle file selection
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setFileName(file.name);
    //     }
    // };

        // // // // // // // Backend datas

        const adminToken = localStorage.getItem("adminToken");
    // Handle file removal
    // const handleRemoveFile = () => {
    //     setFileName(null);
    //     document.getElementById("fileInput").value = ""; // Reset the input value
    // };
    // console.log(newsDatas);

    useEffect(()=>{
        if (newsDatas.newsFile.type=="image/png"||newsDatas.newsFile.type=="image/jpg"||newsDatas.newsFile.type=="image/jpeg") {
        //   console.log("generte url");
        } else {
          console.log("Please upload jpeg/jpg/png image format....");
          setNewsDatas({...newsDatas,newsFile:""})
        }
      },[newsDatas.newsFile])
    
      const addNewNewsData = async () => {
        if (!newsDatas.newsLink || !newsDatas.newsFile) {
          alert('All fields are required!');
          return;
        }
      
        try {
          const formData = new FormData();
          formData.append('newsLink', newsDatas.newsLink);
          formData.append('newsFile', newsDatas.newsFile);
      
          const response = await baseURL.post('/api/news/news', formData, {
            headers: {
              Authorization: `Bearer ${adminToken}`,
              'Content-Type': 'multipart/form-data', // Important for file uploads
            },
          });
      
        //   console.log('addresponse: ', response.data);
      
          if (response.status === 201) {
            // Clear input fields after successful submission
            setNewsDatas({
              newsFile: '',
              newsLink: '',
            });
          }
        } catch (error) {
          console.error('Error adding news:', error);
      
          // Display error message from API response
          if (error.response && error.response.data) {
            alert(`Error: ${error.response.data.message || 'An error occurred'}`);
          } else {
            alert('An error occurred while adding news data.', err);
          }
        }
      };
      
    return (
        <form className="grid gap-[40px]">
            <div className="flex justify-between items-end w-100">
            <div className="px-[20px] w-[103px] h-[42px] text-[18px] font-bold rounded-[10px] mx-auto newsBtn flex items-center"><span>News {(newsData.length)+1}</span> </div>
                <div className="w-[500px]">
                    <div className="grid gap-[10px]">
                        <label className="block text-[14px] font-semibold">News Link</label>
                        <input
                        onChange={e=>setNewsDatas({...newsDatas,newsLink:e.target.value})}
                            type="text"
                            placeholder="Link"
                            className="border rounded-[10px] px-[20px] py-[10px] text-[14px] partnerInput"
                        />
                    </div>
                </div>

            <div className="relative w-[250px] h-[42px]  mx-auto">
                <input type="file" id="fileInput" className="hidden" onChange={e=>setNewsDatas({...newsDatas,newsFile:e.target.files[0]})} />
                <label
                    htmlFor="fileInput"
                    className="uploadBtn flex items-center justify-center gap-[15px] px-[20px] py-[10px] h-[42px] rounded-[10px] text-[#FF9D00] cursor-pointer"
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
                <button type="submit" className="p-[10px] w-[200px] bg-[#FF9D00] rounded-[10px] font-semibold text-white" onClick={addNewNewsData}>
                    Add
                </button>
                <button type="button" className="p-[10px] w-[200px] text-[#FF9D00] border-[2px] border-[#FF9D00] font-medium rounded-[10px] font-bold">
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default AddNews;
