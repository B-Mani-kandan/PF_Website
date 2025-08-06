import TruckImage from "../../../assets/Service/Transportation/TruckImage.png";
import SmallTruck from "../../../assets/Service/Transportation/SmallTruck.jpg";

const TransportHome = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20 px-6 md:px-16 mt-12">
      <div className="flex-1">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          Your Delivery Partner
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 ">
          Around the <br />
          World
          <span className="inline-block mx-2 align-middle">
            <img
              src={SmallTruck}
              alt="Small Truck"
              className="h-15 w-[230px] rounded-full border-2 border-orange-400 object-cover shadow-md"
            />
          </span>
          <br />
          Transportation Services
        </h1>
        <p className="text-gray-600 mb-6">
          We specialize in reliable, efficient, and cost-effective
          transportation solutions tailored to meet the unique needs of our
          clients. Whether it's freight logistics, cargo transport, or passenger
          services, our modern fleet and experienced team.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
            Discover More
          </button>
        </div>
      </div>
      <div className="flex-1 relative w-full flex justify-center items-center">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-orange-2500 to-orange-400 opacity-80 z-0"></div>
        <img
          src={TruckImage}
          alt="Large Truck"
          className="relative z-10 w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default TransportHome;
