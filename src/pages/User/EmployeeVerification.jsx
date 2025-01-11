import React, { useState, useEffect } from "react";
import { Verify } from "react-puzzle-captcha";
import "react-puzzle-captcha/dist/react-puzzle-captcha.css";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Brochure from "../../components/User/Brochure";
import '../../CSS/employverification.css'

function EmployeeVerification() {
    const [formData, setFormData] = useState({
        employeeId: "",
    });
    const [errors, setErrors] = useState({});
    const [searchResults, setSearchResults] = useState([]);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    // const [captchaMessage, setCaptchaMessage] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();

    // Dummy data (simulate a backend response)
    const dummyData = [
        { employeeId: "EMP001", fullName: "John Doe", department: "HR" },
        { employeeId: "EMP002", fullName: "Jane Smith", department: "IT" },
        { employeeId: "EMP003", fullName: "Alice Johnson", department: "Finance" },
        { employeeId: "EMP004", fullName: "Bob Brown", department: "IT" },
        { employeeId: "EMP005", fullName: "Charlie White", department: "HR" },
    ];

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Validation function
    const validate = () => {
        const { employeeId } = formData;

        if (!employeeId) {
            toast.error("Please fill the Employee ID field."); // Show toast for empty field
            return false;
        }

        if (!/^[a-zA-Z0-9]+$/.test(employeeId)) {
            toast.error("Employee ID must be alphanumeric."); // Show toast for invalid characters
            return false;
        }

        return true;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate input and show relevant toast errors
        if (!validate()) {
            setLoading(false);
            return;
        }

        // Show CAPTCHA modal if not verified
        if (!captchaVerified) {
            setModalShow(true);
            setLoading(false);
            return;
        }

        // Proceed with submission after CAPTCHA
        setTimeout(() => {
            const { employeeId } = formData;
            const filteredResults = dummyData.filter((employee) => employee.employeeId.includes(employeeId));

            if (filteredResults.length === 0) {
                setSearchResults([]);
                toast.info("No matching employee found."); // Show toast for no results
            } else {
                setSearchResults(filteredResults);
                toast.success("Employee found!"); // Show toast for success
            }

            setLoading(false);
            resetForm();
        }, 2000);
    };

    // Handle CAPTCHA success
    const handleCaptchaSuccess = () => {
        setCaptchaVerified(true);
        setModalShow(false); // Close the modal

        // Proceed with form submission after CAPTCHA verification
        if (validate()) {
            const { employeeId } = formData;
            const filteredResults = dummyData.filter((employee) => employee.employeeId.includes(employeeId));

            if (filteredResults.length === 0) {
                setSearchResults([]);
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    toast.info("No matching employee found.");
                }, 2000);
            } else {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    navigate("/personel");
                }, 2000);
            }
            resetForm();
        }
    };

    // Mark the input as touched when the user interacts with it
    const handleTouched = (e) => {
        setIsTouched(true); // Mark the field as touched
        handleChange(e); // Update the form data
    };

    const resetForm = () => {
        setFormData({ employeeId: "" });
        setCaptchaVerified(false);
        // setCaptchaMessage('');
        setIsTouched(false);
    };

    // Show toast notification when there's a general error
    useEffect(() => {
        if (errors.general) {
            toast.info(errors.general);
        }
    }, [errors.general]);

    const clients = [
        {
            id: 1,
            name: "Authenticity",
            description: "Verify the authenticity of employee credentials and background details.",
        },
        {
            id: 2,
            name: "Security",
            description: "Protect your organization from unauthorized individuals.",
        },
        {
            id: 3,
            name: "Efficiency",
            description: "Streamline the hiring and employee verification process.",
        },
    ];

    return (
        <div className="employee_reg_page">
            <section className="bgFour">
       <div className={`headerbuttons flex sm:justify-end  items-center space-x-0 sm:space-x-5 relative px-[15px] sm:px-[22.5px] lg:px-[30px] justify-end `}>
          
          {<Brochure />}
        </div>
  <div className='h-full absolute headerbanner1'>

        <div className="flex justify-center items-center h-100">
          <div
            className={`flex flex-col w-max text-center items-center z-2 headerContent`}
          >
            <h1 className="text-yellow-400 font-bold text-[20px] sm:text-[26px] md:text-[36px] lg:text-[48px] xl:text-[56px] 2xl:text-[62px] headerBannerHeading">
            Employee Verification

            </h1>
            <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[14.4px] sm:leading-[18px] md:leading-[22px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[31.2px] text-white block md:hidden headerBannerPara">
            Verify employee credentials and details securely
            and efficiently.            </p>
            <form className=" w-100 mt-[3vh] lg:mt-[4vh] xl:mt-[5vh] 2xl:mt-[7vh]  hidden md:block">
                        {/* Employee ID */}
                        <div style={{fontWeight:"600", width:"90%"}} className="mb-4 mx-auto lg:text-xl text-lg g-5">
                            <label className="block my-2 text-left text-light" htmlFor="employeeId">
                                Employee ID
                            </label>
                            <input
                                type="text"
                                id="employeeId"
                                aria-label="Enter Your Employee ID"
                                value={formData.employeeId}
                                onChange={handleTouched}
                                placeholder="Enter Your Employee ID"
                                className=" p-3  text-base  rounded-md w-full"
                                style={{border:'2px black solid',outline:"none"}}
                            />
                        </div>

                        {/* Submission Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button when loading
                                className="mt-3 transform hover:scale-105 bg-gradient-to-r from-[#FFC100] to-[#FF9D00]  py-2 px-6 rounded-md font-semibold lg:text-xl text-base text-white"
                            >
                                {loading ? "Verifying..." : "Verify Employee"}
                            </button>
                        </div>
                    </form>

            
           
            
          </div>
        </div>
        </div>
</section>
<div className="p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] xl:p-[65px]">
            {/* Verification Form Section */}
            <section className=" mb-14 w-100 block md:hidden">
                <div style={{maxWidth:'90%'}} className="bg-white shadow-lg mx-auto p-4 rounded-lg ">
                    <div className="font-bold text-[18px] sm:text-[22px] text-amber-400 text-center">Employee Verification</div>
                    <form>
                        <div style={{fontWeight:"600"}} className="mb-4 g-5">
                            <label className="block my-2 text-xs text-dark" htmlFor="employeeId">
                                Employee ID
                            </label>
                            <input
                                type="text"
                                id="employeeId"
                                aria-label="Enter Employee ID"
                                value={formData.employeeId}
                                onChange={handleTouched}
                                className=" p-[.3rem] font-normal  text-[.625rem] rounded-md w-full employInput"
                                placeholder="Enter Employee ID"
                                style={{border:'.32px #0A0A0A80 solid'}}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button when loading
                                className="w-[92.17px] transform hover:scale-105 bg-gradient-to-r from-[#FFC100] to-[#FF9D00]  py-[3.84px] px-[9.58px]  rounded-md font-semibold text-[10px] text-white"
                            >
                                {loading ? "Verifying..." : "Verify Employee"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            {loading && (
                <div className="flex justify-center items-center fixed inset-0 bg-opacity-50 bg-yellow-500 z-50">
                    <div className="spinner"></div> {/* Show the loader spinner */}
                </div>
            )}

           
            <section className="flex flex-col items-center gap-[15px] sm:gap-[20px] md:gap-[25px] lg:gap-[35px] xl:gap-[50px]  2xl:gap-[60px] w-full h-full">
                <div className="flex flex-col items-center gap-[10px] sm:gap-[13px] md:gap-[15px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[25px]">
                    <div className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[50px] 2xl:text-[60px] text-amber-400 fw-bolder text-center ">Why Verify Employees?</div>
                    <div style={{ maxWidth: "1126px" }}className="font-normal md:font-semibold text-black text-[12px] sm:text-[15px] md:text-[18px] lg:text-[21px] xl:text-[24px] 2xl:text-[30px] px-3 justify_para">
                        Ensuring that employee information is accurate helps maintain a trustworthy workplace environment
                        and reduces the risk of fraudulent activities.
                    </div>
                </div>
               <div className=" flex flex-wrap gap-2.5 sm:gap-5 lg:gap-10  justify-center lg:justify-between">
    {clients.map((card) => (
        <div
            key={card.id}
            className=" bg-gradient-to-r from-[#FFD152] via-[#FFC100] to-[#FFD152] sm:w-[calc(50%-20px)] lg:w-[calc(30%)]   text-center rounded md:w-[410px] w-[280px] py-[24px] px-[18px] sm:px-[21px] sm:py-[28px] md:px-[24px] md:py-[32px] lg:px-[27px] lg:py-[36px] xl:px-[30px] xl:py-[40px]  2xl:px-[33px] 2xl:py-[45px] grid lg:gap-[20px] md:gap-[15px] gap-[10px] "
        >
            <h3 className="font-bold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px]">
                {card.name}
            </h3>
            <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] ">
                {card.description}
            </p>
        </div>
    ))}
</div>
 {/* Modal for Captcha  */}
 <Modal size="sm" aria-labelledby="captcha-modal" centered show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header className="text-center">
                    <h5 className="w-100 text-black font-semibold m-0">Are you a robot?</h5>
                </Modal.Header>
                <Modal.Body>
                    <Verify id="captcha" width={250} height={120} onSuccess={handleCaptchaSuccess} />
                </Modal.Body>
            </Modal>

            </section>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EmployeeVerification;