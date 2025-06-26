const ContactUs = () => {
  return (
    <section className="px-6 md:px-20 py-16 mt-14 bg-white font-sans">
      <div className="md:flex md:justify-between md:items-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-0">
          CONTACT US
        </h2>
        <p className="text-gray-600 md:max-w-xl text-sm leading-relaxed">
          If you have any questions, please feel free to get in touch with us
          via phone, text, email, the form below, or even on social media!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#f7f7f7] p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold mb-6">GET IN TOUCH</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name*"
                className=" p-3 rounded w-full text-sm"
              />
              <input
                type="text"
                placeholder="Enter your phone number*"
                className=" p-3 rounded w-full text-sm"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email*"
              className=" p-3 rounded w-full text-sm"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className=" p-3 rounded w-full text-sm"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold text-sm"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-[#f7f7f7] p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">CONTACT INFORMATION</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                📞 <strong>Phone:</strong> 773-365-1240
              </p>
              <p>
                📍 <strong>Address:</strong> 1425 N McLean Blvd, Elgin, IL
              </p>
              <p>
                ✉️ <strong>Email:</strong> office@steponetrans.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-[#f7f7f7] p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">BUSINESS HOURS</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <strong>Monday - Friday:</strong> 9:00 am - 8:00 pm
              </p>
              <p>
                <strong>Saturday:</strong> 9:00 am - 6:00 pm
              </p>
              <p>
                <strong>Sunday:</strong> 9:00 am - 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10">
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
