import "../ContactUs/ContactUs.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [result, setResult] = useState("");

  const notifySuccess = () => toast.success("File Submitted Successfully!");
  const notifySending = () => toast.warn("Submitting...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    notifySending();

    const formData = new FormData(event.target);
    formData.append("access_key", "19e03738-0d08-4a43-abe7-76ce9c02d493");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        setResult("");
        notifySuccess();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const elements = document.querySelectorAll("[data-aos='fade-up-left']");

      elements.forEach((element) => {
        if (isMobile) {
          element.removeAttribute("data-aos");
        } else {
          element.setAttribute("data-aos", "fade-up-left");
        }
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-heading-row">
        <h2 className="contact-title style-font">CONTACT US</h2>
        <p className="contact-description">
          If you have any questions, please feel free to get in touch with us
          via phone, text, email, the form below, or even on social media!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h3 className="form-title style-font">GET IN TOUCH</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="off"
                placeholder="Enter your name*"
              />
              <input
                type="text"
                id="tel"
                name="phone"
                maxLength={10}
                required
                autoComplete="off"
                placeholder="Enter your phone number*"
              />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your email*"
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Your message"
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
            {result && <span className="error">{result}</span>}
            <ToastContainer />
          </form>
        </div>
        <div className="contact-info">
          <div className="info-box">
            <h3 className="style-font">CONTACT INFORMATION</h3>
            <div className="info-row">
              <div className="info-column">
                <div className="info-item">
                  <span className="icon">📞</span>
                  <div>
                    <div className="info-label">PHONE</div>
                    <div className="info-value">044: 4206 1421, 4206 1422</div>
                  </div>
                </div>
              </div>
              <div className="info-column">
                <div className="info-item">
                  <span className="icon" style={{ fontSize: "26px" }}>
                    ⚘
                  </span>
                  <div>
                    <div className="info-label">ADDRESS</div>
                    <div className="info-value">
                      Old No 43, New No 94, Ist Floor, Sembudoss Street, Chennai
                      - 600 001
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-item mt-2">
              <span className="icon">✉️</span>
              <div>
                <div className="info-label">EMAIL</div>
                <div className="info-value">info@pflogistics.in</div>
              </div>
            </div>
          </div>
          <div className="info-box">
            <h3 className="style-font">BUSINESS HOURS</h3>
            <div className="hours-row">
              <div>
                <div className="info-label">MONDAY - FRIDAY</div>
                <div className="info-value">9:00 am – 8:00 pm</div>
              </div>
              <div>
                <div className="info-label">SATURDAY</div>
                <div className="info-value">9:00 am – 6:00 pm</div>
              </div>
              <div>
                <div className="info-label">SUNDAY</div>
                <div className="info-value">9:00 am – 5:00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-wrapper mb-30">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.696318232646!2d-88.29265828460107!3d42.055024879208534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faa264a8f57e3%3A0x12f04e4b3e3b4305!2s1425%20N%20McLean%20Blvd%2C%20Elgin%2C%20IL%2060123%2C%20USA!5e0!3m2!1sen!2sin!4v1652817585025!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
