import {
  FaShip,
  FaFileInvoice,
  FaListUl,
  FaBalanceScale,
  FaPassport,
  FaPlane,
  FaWarehouse,
  FaLaptop,
} from "react-icons/fa";

const services = [
  {
    title: "Import & Export Customs Clearance",
    description:
      "End-to-end clearance solutions for both import and export shipments, ensuring smooth border processes.",
    icon: <FaShip className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Documentation Handling",
    description:
      "Preparation and submission of essential documents like Bill of Entry and Shipping Bill.",
    icon: <FaFileInvoice className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "HS Code Classification",
    description:
      "Accurate product classification for compliance with customs regulations worldwide.",
    icon: <FaListUl className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Duty & Tax Consultancy",
    description:
      "Expert guidance on customs duties, taxes, exemptions, and savings opportunities.",
    icon: <FaBalanceScale className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "DGFT Licensing Support",
    description:
      "Assistance with obtaining and managing Directorate General of Foreign Trade (DGFT) licenses.",
    icon: <FaPassport className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Port & Airport Clearance",
    description:
      "Fast and efficient clearance at major ports and airports to reduce delays.",
    icon: <FaPlane className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "Bonded Warehousing Support",
    description:
      "Facilitation of bonded warehouse storage and related customs formalities.",
    icon: <FaWarehouse className="text-[#253c6a] text-3xl" />,
  },
  {
    title: "EDI Filing & Customs Compliance",
    description:
      "Electronic Data Interchange filing for faster processing and adherence to compliance standards.",
    icon: <FaLaptop className="text-[#253c6a] text-3xl" />,
  },
];

export default function CustomsWhatWeDo() {
  return (
    <section className=" bg-white mt-10  px-6 py-16 md:px-20">
      <p className="text-sm ml-5  text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-6 font-medium">
        CUSTOMS WHAT WE DO
      </p>
      <div className="max-w-7xl mx-auto ml-5 mb-12">
        <h2 className="text-3xl font-bold">Services Offered</h2>
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
