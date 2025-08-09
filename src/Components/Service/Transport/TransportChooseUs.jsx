import teamImg from "../../../assets/Service/Transportation/UnParrallel.webp";
import deliveryImg from "../../../assets/Service/Transportation/Delivery.webp";
import { FaCheckCircle } from "react-icons/fa";

const TransportChooseUs = () => {
  return (
    <div className="bg-[#0d2d42] text-white py-20 px-6 md:px-16 mt-25">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={deliveryImg}
            alt="Delivery"
            className="rounded-lg w-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-sm text-gray-500 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Delivery On Time And <br /> With Satisfaction
            </h2>
            <p className="text-gray-300 mb-3">
              We specialize in reliable, efficient, and cost-effective
              transportation solutions tailored to meet the unique needs of our
              clients. Whether it's freight logistics, cargo transport, or
              passenger services, our modern fleet and experienced team ensure
              safe and timely deliveries.
            </p>
            <p className="text-gray-300 mb-6">
              Transportation solutions tailored to meet the unique needs of our
              clients. Whether it's freight logistics, cargo transport, or
              passenger services, our modern fleet and experienced team.
            </p>
            <div className="flex gap-10 text-white text-lg font-medium">
              <div>
                <span className="text-2xl font-bold text-yellow-300">25%</span>
                <br />
                Increase in Retention
              </div>
              <div>
                <span className="text-2xl font-bold text-yellow-300">1.7+</span>
                <br />
                User Base Growth
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              The Unparalleled Benefits
            </h2>
            <p className="text-gray-300 mb-8">
              Transportation solutions tailored to meet the unique needs of our
              clients. Whether it's freight logistics, cargo transport, or
              passenger services, our modern fleet and experienced team.
            </p>
            <ul className="space-y-5 text-gray-100">
              {[
                "Experience And Expertise",
                "Reliability and Consistency",
                "Competitive Pricing and Value",
                "Client Testimonial’s & Success Stories",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-white" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={teamImg}
            alt="Team"
            className="rounded-lg w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportChooseUs;
