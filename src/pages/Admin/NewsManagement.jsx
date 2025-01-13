import React, { useEffect, useState } from "react";
import editImg from "../../images/editbtn.svg";
import deleteImg from "../../images/deleteimg.svg";
import logoImg from "../../images/trackpi_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import EditNews from "../../components/EditNews";
import AddNews from "../../components/AddNews";
import DeletePopUp from "../../components/Admin/DeletePopUp";

const NewsManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get("tab") || "add";

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [newDatas, setNewDatas] = useState("");
    const mockData = [
        {
            id: 1,
            img: logoImg,
            title: "We See The Challenge",
            description:
                "We’re all wrestling with complexity. Every company, work function, and team now faces a tall order.",
        },
        {
            id: 2,
            img: logoImg,
            title: "Innovate for Growth",
            description:
                "In a rapidly changing world, innovation is key. We help businesses unlock new growth opportunities.",
        },
        {
            id: 3,
            img: logoImg,
            title: "Achieving Excellence Together",
            description: "Collaborating together to achieve excellence, one project at a time.",
        },
        {
            id: 4,
            img: logoImg,
            title: "Future-Ready Solutions",
            description: "Future-proof your business with solutions that keep you ahead of the curve.",
        },
        {
            id: 5,
            img: logoImg,
            title: "Sustainability in Action",
            description: "Driving sustainable change that benefits both business and the environment.",
        },
        {
            id: 6,
            img: logoImg,
            title: "Transforming Ideas into Reality",
            description: "Bringing ideas to life with actionable strategies and creative solutions.",
        },
    ];

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

    const backToAddTab = () => {
        navigate(`?tab=add`);
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
                                {activeTab === "add" ? "Add News" : activeTab === "edit" ? "Edit News" : null}
                            </button>
                        </div>
                        <div id="editNewsContent">
                            {activeTab === "add" ? (
                                <AddNews newsData={mockData} />
                            ) : activeTab === "edit" ? (
                                <EditNews editOnclickForBack={backToAddTab} newsData={newDatas} />
                            ) : null}
                            {/* {activeTab === 'add' && }
      {activeTab === 'edit' && } */}
                        </div>
                    </div>
                </div>{" "}
                <section className="grid grid-cols-3 justify-between gap-[20px] w-full">
                    {mockData.map((news, index) => (
                        <div className="grid gap-[10px] mx-auto" key={index}>
                            <div className="text-[18px] font-bold max-w-[300px]">News {news.id}</div>
                            <div className="relative p-[20px] grid gap-[16px] w-[300px] aspect-[28/30] mx-auto  bg-black text-white rounded-[6px] ">
                                <div className="absolute w-[300px] aspect-[28/30]  rounded-[6px]   opacity-[0] hover:opacity-[1] transition-opacity duration-300 cursor-pointer flex justify-between items-end">
                                    <div
                                        onClick={() => editNewsFile({ news }, "edit")}
                                        className=" bg-[#FF9D00] w-[60px] h-[56px] rounded-bl-[6px]  rounded-tr-[100px] "
                                    >
                                        <img
                                            className="h-[24px] w-[24px] relative top-[18px] left-[14px] "
                                            src={editImg}
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        onClick={() => {
                                            setIsModalOpen(true);
                                            setDataDeleted(`News ${news.id}`);
                                        }}
                                        className="bg-[#FF9D00] w-[60px] h-[56px] rounded-br-[6px] rounded-tl-[100px] "
                                    >
                                        <img
                                            className="h-[24px] w-[24px] relative top-[18px] left-[21px] "
                                            src={deleteImg}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <img src={news.img} alt="News Logo" className=" mx-auto h-[60px]" />
                                <div className="text-[20px] text-[#FF9D00] font-bold">{news.title}</div>
                                <div className="text-[16px] text-justify">{news.description}</div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            {isModalOpen && <DeletePopUp onClose={() => setIsModalOpen(false)} dataDeleted={dataDeleted} datas={"News"}/>}
        </div>
    );
};

export default NewsManagement;
