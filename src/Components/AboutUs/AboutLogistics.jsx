import ContImage from "../../assets/About/Cont.webp";

function AboutLogistics() {
  return (
    <div className="bg-[#050709] text-white min-h-screen md:mb-40">
      <div className="relative text-center">
        <img
          src={ContImage}
          alt="Container"
          className="mx-auto relative w-[800px] md:w-[800px] sm:w-[500px] max-w-[95%]"
        />
        <div className="absolute top-1/2 w-full flex justify-center z-10">
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] text-white/20 font-bold tracking-wide">
            LOGISTICS
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between px-6 sm:px-10 md:px-24 py-10 sm:py-16 gap-10 md:gap-20">
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-5xl sm:text-6xl md:text-[80px] font-bold">24+</h2>
          <p className="text-xs sm:text-sm mt-3 text-gray-300">
            Years Service Experienced
          </p>

          <div className="border-t border-red-600 mt-8 sm:mt-10 pt-6 flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
                150+
              </h3>
              <p className="text-xs sm:text-sm mt-3 text-gray-400">
                Employees for Your Success
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
                1K+
              </h3>
              <p className="text-xs sm:text-sm mt-3 text-gray-400">
                Cargo Delivered <br className="hidden sm:block" /> Per Month
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[250px] md:pl-8 lg:pl-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed">
            Logistics & Transportation <br className="hidden sm:block" />{" "}
            Solutions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            We deliver end-to-end logistics and transportation solutions
            tailored to your business needs.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
            From freight forwarding to warehousing, we ensure seamless
            operations. Our experienced team guarantees timely and
            cost-effective deliveries. Partner with us to simplify your global
            supply chain.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLogistics;
