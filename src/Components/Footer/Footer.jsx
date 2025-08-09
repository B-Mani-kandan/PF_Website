import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import ContOpen from "../../assets/HomeImages/ContBoxOpen.webp";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="relative hide-on-mobile">
        <img
          src={ContOpen}
          alt="Container Sketch"
          className="absolute -bottom-40 left-0 w-28 sm:w-40 md:w-56 lg:w-[300px] pointer-events-none"
        />
      </div>
      <footer className="footer ">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-group">
              <h3 className="footer-title">Quick Link</h3>
              <RouterLink to="/" className="footer-link">
                Home
              </RouterLink>
              <RouterLink to="/About-Us" className="footer-link">
                About Us
              </RouterLink>
              <ScrollLink
                to="sevices"
                smooth={true}
                offset={-70}
                duration={500}
                href="#About"
                className="footer-link"
              >
                Services
              </ScrollLink>
              <RouterLink to="/Contact-Us" className="footer-link">
                Contact Us
              </RouterLink>
            </div>
            <div className="footer-group">
              <h3 className="footer-title">Services</h3>
              <RouterLink to="/FTWZ-Operations" className="footer-link">
                Ftwz Operations
              </RouterLink>
              <RouterLink to="/Customs-Clearance" className="footer-link">
                Customs Clearance
              </RouterLink>
              <RouterLink to="/WareHouse" className="footer-link">
                Warehousing
              </RouterLink>
              <RouterLink to="/Ocean-Freight-Services" className="footer-link">
                Sea Freight
              </RouterLink>
              <RouterLink to="/Air-Freight-Services" className="footer-link">
                Air Freight
              </RouterLink>
              <RouterLink to="/Road-Freight-Services" className="footer-link">
                Road Freight
              </RouterLink>
            </div>
            <div className="footer-group">
              <h3 className="footer-title">Support</h3>
              <a href="/" className="footer-link">
                Help Center
              </a>
              <RouterLink to="/Contact-Us" className="footer-link">
                Contact Us
              </RouterLink>
            </div>

            <div className="footer-group social-media">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-icons">
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-instagram-line"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
              <div className="footer-group" style={{ marginTop: "25%" }}>
                <h3 className="footer-title">Developed By</h3>
                <div className="Inv-Logo">
                  <a
                    href="https://invosys.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Invoking System Pvt . Ltd
                  </a>
                </div>
              </div>
              <div className="footer-group" style={{ marginTop: "25%" }}>
                <div className="terms">
                  <h6 className="footer-term">Terms</h6>
                  <h6 className="footer-term">Privacy</h6>
                  <h6 className="footer-term">© PF 2025</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
