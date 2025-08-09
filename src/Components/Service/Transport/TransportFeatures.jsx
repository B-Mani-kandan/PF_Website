import containerImg from "../../../assets/Service/Transportation/TruckImage.webp";
import { useState } from "react";

const features = [
  {
    id: 1,
    title: "Real-Time Vehicle Tracking",
    description:
      "Track your vehicles instantly with GPS and mobile networks. Get live updates on speed, route, and stops to boost delivery accuracy, safety, and operational efficiency.",
  },
  {
    id: 2,
    title: "Route Optimization",
    description:
      "Optimize travel routes to save time and reduce fuel costs. Our smart systems plan efficient paths, improve deliveries, and support seamless transport operations.",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "We offer clear, upfront pricing with no hidden charges. Know exactly what you pay for with full transparency that builds trust and ensures fair transactions.",
  },
  {
    id: 4,
    title: "Door-to-Door Pickup & Delivery",
    description:
      "Enjoy convenient service from pickup to delivery. We handle goods directly between sender and receiver, saving time and avoiding extra travel or terminal stops.",
  },
  {
    id: 5,
    title: "Cargo Safety & Security",
    description:
      "Your cargo is protected at every stage with secure handling and advanced tracking. We prevent damage or theft to ensure reliable and safe delivery always.",
  },
];

const TransportFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="bg-white py-20 px-6 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-25">
        <img
          src={containerImg}
          alt="Container"
          className="w-full  object-cover"
        />
        <div>
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            Our Features
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug style-font">
            Unusual Things We Do <br />
            Work Efficiency
          </h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={feature.id}
                className={`border-b pb-4 cursor-pointer text-gray-200 group`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    activeIndex === index ? "text-red-600" : "text-black"
                  }`}
                >
                  0{feature.id}. {feature.title}
                </h3>
                {activeIndex === index && feature.description && (
                  <p className="text-gray-600 mt-3 transition-all duration-300">
                    {feature.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransportFeatures;
