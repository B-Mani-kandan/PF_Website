import {
  HandCoins,
  SendToBack,
  MapPinHouse,
  Lightbulb,
  Warehouse,
  ArrowLeftRight,
} from "lucide-react";

const features = [
  {
    icon: <HandCoins className="w-6 h-6 text-gray-700" />,
    title: "Duty Deferment & Cost Optimization",
    description: [
      "PFL ensures 100% customs duty deferment until goods move out for domestic consumption.",
      "Result: Reduced working capital and improved cash flow for your business.",
    ],
  },
  {
    icon: <SendToBack className="w-6 h-6 text-gray-700" />,
    title: "End-to-End FTWZ Management",
    description: [
      "PFL offers end-to-end FTWZ logistics, including import handling, labeling, packing, documentation, and customs clearance.",
      "Whether for re-export or domestic delivery, we simplify the process—one partner, zero hassle.",
    ],
  },
  {
    icon: <MapPinHouse className="w-6 h-6 text-gray-700" />,
    title: "Strategic FTWZ Locations",
    description: [
      "Situated near international gateways, PFL FTWZ ensures faster cargo movement with reduced holding times.",
      "Its proximity to ports and airports enables seamless connectivity for both imports and exports.",
    ],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-gray-700" />,
    title: "Comprehensive Solutions",
    description: [
      "We offer a full spectrum of FTWZ services, including duty-free transshipment and tax benefits.",
      "Our services deliver a seamless solution for all your import-export needs.",
    ],
  },
  {
    icon: <Warehouse className="w-6 h-6 text-gray-700" />,
    title: "Ample Storage Space",
    description: [
      "Our facilities provide flexible and expansive storage capacity.",
      "Ideal for everything from general cargo to industry-specific and sensitive goods.",
    ],
  },
  {
    icon: <ArrowLeftRight className="w-6 h-6 text-gray-700" />,
    title: "Flexibility & Adaptability",
    description: [
      "From temporary cargo removal to re-exports, our tailored FTWZ solutions support diverse trade needs.",
      "We adapt to your operations, ensuring uninterrupted supply chain flow.",
    ],
  },
];

const FtwzWhyChooseUs = () => {
  return (
    <section className="py-20 px-6 md:px-16 mt-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            WHY CHOOSE OUR FTWZ SERVICES
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why <span className="text-[#253c6a]">PFL</span> is The Right Choice
          for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl hover:[background-color:#253c6a] transition-all duration-300 group h-full flex flex-col"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-gray-100 mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 style-font text-gray-900 group-hover:text-white">
                {item.title}
              </h3>
              <div className="flex flex-col gap-2 mt-5">
                {item.description.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-600 group-hover:text-white text-justify"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FtwzWhyChooseUs;
