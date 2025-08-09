import shipImage from "../../assets/HomeImages/ShippingContainer.webp";

const HomeSolution = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-16 font-poppins">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <div className="mb-4 md:mb-0">
          <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            SOLUTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold style-font leading-snug">
            Smart solutions to simplify <br className="hidden sm:block" /> your
            supply chain
          </h2>
        </div>
        <p className="text-gray-600 max-w-xl mt-4 md:mt-0 text-xs sm:text-sm leading-relaxed">
          Revolutionizing the way you manage logistics, our smart solutions
          streamline your supply chain, enhancing efficiency, reducing costs,
          and ensuring seamless operations from start to finish.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Supply Chain */}
        <div className="bg-[#ba427a] p-5 sm:p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden relative min-h-[220px]">
          <div className="mb-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100/20 flex items-center justify-center">
              📦
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1 font-style">
              Supply Chain
            </h3>
            <p className="text-xs sm:text-sm text-white">
              By leveraging innovative strategies and cutting-edge technology,
              we help streamline supply chain operations.
            </p>
          </div>
        </div>

        {/* Customs Clearance */}
        <div className="bg-[#786fc7] text-white p-5 sm:p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden relative min-h-[220px]">
          <div className="mb-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100/20 flex items-center justify-center text-white">
              🧾
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold mb-1 font-style">
              Customs Clearance
            </h3>
            <p className="text-xs sm:text-sm">
              Navigating the complexities of customs clearance with ease. We
              ensure your shipments meet all legal requirements.
            </p>
          </div>
        </div>

        {/* International Shipping */}
        <div
          className="relative rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105 min-h-[220px] sm:min-h-[300px]"
          style={{
            backgroundImage: `url(${shipImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 text-white p-4 sm:p-5 ">
            <h3 className="text-base sm:text-lg font-semibold mb-1 font-style">
              International Shipping
            </h3>
            <p className="text-xs sm:text-sm">
              Our logistics company is committed to transforming the
              transportation of goods. Our expert team handles every step of the
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolution;
