import React, { useEffect, useState } from "react";
import editImg from "../../images/editbtn.svg";
import deleteImg from "../../images/deleteimg.svg";
import logoImg from "../../images/trackpi_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import EditNews from "../../components/EditNews";
import AddNews from "../../components/AddNews";
import DeletePopUp from "../../components/Admin/DeletePopUp";
import baseURL from "../../Api Services/baseURL";

const NewsManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get("tab") || "add";

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // state to load data from database
    const [allNewsData, setAllNewsData] = useState([]);

    const [newDatas, setNewDatas] = useState("");
    const [idOfCard, setIdOfCard] = useState("");
    const [deleteId, setDeleteId] = useState("");
;

    const [activeTab, setActiveTab] = useState(initialTab);

    const [dataDeleted, setDataDeleted] = useState("");
    // const handleTabChange = (tabName) => {
    //   setActiveTab(tabName);
    //   navigate(`?tab=${tabName}`);
    // };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tabFromUrl = queryParams.get("tab");
        if (tabFromUrl) {
            setActiveTab(tabFromUrl);
        }
    }, [location.search]);

    const editNewsFile = (newsData, tabName, index) => {
        setActiveTab(tabName);
        navigate(`?tab=${tabName}`);
        // Scroll to the section with id "editNewsContent"
        const element = document.getElementById("editNewsContent");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        setNewDatas(newsData.news); 
        setIdOfCard(index);       
    };

    const backToAddTab = () => {
        navigate(`?tab=add`);
    };

    // // // // // // // Backend datas

    const adminToken = localStorage.getItem("adminToken");
    //  get all new data
   
    const deleteANews = async () => {
        try {
            const response = await baseURL.delete(`/api/news/newsdetails/${deleteId}`, {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            });
            // setAllNewsData(response.data);
            getAllNews();
            setIsModalOpen(false)
        } catch (error) {
            console.error("Error fetching admin data:", error);
        }
    };

    useEffect(() => {
        getAllNews();
      }, []);
      
      const getAllNews = async () => {
        try {
            const response = await baseURL.get("/api/news/newsdetails", {
                headers: {
                    Authorization: `Bearer ${adminToken}`,
                },
            });
            if (response.data && response.data.length > 0) {
                setAllNewsData(response.data);
            }
        } catch (error) {
            console.error("Error fetching admin data:", error);
        }
    };
    
      
      // Render news only if data is available
      return (
        <div className="bg-white w-full">
          <div className="py-[40px] px-[30px] grid gap-[30px]">
            <div className="text-[24px] font-bold mb-4">News Management</div>
            <div className="grid gap-[50px]">
              {/* Heading Input and Button */}
              <div className="grid gap-[10px]">
                <label className="block text-[14px] font-semibold">Heading</label>
                <div className="flex items-center gap-[20px]">
                  <input
                    type="text"
                    defaultValue="Real-Time Business News Updates?"
                    className="border partnerInput rounded-lg px-[15px] py-[12px] w-3/5 text-[20px] font-bold"
                  />
                  <button className="bg-[#FF9D00] p-[10px] rounded-[8px]">
                    <img src={editImg} alt="" />
                  </button>
                </div>
              </div>
      
              <div className="grid partnerContainer border rounded-[20px] gap-[40px] p-[30px]">
                <div className="flex justify-center gap-[70px] py-1">
                  <button
                    className={`px-[30px] py-[10px] rounded-[10px] font-bold newsBtnActive`}
                    // onClick={() => handleTabChange('add')}
                  >
                    {activeTab === "add" ? "Add News" : activeTab === "edit" ? "Edit News" : null}
                  </button>
                </div>
                <div id="editNewsContent">
                  {activeTab === "add" ? (
                    <AddNews newsData={allNewsData} />
                  ) : activeTab === "edit" ? (
                    <EditNews editOnclickForBack={backToAddTab} newsData={newDatas} index={idOfCard} />
                  ) : null}
                </div>
              </div>
            </div>
      
            <section className="flex flex-wrap justify-between gap-[30px] w-full">
            {allNewsData.length > 0 ? (
    allNewsData.map((news, index) => (
        <div className="grid gap-[10px] mx-auto" key={index}>
            <div className="text-[18px] font-bold max-w-[300px]">News {index + 1}</div>
            <div className="relative grid gap-[16px] w-[300px] aspect-[28/30] mx-auto bg-black text-white rounded-[6px]">
                <div className="absolute w-[300px] aspect-[28/30] rounded-[6px] opacity-[0] hover:opacity-[1] transition-opacity duration-300 cursor-pointer flex justify-between items-end">
                    <div
                        onClick={() => editNewsFile({ news }, "edit", index)}
                        className="bg-[#FF9D00] w-[60px] h-[56px] rounded-bl-[6px] rounded-tr-[90%]"
                    >
                        <img
                            className="h-[24px] w-[24px] relative top-[18px] left-[14px]"
                            src={editImg}
                            alt=""
                        />
                    </div>
                    <div
                        onClick={() => {
                            setIsModalOpen(true);
                            setDataDeleted(`News ${index+ 1 }`);
                            setDeleteId(news._id);
                        }}
                        className="bg-[#FF9D00] w-[60px] h-[56px] rounded-br-[6px] rounded-tl-[90%]"
                    >
                        <img
                            className="h-[24px] w-[24px] relative top-[18px] left-[21px]"
                            src={deleteImg}
                            alt=""
                        />
                    </div>
                </div>
                <img src={`http://localhost:3001${news.newsFile}`} className="w-100 h-100 rounded-[6px]" alt="" />
            </div>
        </div>
    ))
) : (
    <p>No news available</p>
)}

            </section>
          </div>
      
          {isModalOpen && <DeletePopUp onClose={() => setIsModalOpen(false)} dataDeleted={dataDeleted} datas={"News"} functions={deleteANews} />}
        </div>
      );
      
};

export default NewsManagement;
