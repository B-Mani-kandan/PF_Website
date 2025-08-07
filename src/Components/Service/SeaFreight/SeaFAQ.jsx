import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

const faqs = [
  {
    question: "What’s the difference between FCL and LCL ?",
    answer:
      "FCL (Full Container Load): You rent an entire container for your cargo. LCL (Less than Container Load): Your cargo shares container space with goods from other shippers.",
  },
  {
    question: "How long does sea freight take ?",
    answer:
      "Transit time varies depending on the origin and destination. Typically, international sea freight can take anywhere from 2 to 8 weeks, including customs clearance.",
  },
  {
    question: "How is the cost of sea freight calculated ?",
    answer:
      "Costs depend on container size (e.g., 20ft or 40ft), shipping route, cargo type, weight/volume, and additional services like port handling or customs.",
  },
  {
    question: "Can I track my sea shipment ?",
    answer:
      "Yes. Most sea freight shipments can be tracked using the container number or Bill of Lading number through our online tracking system or customer support.",
  },
  {
    question: "Do you offer door-to-door sea freight services ?",
    answer:
      "Yes, we provide complete door-to-door logistics, including pickup, customs clearance, ocean transport, and final delivery to your specified location.",
  },
  {
    question: "Is cargo insurance available ?",
    answer:
      "Yes. We highly recommend cargo insurance for added protection against damage, loss, or delays during transit.",
  },
];

const SeaFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-semibold mb-5 style-font">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 mb-16">
          Have questions? We're here to help.
        </p>

        <div className="text-left border-t border-gray-200 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left font-medium text-gray-900"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {activeIndex === index ? (
                  <CircleMinus className="h-5 w-5 text-gray-600" />
                ) : (
                  <CirclePlus className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {activeIndex === index && (
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SeaFAQ;
