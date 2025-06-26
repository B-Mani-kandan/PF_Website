import { PackageCheck, Send, Clock, Plane } from "lucide-react";
import AirplaneSketch from "../../assets/HomeImages/AeroplaneSketch.png";
const WhyOutports = () => {
  return (
    <>
      <section className="aboutbg py-20 px-6 md:px-20 font-sans text-[#1a1a1a]  relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs inline-block bg-[#f2e9e1] text-[#7d5a45] px-4 py-1 rounded-full mb-4">
              Why Outports
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug style-font">
              Why should you choose our services, here are the advantages we
              offer
            </h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              We take great pride in offering the best shipping and
              transportation services available anywhere in the world, utilizing
              software for tracking, processing, and communications, along with
              our knowledgeable staff's decades of experience!
            </p>
            <button className="bg-red-600 text-white text-sm px-6 py-3 rounded-md hover:bg-red-700 transition">
              Get a Free Quote
            </button>
          </div>
          <div className="space-y-10">
            {[
              {
                icon: <PackageCheck className="text-red-600 mt-1 w-6 h-6" />,
                title: "Safe Packing",
                desc: "Regulations must be circumvented in global supply chains.",
              },
              {
                icon: <Send className="text-red-600 mt-1 w-6 h-6" />,
                title: "Ship Everywhere",
                desc: "Regulations are frequently contested in global supply chains.",
              },
              {
                icon: <Clock className="text-red-600 mt-1 w-6 h-6" />,
                title: "In Time Delivery",
                desc: "International supply chains involve difficult regulations.",
              },
              {
                icon: <Plane className="text-red-600 mt-1 w-6 h-6" />,
                title: "Fastest Shipping",
                desc: "International supply chains are subject to stringent regulations.",
              },
            ].map((item, idx) => (
              <div className="flex items-start gap-4 " key={idx}>
                {item.icon}
                <div>
                  <p className="font-semibold text-[17px] style-font">
                    {item.title}
                  </p>
                  <p className="text-sm mt-2 text-gray-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyOutports;
