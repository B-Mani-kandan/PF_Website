import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Customs Clearance?",
    answer:
      "Customs clearance is the process of preparing and submitting documentation required to facilitate imports or exports into or out of a country. It ensures that shipments comply with local laws and regulations.",
  },
  {
    question: "Why is Customs Clearance important?",
    answer:
      "It ensures that your goods pass through customs smoothly, avoiding delays, penalties, or confiscation. Proper clearance also ensures you pay the correct duties and taxes.",
  },
  {
    question: "What documents are required for Customs Clearance?",
    answer:
      "Common documents include the commercial invoice, packing list, bill of lading or airway bill, import/export license, and HS code classification. Additional documents may be required based on the shipment.",
  },
  {
    question: "How long does Customs Clearance take?",
    answer:
      "Clearance time can vary depending on the port, shipment type, and completeness of documentation. With accurate paperwork, clearance can often be completed within 1–2 working days.",
  },
  {
    question: "Can you handle both Import and Export Customs Clearance?",
    answer:
      "Yes, we provide comprehensive clearance services for both imports and exports, covering sea, air, and land shipments.",
  },
  {
    question: "Do you offer Duty & Tax Consultancy?",
    answer:
      "Yes, we guide you on applicable customs duties, GST, exemptions, and ways to minimize costs legally.",
  },
  {
    question: "How can I ensure faster Customs Clearance?",
    answer:
      "Provide accurate and complete documentation, classify goods correctly using HS codes, and work with an experienced customs broker to avoid delays.",
  },
];

const CustomsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-16 md:px-20 flex flex-col lg:flex-row gap-10 mb-20">
      <div className="lg:w-1/2">
        <p className="text-sm  text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          CUSTOMS FAQ
        </p>
        <h2 className="text-5xl font-bold mb-4 leading-tight">
          You’ve Got
          <br />
          Questions, We’ve
          <br />
          Got Answers
        </h2>
        <p className="text-gray-600 mb-6">
          Explore clear answers to common queries and understand how Customs
          Clearance ensures smooth, compliant, and hassle-free import and export
          operations for your business.
        </p>
      </div>
      <div className="lg:w-1/2  space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` transition-all duration-300 ${
              openIndex === index
                ? "border-t border-red-500 bg-[#f2f2f2]"
                : "border-t border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-6 flex justify-between items-center"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="font-normal " />
              ) : (
                <Plus className="font-normal" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomsFAQ;
