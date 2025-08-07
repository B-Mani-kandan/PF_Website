import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";

const faqs = [
  {
    question: "Is tracking available for air freight shipments ?",
    answer:
      "Yes, all air freight shipments include tracking, allowing you to monitor your cargo from pickup to delivery.",
  },
  {
    question: "Are there any restrictions on what I can ship via air freight ?",
    answer:
      "Yes, items such as flammable materials, live animals, firearms, and hazardous chemicals may be restricted or require special documentation. Always consult us for clarification.",
  },
  {
    question: "Do I need to handle customs clearance ?",
    answer:
      "We offer full customs clearance services to ensure your cargo meets all import/export regulations and reaches its destination without delays.",
  },
  {
    question: "How long does air freight delivery take ?",
    answer:
      "Most international air shipments take 1 to 5 business days depending on the route, customs processing, and chosen service type (standard or express).",
  },
  {
    question: "How is the cost of air freight calculated ?",
    answer:
      "The cost is based on chargeable weight, which is either the actual weight or the volumetric (dimensional) weight—whichever is higher—along with the origin, destination, and service type.",
  },
  {
    question: "What types of cargo can be shipped by air ?",
    answer:
      "Air freight can handle a wide range of cargo, including general goods, perishables, electronics, pharmaceuticals, dangerous goods (with proper documentation), and express shipments.",
  },
];

const AirFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="max-w-3xl mx-auto px-4 py-16 mt-10 text-center">
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

export default AirFAQ;
