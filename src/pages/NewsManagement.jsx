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
          className={`px-[30px] py-[10px] rounded-[10px] font-bold ${
            activeTab === 'add'
              ? 'newsBtnActive'
              : 'newsBtnInactive'
          }`}
          onClick={() => handleTabChange('add')}
        >
          Add News
        </button>
        <button
          className={`px-[30px] py-[10px] rounded-[10px] font-bold ${
            activeTab === 'edit'
              ? 'newsBtnActive'
              : 'newsBtnInactive'
          }`}
          onClick={() => handleTabChange('edit')}
        >
          Edit News
        </button>
      </div>
      {activeTab === 'add' && <AddNews />}
      {activeTab === 'edit' && <EditNews />}
                    </div>
                </div> <section className="grid grid-cols-3 justify-between gap-[20px] w-full">
                    {Array.from({ length: 6 }, (_, index) => (
                      <div className="grid gap-[10px] mx-auto">
                        <div className="text-[18px font-bold max-w-[300px]">News {index+1}</div>
                        <div key={index} className="p-[20px] grid gap-[16px] max-w-[300px] aspect-[28/30] mx-auto  bg-black text-white rounded-[6px] ">
                            <img src={logoImg} alt="News Logo" className=" mx-auto h-[60px]" />
                            <div className="text-[20px] text-[#FF9D00] font-bold">We See The Challenge</div>
                            <div className="text-[16px]">
                                We’re all wrestling with complexity. Every company, work function, and team now faces a tall
                                order.
                            </div>
                        </div>
                        </div>
                    ))}
                </section>
            </div>
                {/* news */}
               
        </div>
    );
};

export default NewsManagement;
