import React, { useEffect, useState } from "react";
import editImg from "../images/editbtn.svg";
import logoImg from "../images/trackpi_logo.png";
import { useNavigate, useLocation } from 'react-router-dom';
import EditNews from "../components/EditNews";
import AddNews from "../components/AddNews";

const NewsManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || 'add';

  const[newDatas,setNewDatas]=useState("")
  const mockData = [
    {
      id: 1,
      img: logoImg,
      title: "Empowering  to Overcome Complexity",
      description: "Every team now faces unique challenges. We empower organizations to navigate complexities effectively."
    },
    {
      id: 2,
      img: logoImg,
      title: "Innovate for Growth",
      description: "In a rapidly changing world, innovation is key. We help businesses unlock new growth opportunities."
    },
    {
      id: 3,
      img: logoImg,
      title: "Achieving Excellence Together",
      description: "Collaborating together to achieve excellence, one project at a time."
    },
    {
      id: 4,
      img: logoImg,
      title: "Future-Ready Solutions",
      description: "Future-proof your business with solutions that keep you ahead of the curve."
    },
    {
      id: 5,
      img: logoImg,
      title: "Sustainability in Action",
      description: "Driving sustainable change that benefits both business and the environment."
    },
    {
      id: 6,
      img: logoImg,
      title: "Transforming Ideas into Reality",
      description: "Bringing ideas to life with actionable strategies and creative solutions."
    }
  ];
  
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    navigate(`?tab=${tabName}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabFromUrl = queryParams.get('tab');
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);
  

  const editNewsFile = (newsData, tabName) => {
    setActiveTab(tabName);
    navigate(`?tab=${tabName}`);
    // Scroll to the section with id "editNewsContent"
    const element = document.getElementById("editNewsContent");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
   setNewDatas(newsData.news);
   
   
  };
  
  
  

    return (
        <div className="bg-white w-full">
            <div className="py-[40px] px-[30px] grid gap-[40px]">
                <div className="text-[24px] font-bold mb-4">News Management</div>
                <div className="grid gap-[50px]">
                    <div className=" grid gap-[10px]">
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
                  {activeTab=== "add" ? "Add News" :activeTab==="edit" ? "Edit News": null}
                  
        </button>
        {activeTab=== "add" ? null: <button
          className={`px-[30px] py-[10px] rounded-[10px] font-bold ${
            activeTab === 'edit'
              ? 'newsBtnInactive'
              : 'display-none'
          }`}
          onClick={() => handleTabChange('add')}
        >
          Add News
        </button>}
      </div>
      <div id="editNewsContent">
        {activeTab=== "add"?<AddNews newsData={mockData}/> :activeTab==="edit"? <EditNews  newsData={newDatas}/>: null}
      {/* {activeTab === 'add' && }
      {activeTab === 'edit' && } */}
      </div>
                    </div>
                </div> <section className="grid grid-cols-3 justify-between gap-[20px] w-full">


                    {mockData.map((news,index)=> (
                      <div className="grid gap-[10px] mx-auto"  key={index}> 
                        <div className="text-[18px] font-bold max-w-[300px]">News {news.id}</div>
                        <div className="relative p-[20px] grid gap-[16px] w-[300px] aspect-[28/30] mx-auto  bg-black text-white rounded-[6px] ">
                        <div className="absolute w-[300px] aspect-[28/30] flex items-center justify-center rounded-[6px] bg-[#FF9D00]  opacity-[0] hover:opacity-[.9] transition-opacity duration-300 cursor-pointer" onClick={() => editNewsFile({ news }, "edit")}> 
                        <div className="flex flex-col items-center">
                        <img className="h-[50px]" src={editImg} alt="" />
                        <div className="font-bold text-[20px]">Edit</div>
                        </div>
                        </div>
                            <img src={news.img} alt="News Logo" className=" mx-auto h-[60px]" />
                            <div className="text-[20px] text-[#FF9D00] font-bold">{news.title}</div>
                            <div className="text-[16px] text-justify">
                                {news.description}
                            </div>
                        </div>
                        </div>
                    ))}
                </section>
            </div>
               
        </div>
    );
};

export default NewsManagement;
