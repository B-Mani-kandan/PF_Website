import {
  FaBoxes,
  FaCogs,
  FaSearch,
  FaClipboardList,
  FaShippingFast,
  FaWarehouse,
  FaUndo,
  FaBarcode,
  FaBoxOpen,
} from "react-icons/fa";

const services = [
  {
    title: "Labeling & Repackaging",
    description:
      "Precise labeling and tailored repackaging to meet global compliance and branding needs.",
    icon: <FaBoxes className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Kitting & Bundling",
    description:
      "Assemble products into ready-to-ship kits or bundles to simplify fulfillment operations.",
    icon: <FaCogs className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Quality Checks",
    description:
      "Detailed inspections ensure goods meet quality standards before dispatch or export.",
    icon: <FaSearch className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Inventory Management",
    description:
      "Get real-time stock visibility and optimized rotation across your supply chain.",
    icon: <FaClipboardList className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Cargo Consolidation",
    description:
      "Merge shipments to reduce logistics costs and streamline international transport.",
    icon: <FaShippingFast className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Packaging & Re-packaging",
    description:
      "Customized packaging solutions to protect goods and meet destination requirements.",
    icon: <FaBoxOpen className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Reverse Logistics",
    description:
      "Simplify returns, repairs, and disposal with efficient reverse logistics workflows.",
    icon: <FaUndo className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Bar-coding",
    description:
      "Enhance traceability and inventory accuracy with intelligent barcoding systems.",
    icon: <FaBarcode className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Pick and Pack",
    description:
      "Speed up fulfillment with accurate product selection and secure packing solutions.",
    icon: <FaWarehouse className="text-[#253c6a] text-3xl" />,
  },
];

export default function FtwzValues() {
  return (
    <section className=" bg-white   px-6 py-16 md:px-20">
      <p className="text-sm ml-5  text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-6 font-medium">
        FTWZ VALUES
      </p>
      <div className="max-w-7xl mx-auto ml-5 mb-12">
        <h2 className="text-3xl font-bold">Value Added Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start p-6 ">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 style-font">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
