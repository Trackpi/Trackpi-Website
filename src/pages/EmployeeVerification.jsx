import React, { useState, useEffect } from "react";
import { Verify } from "react-puzzle-captcha";
import "react-puzzle-captcha/dist/react-puzzle-captcha.css";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import HeaderBanner from "../components/HeaderBanner";
import Brochure from "../components/Brochure";

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
        <>
            {/* Hero Section */}
            {/* <HeaderBanner
                title="Employee Verification"
                description="Verify employee credentials and details securely and efficiently."
                classname="bgFour"
            /> */}
             <section className={`w-full h-screen home_section relative bgFour`}>
                <div className="headerbuttons flex justify-end items-center space-x-5 relative px-4">
                     <Brochure />
                </div>

                <div className="flex justify-center items-center h-screen ">
                    <div className={`flex flex-col max-w-[846px] text-center items-center z-2 `}>
                        <h1 className="text-yellow-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[62px]">
                        Employee Verification
                        </h1>

                        {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] sm:p-5 text-white text-center">
                        Verify employee credentials and details securely and efficiently.
                        </p> */}
                        
                        <form className="my-10" style={{}}>
                        {/* Employee ID */}
                        <div style={{fontWeight:"600", minWidth:'75vw'}} className="mb-4 fs-3 g-5">
                            <label className="block my-2 text-left text-light" htmlFor="employeeId">
                                Employee ID
                            </label>
                            <input
                                type="text"
                                id="employeeId"
                                aria-label="Enter Employee ID"
                                value={formData.employeeId}
                                onChange={handleTouched}
                                className="border-black p-3 font-normal fs-4  rounded-md w-full"
                                placeholder="Enter Employee ID"
                                style={{border:'1px black solid'}}
                            />
                        </div>

                        {/* Submission Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button when loading
                                className="mt-3 transform hover:scale-105 bg-gradient-to-r from-yellow-300 to-orange-400 p-[12px] px-[30px]  rounded-md font-semibold text-2xl text-black"
                            >
                                {loading ? "Verifying..." : "Verify Employee"}
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </section>

            {/* Verification Form Section */}
            {/* <section className=" py-16 px-3 w-100">
                <div style={{maxWidth:'1100px'}} className="bg-white shadow-lg mx-auto p-8 rounded-lg ">
                    <h2 className="m-6 font-bold text-5xl text-amber-400 text-center">Employee Verification</h2>
                    <form>
                        <div style={{fontWeight:"600"}} className="mb-4 fs-3 g-5">
                            <label className="block my-2 text-dark" htmlFor="employeeId">
                                Employee ID
                            </label>
                            <input
                                type="text"
                                id="employeeId"
                                aria-label="Enter Employee ID"
                                value={formData.employeeId}
                                onChange={handleTouched}
                                className="border-black p-3 font-normal fs-4  rounded-md w-full"
                                placeholder="Enter Employee ID"
                                style={{border:'1px black solid'}}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={loading} // Disable button when loading
                                className="mt-3 transform hover:scale-105 bg-gradient-to-r from-yellow-300 to-orange-400 p-[12px] px-[30px]  rounded-md font-semibold text-2xl text-black"
                            >
                                {loading ? "Verifying..." : "Verify Employee"}
                            </button>
                        </div>
                    </form>
                </div>
            </section> */}
            {loading && (
                <div className="flex justify-center items-center fixed inset-0 bg-opacity-50 bg-yellow-500 z-50">
                    <div className="spinner"></div> {/* Show the loader spinner */}
                </div>
            )}

            {/* Modal for Captcha  */}
            <Modal size="sm" aria-labelledby="captcha-modal" centered show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header className="text-center">
                    <h5 className="w-100 text-black font-semibold m-0">Are you a robot?</h5>
                </Modal.Header>
                <Modal.Body>
                    <Verify id="captcha" width={250} height={120} onSuccess={handleCaptchaSuccess} />
                </Modal.Body>
            </Modal>

            <section className="flex flex-col items-center gap-10 w-full h-full">
                <div className="flex flex-col items-center p-3">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl text-amber-400 fw-bolder text-center ">Why Verify Employees?</h1>
                    <div style={{ maxWidth: "1126px" }}className="fw-normal text-black text-base md:text-xl lg:text-2xl px-3 text-justify lg:text-center">
                        Ensuring that employee information is accurate helps maintain a trustworthy workplace environment
                        and reduces the risk of fraudulent activities.
                    </div>
                </div>
               <div className=" px-5 lg:px-20 pb-20 w-full mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
    {clients.map((card) => (
        <div
            key={card.id}
            className=" px-10 py-7 bg-gradient-to-r from-[#FF9D00] via-[#FFC100] to-[#FF9D00] rounded-lg shadow-lg text-center cursor-pointer flex flex-col  h-full"
        >
            <h3 className="text-black mt-4 font-bold text-base md:text-xl lg:text-2xl">
                {card.name}
            </h3>
            <p className="text-black font-semibold mt-2 text-base md:text-xl lg:text-2xl">
                {card.description}
            </p>
        </div>
    ))}
</div>
            </section>

            <ToastContainer />
        </>
    );
}

export default EmployeeVerification;
