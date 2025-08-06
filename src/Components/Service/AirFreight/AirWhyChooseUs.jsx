import { Truck, Handshake, MapPinned, Globe } from "lucide-react";

const AirWhyChooseUs = () => {
  return (
    <section className="py-20 px-6 md:px-16 mt-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            WHY CHOOSE OUR AIR FREIGHT SERVICES
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why <span className="text-[#253c6a]">PFL</span> is The Right Choice
          for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl hover:[background-color:#253c6a] transition-all duration-300 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <Truck className="w-6 h-6 text-gray-700 " />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Fast Transit Time
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              We ensure your cargo reaches its destination quickly with access
              to direct flights and a global air network. Our streamlined
              process and express handling minimize delays, making us ideal for
              urgent and time-sensitive shipments.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl hover:[background-color:#253c6a] transition-all duration-300 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <Handshake className="w-6 h-6 text-gray-700 " />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Competitive pricing
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              Get transparent, affordable shipping rates with no hidden fees.
              Our global partnerships help you save without compromising service
              quality.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl md:row-span-2 hover:[background-color:#253c6a] transition-all duration-300 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <MapPinned className="w-6 h-6 text-gray-700 " />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Real-time shipment tracking
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify mb-6">
              Track your shipments in real-time from origin to destination. Our
              platform provides live status updates at every key milestone. Get
              automatic alerts for pickups, customs clearances, and delivery
              progress. Access a centralized dashboard for full route
              transparency.
            </p>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              You stay informed at all times, reducing uncertainty and delays.
              This visibility empowers smarter, faster decision-making for your
              business.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl md:col-span-2 hover:[background-color:#253c6a] transition-all duration-300 group">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
              <Globe className="w-6 h-6 text-gray-700 " />
            </div>
            <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
              Global network
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-white text-justify">
              Leverage a trusted logistics network that spans 150+ countries. We
              operate through vetted partners in major trade and port zones.
              Whether by sea, air, or land, your cargo moves efficiently
              worldwide. Our team manages customs, compliance, and local
              regulations for you. Cross-border shipping becomes simple, secure,
              and fully supported. No matter the destination, we ensure seamless
              end-to-end delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirWhyChooseUs;
