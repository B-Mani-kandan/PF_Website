import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-group">
              <h3 className="footer-title">Quick Link</h3>
              <RouterLink to="/Contact-Us" className="footer-link">
                Home
              </RouterLink>
              <ScrollLink
                to="About-us"
                smooth={true}
                offset={-100}
                duration={500}
                href="#About"
                className="footer-link"
              >
                About Us
              </ScrollLink>
              <RouterLink to="/Product-Service" className="footer-link">
                Product & Services
              </RouterLink>
              <RouterLink to="/Contact-Us" className="footer-link">
                Contact Us
              </RouterLink>
            </div>

            <div className="footer-group">
              <h3 className="footer-title">Product & Services</h3>
              <RouterLink to="/SMT-Fixtures" className="footer-link">
                Air Freight
              </RouterLink>
              <RouterLink to="/FCT-Fixtures" className="footer-link">
                Sea Freight
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                Warhousing
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                DG Shipping
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                Door to Door Delivery
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                Marine Surveyors
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                Transportation
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                International Freight Forwarding
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
