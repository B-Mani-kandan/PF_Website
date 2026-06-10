// import globeImage from "../../assets/HomeImages/GlobeImg.webp";
// const HomeGlobalReach = () => {
//   return (
//     <div className="relative mt-6 mb-6 w-full mx-auto">
//       <img src={globeImage} alt="Globe" className="w-full object-contain" />
//       <h2 className="absolute font-style top-16 left-18 text-3xl md:text-4xl font-semibold text-white z-20">
//         Global Reach
//       </h2>
//       <div className="absolute bottom-8 right-3 md:max-w-md text-sm text-gray-200 z-20">
//         <p className="mb-6 leading-relaxed">
//           Reach customers across the world with faster and cheaper deliveries
//           from fulfillment centers across the world.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeGlobalReach;

import globeImage from "../../assets/HomeImages/GlobeImg.webp";

const HomeGlobalReach = () => {
  return (
    <div
      className="relative mt-6 mb-6 w-full mx-auto"
      style={{ aspectRatio: "16/9" }}
    >
      <img
        src={globeImage}
        alt="Globe"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Title - top-left, percentage-based so it scales with container */}
      <h2
        className="absolute font-style text-white font-semibold z-20
                     top-[6%] left-[3%]
                     text-xl sm:text-2xl md:text-3xl lg:text-4xl"
      >
        Global Reach
      </h2>

      {/* Bottom-right text */}
      <p
        className="absolute z-20 leading-relaxed text-gray-200
                    bottom-[4%] right-[2%]
                    text-[clamp(0.55rem,1.2vw,0.875rem)]
                    max-w-[30%] text-right"
      >
        Reach customers across the world with faster and cheaper deliveries from
        fulfillment centers across the world.
      </p>
    </div>
  );
};

export default HomeGlobalReach;
