// import forklift from "../../../assets/Service/Customs/ForkCargo.png";
// import containers from "../../../assets/Service/Customs/Container.png";
// import importExport from "../../../assets/Service/Customs/ExportImport.png";

// const HeroSection = () => {
//   return (
//     <section className="relative  min-h-screen flex flex-col justify-between items-center px-6 md:px-24 pt-16 overflow-hidden">
//       <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
//         <div className="md:w-1/2">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
//             Customs <br />
//             <span className="ml-12">Clearence</span>
//           </h1>
//           <div>
//             <img
//               src={importExport}
//               alt="Export Import"
//               className="w-28 md:w-32"
//             />
//           </div>
//         </div>
//         <div className="md:w-1/2 flex flex-col items-end text-right  md:mt-0">
//           <p className="text-gray-700 text-sm max-w-sm mb-4">
//             <span className="text-[#ff6a00] font-semibold">Vortex Group</span>{" "}
//             is a representative logistics operator providing full range of
//             service in the sphere of customs clearance.
//           </p>
//           <button className="bg-[#ff6a00] text-white px-5 py-2 rounded-full font-semibold">
//             Get Started
//           </button>
//         </div>
//       </div>
//       <div className="absolute w-full flex justify-center   z-10">
//         <img
//           src={forklift}
//           alt="Forklift with Cargo"
//           className="w-[280px] md:w-[400px]"
//         />
//       </div>
//       <img
//         src={containers}
//         alt="Containers"
//         className="absolute bottom-0 right-0 w-[240px] md:w-[300px] z-0"
//       />
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import forklift from "../../../assets/Service/Customs/ForkCargo.png";
import containers from "../../../assets/Service/Customs/Container.png";
import importExport from "../../../assets/Service/Customs/ExportImport.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-4 md:px-0">
        <div className="flex flex-col md:pl-8 lg:pl-12 mt-10 md:mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Customs <br />
            <span className="ml-12">Clearance</span>
          </h1>
          <div>
            <img
              src={importExport}
              alt="Export Import"
              className="w-28 md:w-35"
            />
          </div>
        </div>
        <div className="flex flex-col items-start text-left mt-10 md:mt-20 md:pr-8 lg:pr-12 max-w-sm">
          <p className="text-gray-700 text-sm mb-4">
            <span className="text-[#d81515] font-semibold">
              Professional Freight{" "}
            </span>{" "}
            is a representative logistics operator providing full range of
            service in the sphere of customs clearance.
          </p>
          <button className="border border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition">
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2  z-10">
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
