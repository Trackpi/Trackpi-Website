import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import AdminSidebar from "./components/AdminSidebar";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader";

// Page Imports
import Home from "./pages/User/Home";
import About from "./pages/User/About";
import OurServices from "./pages/OurServices";
import OurTeam from "./pages/User/OurTeam";
import EmployeeVerification from "./pages/EmployeeVerification";
import Connect from "./pages/User/Connect";
import Personel from "./pages/User/Personel";
import NewProject from "./pages/User/NewProject";
import EmployeeSales from "./pages/User/EmployeeSales";
import EmployeeInternship from "./pages/User/EmployeeInternship";
import FormManagement from "./pages/FormManagement";
import FooterManagement from "./pages/FooterManagement";
import PartnershipManagement from "./pages/PartnershipManagement";
import NewsManagement from "./pages/NewsManagement";
import EmployeeManagement from "./pages/Admin/EmployeeManagement";
import AdminManagement from "./pages/Admin/AdminManagement";
import AdminLogin from "./pages/Admin/AdminLogin";
import InternManagementDetail from "./pages/Admin/InternManagementDetail";
import SalesManagement from "./pages/SalesManagement";
import SalesManagementDetail from "./pages/Admin/SalesManagementDetail";
import AddSales from "./pages/Admin/AddSales";
import AddEmployee from "./pages/Admin/AddEmployee";
import AddInterns from "./pages/Admin/AddInterns";
import EmployeeManagementDetail from "./pages/Admin/EmployeeManagementDetail";
import ProjectManagement from "./pages/Admin/ProjectManagement";
import ProjectManagementDetail from "./pages/Admin/ProjectManagementDetail";
import NotFound from "./pages/NotFound";
import AdminNavbar from "./components/AdminNavbar";
import Dashboard from "./components/Dashboard";
import FormManagementDetails from "./pages/FormManagementDetails";

function App() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setLoading(true);
            const timeout = setTimeout(() => setLoading(false), 1050);
            return () => clearTimeout(timeout);
        } else {
            setLoading(false);
        }
    }, [location.pathname]);

    const showHeaderFooter = [
        "/",
        "/about",
        "/our-services",
        "/connect-us",
        "/employee-verification",
        "/new-project-form",
        "/employeesales",
        "/employeeinternship",
    ].includes(location.pathname);
    const isNotFoundRoute = location.pathname === "/not-found";
    const isAdminRoute =
        location.pathname.startsWith("/admin") && location.pathname !== "/admin/admin-login" && !isNotFoundRoute;
    const isAdminRouted =
        location.pathname.startsWith("/admin") && location.pathname !== "/admin/admin-login" && !isNotFoundRoute;
    return (
        <>
            <ScrollUp />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {showHeaderFooter && <Header />}
                    {!isAdminRoute && !isNotFoundRoute && location.pathname !== "/admin/admin-login" && <Sidebar />}
                    <div style={isAdminRoute ? { display: "flex" } : {}}>
                        {isAdminRoute && !isNotFoundRoute && <AdminSidebar />}
                        <div style={isAdminRoute ? { width:"100%", overflowY: "scroll", height: "100%" } : {}}>
                            {isAdminRouted && !isNotFoundRoute && <AdminNavbar />}
                            <div style={isAdminRoute ? styles.content : null}>
                                <Routes>
                                    {/* Public Routes */}
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/our-services" element={<OurServices />} />
                                    <Route path="/our-team" element={<OurTeam />} />
                                    <Route path="/employee-verification" element={<EmployeeVerification />} />
                                    <Route path="/connect-us" element={<Connect />} />
                                    <Route path="/personnel" element={<Personel />} />
                                    <Route path="/new-project-form" element={<NewProject />} />
                                    <Route path="/employeesales" element={<EmployeeSales />} />
                                    <Route path="/employeeinternship" element={<EmployeeInternship />} />


                                    {/* Admin Routes */}
                                    <Route path="/admin/admin-login" element={<AdminLogin />} />
                                    <Route path="/admin/dashboard" element={<Dashboard />} />
                                    <Route path="/admin/admin-management" element={<AdminManagement />} />
                                    <Route path="/admin/form-management" element={<FormManagement />} />
                                    <Route path="/admin/form-details/:formId" element={<FormManagementDetails />} />
                                    <Route path="/admin/partnership-management" element={<PartnershipManagement />} />
                                    <Route path="/admin/news-management" element={<NewsManagement />} />
                                    <Route path="/admin/project-management" element={<ProjectManagement />} />
                                    <Route path="/admin/project-details/:projectId" element={<ProjectManagementDetail />} />
                                    <Route path="/admin/employee-management" element={<EmployeeManagement />} />
                                    <Route path="/admin/employeeManagement-addEmployee/" element={<AddEmployee />} />  {/* For Add employee */}
                                    <Route path="/admin/employeeManagement-addEmployee/:id" element={<AddEmployee />} />  {/* For update employee */}
                                    <Route path="/admin/employeeManagement-detail" element={<EmployeeManagementDetail />} />
                                    <Route path="/admin/sales-management" element={<SalesManagement />} />
                                    <Route path="/admin/salesManagement-add/" element={<AddSales />} /> {/* For Add Sales */}
                                    <Route path="/admin/salesManagement-add/:id" element={<AddSales />} /> {/* For update Sales */}
                                    <Route path="/admin/salesManagement-detail" element={<SalesManagementDetail />} />
                                   <Route path="/admin/intern-management-add/" element={<AddInterns />} />  {/* For Add Intern  */}
                                   <Route path="/admin/intern-management-add/:id" element={<AddInterns />} /> {/* For update Intern */}
                                   <Route path="/admin/intern-management-detail" element={<InternManagementDetail />} />
                                    <Route path="/admin/footer-management" element={<FooterManagement />} />


                                    {/* 404 Not Found */}
                                    <Route path="/*" element={<Navigate to={"/not-found"} />} />
                                    <Route path="/not-found" element={<NotFound />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                    {showHeaderFooter && <Footer />}
                </>
            )}
        </>
    );
}

const styles = {
    content: {
        padding: "2px",
        overflowY: "scroll",
        height: "calc(100vh - 80px)",
    },
};

export default App;