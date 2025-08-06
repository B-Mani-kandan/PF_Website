import shipImage from "../../../assets/Service/Transportation/ShipImage.png";
import permitImg from "../../../assets/Service/Transportation/ShipCard3.png";
import libraryImg from "../../../assets/Service/Transportation/ShipCard1.png";
import meetingImg from "../../../assets/Service/Transportation/ShipCard2.jpg";

const SeaFreightHome = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <img
          src={shipImage}
          alt="Ship"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[0.5%] w-full flex justify-center z-10">
          <h1 className="text-[6vw] text-white/20 font-bold tracking-wide">
            SEA FREIGHT
          </h1>
        </div>

        <div className="absolute bottom-[10%] left-[5%] p-5 rounded-md max-w-sm z-20 bg-black/60">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            SEA FREIGHT SERVICES
          </p>
          <h2 className="text-lg font-bold text-white mb-2">
            Reliable & Affordable Sea Freight Solutions
          </h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            We provide reliable, efficient, and affordable sea freight services
            across global ports. Your cargo’s safety and timely delivery is our
            top priority.
          </p>
        </div>
        <div className="absolute top-[20%] right-[3%] w-[450px] z-30">
          <div className="grid grid-cols-2 gap-4">
            <div className="row-span-2">
              <div className="h-full w-full overflow-hidden rounded-xl shadow-lg relative">
                <img
                  src={permitImg}
                  alt="Apply Permit"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-md">
                  Apply Permit
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-48 overflow-hidden rounded-xl shadow-lg relative">
                <img
                  src={libraryImg}
                  alt="Library"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-md">
                  York New Library City
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-48 overflow-hidden rounded-xl shadow-lg relative">
                <img
                  src={meetingImg}
                  alt="Meeting"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium drop-shadow-md">
                  Collaboration Hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaFreightHome;
