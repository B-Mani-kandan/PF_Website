import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is an FTWZ (Free Trade Warehousing Zone)?",
    answer:
      "An FTWZ is a designated zone offering warehousing and logistics services with duty-free benefits for import and export operations. It simplifies global trade by providing a secure and efficient ecosystem.",
  },
  {
    question: "What are the key benefits of using an FTWZ?",
    answer:
      "FTWZs offer duty deferment, tax exemptions, faster cargo handling, streamlined customs clearance, and value-added services like labeling, kitting, and repackaging.",
  },
  {
    question: "Can goods be stored in an FTWZ for a long duration?",
    answer:
      "Yes, goods can be stored in an FTWZ for up to 5 years without attracting customs duties, making it ideal for long-term inventory management.",
  },
  {
    question: "Is it possible to re-export goods from an FTWZ?",
    answer:
      "Absolutely. Goods stored in FTWZs can be re-exported without paying import duties, making it a strategic hub for global distribution.",
  },
  {
    question: "Who can use FTWZ facilities?",
    answer:
      "Manufacturers, traders, exporters, importers, e-commerce companies, and logistics providers can all benefit from FTWZ services.",
  },
  {
    question: "Are there any compliance requirements to use an FTWZ?",
    answer:
      "Yes, users must adhere to customs regulations and FTWZ-specific guidelines, including documentation, inventory tracking, and reporting requirements.",
  },
  {
    question: "How does FTWZ help in reducing logistics costs?",
    answer:
      "By allowing consolidation, duty-free storage, and efficient customs processes, FTWZs reduce overall supply chain and inventory costs.",
  },
];

const FtwzFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-16 flex flex-col lg:flex-row gap-8 sm:gap-10 mb-10 sm:mb-16 md:mb-20">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-2 sm:pl-3 mb-3 sm:mb-4 font-medium">
          FTWZ FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-snug sm:leading-tight">
          You’ve Got
          <br />
          Questions, We’ve
          <br />
          Got Answers
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
          Explore clear answers to common queries and understand how Free Trade
          Warehousing Zones can benefit your business.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-300  overflow-hidden ${
              openIndex === index
                ? "border-t border-red-500 bg-[#f2f2f2]"
                : "border-t border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 sm:p-6 flex justify-between items-center"
            >
              <span className="font-medium text-gray-800 text-sm sm:text-base">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FtwzFAQ;
