import Air from "../../../assets/Service/Transportation/Air4.webp";
import { Plane } from "lucide-react";
import ServiceAir from "../../../assets/Service/Transportation/ServiceAir.webp";
import ServiceAir2 from "../../../assets/Service/Transportation/ServiceAir2.webp";
import ServiceAir3 from "../../../assets/Service/Transportation/ServiceAir3.webp";
const AirServiceGrid = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-30">
        <p className="text-sm  text-gray-600  uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          WHY CHOOSE OUR AIR FREIGHT SERVICES
        </p>
      </div>
      <section className="max-w-8xl mx-auto p-4 grid grid-cols-3  gap-2 md:gap-4">
        <div className="bg-orange-500 text-white flex items-end p-4 min-h-[150px] font-semibold text-lg">
          Consolidated Shipping
        </div>
        <div className="row-span-2">
          <img
            src={ServiceAir3}
            alt="Drill"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-blue-400 text-white flex items-end p-4 min-h-[150px] font-semibold text-lg">
          Express Shipping
        </div>
        <div>
          <img
            src={Air}
            alt="Carpenter"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={ServiceAir}
            alt="Plumbing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-800 text-white flex items-end p-4 min-h-[150px] font-semibold text-lg">
          Dangerous Goods –<br /> Special Cargo Handling
        </div>
        <div className="bg-green-200 flex flex-col items-center justify-center min-h-[150px] text-center px-2">
          <Plane className="w-12 h-12 text-green-600 mb-2" />
          <p className="text-sm font-medium text-green-800 leading-tight">
            Door-to-Airport <br /> Airport-to-Airport
          </p>
        </div>
        <div>
          <img
            src={ServiceAir2}
            alt="Plug"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default AirServiceGrid;
