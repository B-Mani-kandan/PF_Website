import shipImage from "../../../assets/Service/Transportation/ShipImage.webp";
import permitImg from "../../../assets/Service/Transportation/ShipCard3.webp";
import libraryImg from "../../../assets/Service/Transportation/ShipCard1.webp";
import meetingImg from "../../../assets/Service/Transportation/ShipCard2.webp";

const SeaFreightHome = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        <img
          src={shipImage}
          alt="Ship"
          className="absolute inset-0 w-full h-full object-cover hide-on-mobile"
        />
        <div className="absolute top-[0.5%] w-full flex justify-center z-10">
          <h1 className="text-[6vw] text-white/20 font-bold tracking-wide hide-on-mobile">
            SEA FREIGHT
          </h1>
        </div>
        <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:justify-between px-5 lg:px-20 pt-20 gap-8">
          <div className="bg-black/60 p-5 rounded-md max-w-sm">
            <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
              SEA FREIGHT SERVICES
            </p>
            <h2 className="text-lg font-bold text-white mb-2">
              Reliable & Affordable Sea Freight Solutions
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              We provide reliable, efficient, and affordable sea freight
              services across global ports. Your cargo’s safety and timely
              delivery is our top priority.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-[450px] w-full">
            <div className="row-span-2">
              <img
                src={permitImg}
                alt="Apply Permit"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <img
                src={libraryImg}
                alt="Library"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <img
                src={meetingImg}
                alt="Meeting"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaFreightHome;
