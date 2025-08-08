import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Phone, MapPinned, Mail } from "lucide-react";
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
    <section className="mt-12 px-4 md:px-16 py-12 bg-white text-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
        <h2 className="text-2xl font-bold">CONTACT US</h2>
        <p className="max-w-xl text-sm text-gray-500 leading-relaxed">
          If you have any questions, please feel free to get in touch with us
          via phone, text, email, the form below, or even on social media!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1 bg-white border border-gray-200 p-5 rounded-lg">
          <h3 className="text-base font-semibold mb-5">GET IN TOUCH</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-3 mb-3">
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                placeholder="Enter your name*"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                maxLength={10}
                required
                autoComplete="off"
                placeholder="Enter your phone number*"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your email*"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3 focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-28 resize-y focus:outline-none mb-3"
            ></textarea>
            <button
              type="submit"
              className="border border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition"
            >
              Send Message
            </button>
            {result && (
              <span className="text-red-500 mt-2 block">{result}</span>
            )}
            <ToastContainer />
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-base font-bold mb-6">CONTACT INFORMATION</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <Phone className="text-red-700" />
                  <div>
                    <div className="text-xs font-semibold uppercase text-gray-800">
                      PHONE
                    </div>
                    <div className="text-sm text-gray-600">
                      044: 4206 1421, 4206 1422
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <MapPinned className="text-red-700 w-11" />
                  <div>
                    <div className="text-xs font-semibold uppercase text-gray-800">
                      ADDRESS
                    </div>
                    <div className="text-sm text-gray-600">
                      Old No 43, New No 94, Ist Floor, Sembudoss Street, Chennai
                      - 600 001
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-red-700" />
              <div>
                <div className="text-xs font-semibold uppercase text-gray-800">
                  EMAIL
                </div>
                <div className="text-sm text-gray-600">info@pflogistics.in</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 ">
            <h3 className="text-base font-bold mb-6">BUSINESS HOURS</h3>
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="text-xs font-semibold uppercase text-gray-800">
                  MONDAY - FRIDAY
                </div>
                <div className="text-sm text-gray-600">9:00 am – 8:00 pm</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-gray-800">
                  SATURDAY
                </div>
                <div className="text-sm text-gray-600">9:00 am – 6:00 pm</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-gray-800">
                  SUNDAY
                </div>
                <div className="text-sm text-gray-600">9:00 am – 5:00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.1139012710773!2d80.28399837507855!3d13.091967187234568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1754636456628!5m2!1sen!2sin"
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
