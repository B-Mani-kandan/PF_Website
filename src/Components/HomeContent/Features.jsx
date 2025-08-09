import ContainerSketch from "../../assets/HomeImages/SketchContainer.webp";

const Features = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 mt-0 md:mt-20 font-sans">
      <div className="max-w-7xl border-t border-b border-[#e5dcd3] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col md:border-r border-[#e5dcd3] w-full md:w-1/2">
          <div className="border-b border-[#e5dcd3] p-4 sm:p-6 md:p-10">
            <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-5 sm:mb-7 font-medium">
              WORKING PROCESS
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2 style-font">
              Safe transport
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Safe Transport ensures your goods are delivered securely and on
              time. With advanced tracking and expert handling, your cargo is
              always in safe hands. Reliability, safety, and speed — that’s our
              promise.
            </p>
            <div className="mt-4 mb-2 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-2xl">🚚</span>
                <p className="text-gray-700 text-sm sm:text-base">
                  We ensure on-time delivery across domestic and international
                  routes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg sm:text-2xl">🛡️</span>
                <p className="text-gray-700 text-sm sm:text-base">
                  All cargo is covered with comprehensive insurance for peace of
                  mind.
                </p>
              </div>
            </div>
          </div>

          {/* WORLDWIDE LOCATIONS */}
          <div className="p-4 sm:p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-2 style-font">
              Worldwide locations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              With a global presence, we connect businesses across continents.
              Our network spans major ports, cities, and trade routes worldwide.
              No matter where your cargo needs to go, we’ve got it covered.
              Experience seamless logistics through our trusted international
              reach.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* ON TIME DELIVERY */}
          <div className="border-b border-[#e5dcd3] p-4 sm:p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-1 style-font">
              On time delivery
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">
              2500 Items Delivered
            </p>
            <img
              src={ContainerSketch}
              alt="Container Sketch"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain mt-4 mx-auto"
            />
          </div>

          {/* EFFICIENT CARGO */}
          <div className="p-4 sm:p-6 md:p-10">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-1 style-font">
              10,000+
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Efficient Cargo Handling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
