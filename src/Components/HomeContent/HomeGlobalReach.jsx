import globeImage from "../../assets/HomeImages/GlobeImg.webp";
const HomeGlobalReach = () => {
  return (
    <div className="relative mt-6 mb-6 w-full mx-auto">
      <img src={globeImage} alt="Globe" className="w-full object-contain" />
      <h2 className="absolute font-style top-16 left-18 text-3xl md:text-4xl font-semibold text-white z-20">
        Global Reach
      </h2>
      <div className="absolute bottom-8 right-3 md:max-w-md text-sm text-gray-200 z-20">
        <p className="mb-6 leading-relaxed">
          Reach customers across the world with faster and cheaper deliveries
          from fulfillment centers across the world.
        </p>
      </div>
    </div>
  );
};

export default HomeGlobalReach;
