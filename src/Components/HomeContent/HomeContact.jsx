import ExportImg from "../../assets/HomeImages/ExportForkLift.png";
import ImportImg from "../../assets/HomeImages/Import.png";

export default function HomeContact() {
  return (
    <section className="px-4 ">
      <div className="relative  max-w-6xl mx-auto bg-[#e8e8e8] shadow-xs border border-gray-300 rounded-[36px] overflow-hidden">
        <img
          src={ExportImg}
          alt="Export"
          className="absolute bottom-0 left-5 w-20 sm:w-28 md:w-36 lg:w-44 object-contain pointer-events-none z-0"
        />
        <img
          src={ImportImg}
          alt="Import"
          className="absolute top-0 right-5 w-20 sm:w-28 md:w-36 lg:w-44 object-contain pointer-events-none z-0"
        />
        <div className="relative z-10 mx-auto max-w-xl text-center py-10 sm:py-14 md:py-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Are You Ready To <br />
            Get Started
          </h2>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-full hover:bg-red-600 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
