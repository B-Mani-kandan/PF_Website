import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Components/HomeContent/Home";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import WareHouse from "./Components/Service/WareHouse";
import Transportation from "./Components/Service/Transport/Transportation";
import SeaFreight from "./Components/Service/SeaFreight/SeaFreight";
import AirFreight from "./Components/Service/AirFreight/AirFreight";
import AboutUs from "./Components/AboutUs/AboutUs";
import FTWZ from "./Components/Service/FTWZ/FTWZ";
import CustomClearence from "./Components/Service/Customs/CustomClearence";
import HomeDesc from "./Components/HomeContent/HomeDesc";
import HomeContact from "./Components/HomeContent/HomeContact";
import ScrollToTop from "./ScrollToTop";

function AppContent() {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/WareHouse" element={<WareHouse />} />
        <Route path="/Road-Freight-Services" element={<Transportation />} />
        <Route path="/Ocean-Freight-Services" element={<SeaFreight />} />
        <Route path="/Air-Freight-Services" element={<AirFreight />} />
        <Route path="/FTWZ-Operations" element={<FTWZ />} />
        <Route path="/Customs-Clearance" element={<CustomClearence />} />
      </Routes>
      {location.pathname !== "/Contact-Us" && <HomeContact />}
      <HomeDesc />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
