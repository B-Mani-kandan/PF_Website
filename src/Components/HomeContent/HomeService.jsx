import { Plane, Ship, Truck, TrainFront } from "lucide-react";
import { Link } from "react-router-dom";
const services = [
  {
    icon: <Plane className="w-6 h-6 group-hover:text-white text-[#253c6a]" />,
    title: "Air Freight Services",
    description:
      "We can provide with the comprehensive service in the sphere of urgent, valuable, fragile or any cargos concise. nItious accelerated delivery by air.",
    bg: "bg-orange-500 text-white",
    hover: "hover:rotate-3 hover:scale-105",
    Link: "/Air-Freight-Services",
  },
  {
    icon: <Ship className="w-6 h-6 group-hover:text-white text-[#253c6a]" />,
    title: "Ocean Freight Services",
    description:
      "We provides with the types of basic conditions international sea transportation is implemented by our partners' the largest ocean carriers.",
    bg: "bg-white text-black",
    hover: "hover:-rotate-2 hover:scale-105",
    Link: "/Ocean-Freight-Services",
  },
  {
    icon: <Truck className="w-6 h-6 group-hover:text-white text-[#253c6a]" />,
    title: "Road Freight Services",
    description:
      "We provide reliable road freight services, ensuring safe, timely, and cost-effective transportation of goods through our trusted logistics network.",
    bg: "bg-white text-black",
    hover: "hover:rotate-2 hover:scale-105",
    Link: "/Road-Freight-Services",
  },
  {
    icon: (
      <TrainFront className="w-6 h-6 group-hover:text-white text-[#253c6a]" />
    ),
    title: "WareHousing Services",
    description:
      "We provide warehousing services under standard conditions, ensuring secure storage and efficient handling of goods in collaboration with trusted partners..",
    bg: "bg-white text-black",
    hover: "hover:-rotate-2 hover:scale-105",
    Link: "/WareHouse",
  },
];
const HomeService = () => {
  return (
    <div className="bg-white py-18 px-6 md:px-20 md:flex justify-between gap-8 sevices">
      <div className="max-w-md mt-18">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-7 font-medium">
          OUR SERVICES
        </p>
        <h2 className="text-4xl font-bold mb-4 leading-tight style-font">
          Built to Help You <br />
          <span className="style-font">Save Money</span>
        </h2>
        <p className="text-gray-600 mb-6">
          We pride ourselves on providing the best transport and shipping
          services available all over the world.
        </p>
        <p className="text-gray-600 mb-8">
          Our skilled personnel, utilising the latest communications, tracking
          and combined with experience through integrated supply chain
          solutions!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-0">
        {services.map((service, index) => (
          <Link to={service.Link} key={index}>
            <div
              key={index}
              className={`group p-6 rounded-lg  shadow-md transition-transform duration-300 cursor-pointer transform  ${service.hover} hover:bg-[#253c6a]`}
            >
              <div className="mb-7">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-5 style-font group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-gray-600 group-hover:text-white">
                {service.description}
              </p>
              <p className="mt-8 text-sm font-semibold style-font group-hover:text-white">
                LEARN MORE →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
