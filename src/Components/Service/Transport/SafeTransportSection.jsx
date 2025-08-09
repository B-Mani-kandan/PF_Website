import TruckImage from "../../../assets/Service/Transportation/TruckImage.webp";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaTags,
  FaShippingFast,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt size={28} className="text-gray-600" />,
    title: "Safest Supply",
    description:
      "We take the safety of our customers seriously. That's why we offer the safest supply of products on the market.",
  },
  {
    icon: <FaCheckCircle size={28} className="text-green-600" />,
    title: "100% Trusted",
    description:
      "We pride ourselves on being 100% trusted. Our customers rely on us for honesty, integrity, and reliability.",
  },
  {
    icon: <FaTags size={28} className="text-yellow-500" />,
    title: "Cheapest Dealing",
    description:
      "Looking for the best possible price when transporting goods? We’ve got you covered with our competitive rates.",
  },
  {
    icon: <FaShippingFast size={28} className="text-blue-600" />,
    title: "Fastest Transport",
    description:
      "Introducing the fastest truck transport system to reduce time-to-destination without compromising safety.",
  },
];

const SafeTransportSection = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-16 md:mt-17 Safe-trans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold style-font ">
            Top-rated safest transport <br /> service so far
          </h2>
          <p className="mt-4 text-gray-600 text-base max-w-2xl mx-auto">
            Transportation safety is a critical issue that affects everyone.
            People rely on different modes of transport to travel and move goods
            from one place to another.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div>{feature.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src={TruckImage}
              alt="Truck"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeTransportSection;
