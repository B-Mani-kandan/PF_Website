import forklift from "../../../assets/Service/Customs/ForkCargo.webp";
import containers from "../../../assets/Service/Customs/Container.webp";
import importExport from "../../../assets/Service/Customs/ExportImport.webp";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start md:pl-8 lg:pl-12 mt-10 md:mt-20 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Customs <br className="hidden md:block" />
            <span className="md:ml-12">Clearance</span>
          </h1>
          <div className="mt-4">
            <img
              src={importExport}
              alt="Export Import"
              className="w-28 md:w-35 lg:w-40"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-20 md:pr-8 lg:pr-12 max-w-sm">
          <p className="text-gray-700 text-sm mb-4">
            <span className="text-[#d81515] font-semibold">
              Professional Freight{" "}
            </span>
            is a representative logistics operator providing full range of
            service in the sphere of customs clearance.
          </p>
          <Link
            to="CustomsIntro"
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
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <img
          src={forklift}
          alt="Forklift with Cargo"
          className="w-[280px] md:w-[400px] lg:w-[480px]"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <img
          src={containers}
          alt="Containers"
          className="w-[240px] md:w-[300px] lg:w-[360px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
