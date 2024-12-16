import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurServices from './pages/OurServices';
import OurTeam from './pages/OurTeam';
import EmployeeVerification from './pages/EmployeeVerification';
import Connect from './pages/Connect';
import Personel from './pages/personel';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound';
import ScrollUp from './components/ScrollUp';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 2250);

      return () => clearTimeout(timeout); 
    } else {
      setLoading(false); 
    }
  }, [location]);

  return (
    <>
    
      <ScrollUp />
      {loading ? (
        <Loader />
      ) : (
        <>
         <Routes>
              
          </Routes>
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route
              path="/employee-verification"
              element={<EmployeeVerification />}
            />
            <Route path="/connect-us" element={<Connect />} />
            <Route path="/personnel" element={<Personel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          
        </>
      )}
    </>
  );
}

export default App;
