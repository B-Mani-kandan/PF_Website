import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/HomeContent/Home";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
