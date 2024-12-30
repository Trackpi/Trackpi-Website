import React from "react";
import MarketPositioning from "./MarketPositioning";
import PopUp from "../components/PopUp";
import ConnectButtons from "../components/ConnectButtons";
import HeaderBanner from "../components/HeaderBanner";
import ServicesSub from "../components/ServicesSub";
import financeImg1 from "../images/fin1.png";
import financeImg2 from "../images/fin2.png";
import assetImg1 from "../images/asset1.png";
import assetImg2 from "../images/asset2.png";
import hiring from "../images/hiring.jpg";
import consult from "../images/consult.jpg";
import strategyImg1 from "../images/trainings.jpg";
import strategyImg2 from "../images/strategy2.png";
import strategyImg3 from "../images/strategy3.png";
import hiringImg1 from "../images/sale.jpg";
import KeyBenefitServices from "../components/KeyBenefitServices";
import '../CSS/ourservices.css'

function OurServices() {
    return (
        <div className="services_main">
            <PopUp />
            <div className="overflow-x-hidden">
                {/* Hero Section */}
                <HeaderBanner
                    title="Working Together"
                    description="We help organizations navigate and thrive in the face of complexity."
                    classname="bgThree"
                />

                {/* Content Sections */}
                <section id="sales-outsourcing" className=" w-full">
                    <ServicesSub
                        heading="Sales Outsourcing"
                        classname="bg_common"
                        title1="End-to-End Sales
Outsourcing Solutions"
                        description1="Our End-to-End Sales Outsourcing Solutions provide a comprehensive approach to managing your entire sales process, from lead generation to closing deals. We offer specialized eams that seamlessly integrate with your business, helping you expand market reach, increase revenue, and reduce operational costs."
                        img1={financeImg1}
                        title2="Sales Performance Enhancement Services"
                        description2="With our Sales Performance Enhancement Services, we empower your business to achieve higher sales productivity and improved bottom-line results. We provide flexible outsourcing models where our experienced sales professionals take on key sales responsibilities, ensuring consistency and performance excellence."
                        img2={financeImg2}
                    />
                </section>
                <section id="hiring" className=" w-full">
                    <ServicesSub
                        heading="Hiring & Retention"
                        title1="Our Hiring Process"
                        description1="We experiment with our own hiring practice to attract and choose people based on demonstrable skills rather than experience, identity, or connections. We want to minimize bias as much as possible, which is why we won’t ask for your resume. Instead, we anonymously review answers to a series of application questions and our interviews are designed as experiential working sessions—rather than performative Q&As—to give insight into what working with The Ready might actually feel like."
                        img1={hiring}
                        title2="Transformer Role"
                        description2="The majority of our members at The Ready are in the Transformer role (what we call our “consultants” here). We regularly open our Transformer hiring process, as our business is growing and expanding."
                        img2={consult}
                    />
                </section>
                <section id="sales-training" className="w-full">
                    <ServicesSub
                        heading="Sales Training Strategies"
                        subHeading="Our sales training strategies are designed to equip your team with the skills and insights they need to succeed in a competitive market. With expert guidance and interactive sessions, we focus on practical solutions and growth-oriented techniques."
                        classname="bg_common"
                        title1="Customized Training"
                        description1="Our customized training programs are tailored to meet the unique challenges and objectives of your business. We work closely with your team to identify skill gaps, improve communication, and build confidence. Through hands-on sessions and real-life scenarios, your team learns practical sales techniques that are immediately applicable. Our goal is to ensure that each training session contributes to measurable improvements in your sales performance."
                        img1={strategyImg1}
                        title2="Expert Guidance"
                        description2="Led by industry professionals with years of experience in sales and management, our training sessions offer insights that go beyond textbooks. We focus on instilling a strategic mindset, teaching negotiation tactics, and sharpening problem-solving skills. With interactive workshops and individual coaching, participants learn from experts who have a proven track record of success. This guidance ensures your team is equipped to handle high-stakes deals with confidence and professionalism."
                        img2={strategyImg2}
                        title3="Measurable Results"
                        description3="Our training is designed with a results-oriented approach, so you can track your team’s progress and see tangible outcomes. We provide tools and techniques that help in measuring success, setting achievable targets, and analyzing performance improvements over time. By focusing on measurable results, we ensure that every participant understands the impact of their growth, enabling your organization to maintain a continuous upward trajectory in sales performance."
                        img3={strategyImg3}
                    />
                </section>
                <section id="operations-training" className="w-full">
                <ServicesSub
                        heading="Operations Training & Strategies" subHeading='Transform your operations with our tailored strategies. Our training programs focus on optimizing processes, enhancing efficiency, and empowering your team to excel in dynamic environments.'
                        classname=""
                        title1="Why Choose Us?"
                        description1="Process Optimization: Streamline operations for maximum efficiency. Leadership Development: Equip leaders with practical tools for success. Change Management: Foster adaptability and resilience in your workforce. Custom Solutions: Tailored training to address your unique challenges."
                        img1={hiringImg1}
                        isPointWise={true}
                    />
                </section>
                <section>
                  <KeyBenefitServices/>
                </section>
                <section id="market-positioning" className=" w-full">
                    <MarketPositioning />
                </section>

                {/* Risk Management*/}
                <section id="risk-management" className="mt-5 w-full">
                    <ServicesSub
                        heading="Risk Management"
                        classname=""
                        title1="Strategic Procurement Solutions"
                        description1="Our Strategic Procurement Solutions focus on optimizing your supply chain and procurement processes to drive cost-efficiency, enhance supplier relationships, and ensure value for money. We assist businesses in sourcing high-quality goods and services through data-driven strategies, market analysis, and vendor management."
                        img1={assetImg1}
                        title2="Comprehensive Risk Management Advisory"
                        description2="At the heart of our Comprehensive Risk Management Advisory, we provide robust strategies to identify, assess, and mitigate risks across your entire organization. From financial, operational, and regulatory risks to supply chain and cybersecurity threats, our experts help safeguard your business by creating proactive risk management frameworks."
                        img2={assetImg2}
                    />
                </section>
                {/* Financial Consulting */}
                <section id="financial-consulting" className="w-full">
                    <ServicesSub
                        heading="Financial Consulting"
                        classname="bg_common"
                        title1="End-to-End Sales Outsourcing Solutions"
                        description1="Our End-to-End Sales Outsourcing Solutions provide a comprehensive approach to managing your entire sales process, from lead generation to closing deals. We offer specialized eams that seamlessly integrate with your business, helping you expand market reach, increase revenue, and reduce operational costs."
                        img1={financeImg1}
                        title2="Sales Performance Enhancement Services"
                        description2="With our Sales Performance Enhancement Services, we empower your business to achieve higher sales productivity and improved bottom-line results. We provide flexible outsourcing models where our experienced sales professionals take on key sales responsibilities, ensuring consistency and performance excellence."
                        img2={financeImg2}
                    />
                </section>
                {/* Asset Management */}
                <section id="asset-management" className="w-full">
                    <ServicesSub
                        heading="Asset Management"
                        classname=""
                        title1="Strategic Procurement Solutions"
                        description1="Our Strategic Procurement Solutions focus on optimizing your supply chain and procurement processes to drive cost-efficiency, enhance supplier relationships, and ensure value for money. We assist businesses in sourcing high-quality goods and services through data-driven strategies, market analysis, and vendor management."
                        img1={assetImg1}
                        title2="Comprehensive Risk Management Advisory"
                        description2="At the heart of our Comprehensive Risk Management Advisory, we provide robust strategies to identify, assess, and mitigate risks across your entire organization. From financial, operational, and regulatory risks to supply chain and cybersecurity threats, our experts help safeguard your business by creating proactive risk management frameworks."
                        img2={assetImg2}
                    />
                </section>
                {/* Asset Management */}
                <section id="it-services" className="my-5 w-full">
                    <ServicesSub
                        heading="IT Services"
                        classname="bg_common"
                        title1="End-to-End Sales
Outsourcing Solutions"
                        description1="Our End-to-End Sales Outsourcing Solutions provide a comprehensive approach to managing your entire sales process, from lead generation to closing deals. We offer specialized eams that seamlessly integrate with your business, helping you expand market reach, increase revenue, and reduce operational costs."
                        img1={financeImg1}
                        title2="Sales Performance Enhancement Services"
                        description2="With our Sales Performance Enhancement Services, we empower your business to achieve higher sales productivity and improved bottom-line results. We provide flexible outsourcing models where our experienced sales professionals take on key sales responsibilities, ensuring consistency and performance excellence."
                        img2={financeImg2}
                    />
                </section>
            </div>
            <ConnectButtons />
        </div>
    );
}

export default OurServices;
