import HeroImage from "../../assets/About/HeroImage.webp";
import { Link } from "react-scroll";
const AboutHeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-[#f5f5f5] min-h-screen md:mb-30">
      <div className="w-full md:w-1/2 px-8 md:px-16 py-20">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          ABOUT US
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Unveiling Our Expert <br /> Cargo Logistics
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Cargo's efficiency, connectivity, and global reach ensure seamless
          logistics, timely deliveries, and robust international trade, driving
          economic growth and innovation.
        </p>
        <div className="flex gap-4">
          <Link
            to="AboutContent"
            smooth={true}
            offset={-100}
            duration={2000}
            href="#AboutContent"
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
  );
};

export default AboutHeroSection;
