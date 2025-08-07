import {
  FileText,
  TruckElectric,
  FileCheck,
  PlaneIcon,
  PackageCheck,
} from "lucide-react";
const steps = [
  {
    icon: <FileText className="w-5 h-5 text-white" />,
    title: "Submit Enquiry / Request a Quote",
    description:
      "Start by sending us your shipment details through our website or contact form. Our team will review and provide a competitive quote tailored to your needs.",
  },
  {
    icon: <TruckElectric className="w-5 h-5 text-white" />,
    title: "Pickup from Your Location",
    description:
      "Once confirmed, we arrange pickup of your cargo from your door, warehouse, or specified location with secure handling and professional logistics support.",
  },
  {
    icon: <FileCheck className="w-5 h-5 text-white" />,
    title: "Documentation & Customs",
    description:
      "We assist in preparing shipping documents and manage customs clearance to ensure compliance with local and international regulations.",
  },
  {
    icon: <PlaneIcon className="w-5 h-5 text-white" />,
    title: "Flight Booking & Shipment",
    description:
      "Your cargo is booked on the next available flight with trusted airline partners. We monitor the shipment closely to ensure timely departure.",
  },
  {
    icon: <PackageCheck className="w-5 h-5 text-white" />,
    title: "Delivery at Destination",
    description:
      "Upon arrival, we manage unloading, customs clearance, and final delivery to the recipient’s doorstep or warehouse, completing the process end-to-end.",
  },
];

const AirTimeline = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center justify-center mt-20">
        <p className="text-sm mb-20 text-gray-600  uppercase tracking-widest border-l-4 border-yellow-400 pl-3  font-medium">
          HOW IT WORKS
        </p>
      </div>
      <ol className="relative border-l border-gray-300">
        {steps.map((step, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-9 h-9 bg-blue-500 rounded-full ring-4 ring-white text-white text-sm font-bold">
              {step.icon}
            </span>
            <h3 className="text-lg style-font font-semibold ml-4 text-gray-900 mb-1">
              {step.title}
            </h3>
            <p className="text-gray-600 ml-4">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AirTimeline;
