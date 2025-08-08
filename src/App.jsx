import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About-Us" element={<AboutUs />} />
          <Route exact path="/Contact-Us" element={<ContactUs />} />
          <Route exact path="/WareHouse" element={<WareHouse />} />
          <Route exact path="/Transportation" element={<Transportation />} />
          <Route
            exact
            path="/Ocean-Freight-Services"
            element={<SeaFreight />}
          />
          <Route exact path="/Air-Freight-Services" element={<AirFreight />} />
          <Route exact path="/FTWZ-Operations" element={<FTWZ />} />
          <Route
            exact
            path="/Customs-Clearance"
            element={<CustomClearence />}
          />
        </Routes>
        <HomeContact />
        <HomeDesc />
        <Footer />
      </Router>
    </>
  );
}

export default App;
