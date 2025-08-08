import HeroImage from "../../../assets/Service/FTWZ/FTWZHome.jpg";
import { Link } from "react-scroll";
const FtwzHome = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center bg-[#f5f5f5] min-h-screen mb-20">
        <div className="w-full md:w-1/2 px-8 md:px-16 py-20">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            FTWZ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            FTWZ – Free Trade <br /> Warehousing Zone
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            A duty-free zone designed to streamline global trade, reduce
            logistics costs, and offer efficient storage solutions for
            import-export businesses.
          </p>
          <div className="flex gap-4">
            <Link
              to="FTWZIntro"
              smooth={true}
              offset={-100}
              duration={2000}
              href="#explore"
              className="border border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[500px] md:h-screen overflow-hidden">
          <img
            src={HeroImage}
            alt="Cargo Ship"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default FtwzHome;
