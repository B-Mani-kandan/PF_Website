// import "./CustomsHero.css";
// import exportImg from "../../../assets/Service/Customs/ForkCargo.png";
// import cargoImg from "../../../assets/Service/Customs/ForkCargo.png";
// import yellowContainer from "../../../assets/Service/Customs/ForkCargo.png";
// import blueContainer from "../../../assets/Service/Customs/ForkCargo.png";

// const CustomsHero = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-left">
//         <div className="hero-badge">
//           <img src={exportImg} alt="Export" />
//         </div>
//         <h1 className="hero-title">
//           Visionary <br />
//           <span>Intelligence</span>
//         </h1>
//         <div className="scroll-indicator">Scroll to explore</div>
//       </div>

//       <div className="hero-right">
//         <p className="hero-description">
//           <strong className="highlight">Vortex Group</strong> is a
//           representative logistics operator providing full range of service in
//           the sphere of customs clearance.
//         </p>
//         <button className="get-started-btn">Get Started</button>

//         <div className="containers">
//           <img src={cargoImg} alt="Cargo Container" className="cargo-main" />
//           <img
//             src={yellowContainer}
//             alt="Yellow Container"
//             className="yellow-box"
//           />
//           <img src={blueContainer} alt="Blue Container" className="blue-box" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomsHero;

import React from "react";
import forklift from "../../../assets/Service/Customs/ForkCargo.png";
import containers from "../../../assets/Service/Customs/Container.png";
import importExport from "../../../assets/Service/Customs/ExportImport.png";

const HeroSection = () => {
  return (
    <section className="relative  min-h-screen flex flex-col justify-between items-center px-6 md:px-24 pt-16 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Customs <br />
            <span className="ml-12">Clearence</span>
          </h1>
          <div>
            <img
              src={importExport}
              alt="Export Import"
              className="w-28 md:w-32"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-end text-right  md:mt-0">
          <p className="text-gray-700 text-sm max-w-sm mb-4">
            <span className="text-[#ff6a00] font-semibold">Vortex Group</span>{" "}
            is a representative logistics operator providing full range of
            service in the sphere of customs clearance.
          </p>
          <button className="bg-[#ff6a00] text-white px-5 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute w-full flex justify-center   z-10">
        <img
          src={forklift}
          alt="Forklift with Cargo"
          className="w-[280px] md:w-[400px]"
        />
      </div>
      <img
        src={containers}
        alt="Containers"
        className="absolute bottom-0 right-0 w-[240px] md:w-[300px] z-0"
      />
    </section>
  );
};

export default HeroSection;
