import ShipImage1 from "../../../assets/Service/Transportation/Ship1.webp";
import ShipImage2 from "../../../assets/Service/Transportation/Ship2.webp";
import ShipImage3 from "../../../assets/Service/Transportation/Ship3.webp";
import ShipImage4 from "../../../assets/Service/Transportation/Ship4.webp";
const SeaHowItWorks = () => {
  const data = [
    {
      step: 1,
      title: "Submit Enquiry",
      description:
        "Provide shipment details such as origin, destination, cargo type, and preferred timelines. Our team reviews the information to understand your exact needs and prepare for the next steps efficiently.",
    },
    {
      step: 2,
      title: "Receive Quote",
      description:
        "Based on your enquiry, we share a detailed and transparent quotation. It includes freight charges, estimated delivery times, and any additional services required for smooth logistics operations.",
    },
    {
      step: 3,
      title: "Cargo Pickup / Container Loading",
      description:
        "We schedule pickup from your location and ensure cargo is safely packed and loaded. Our logistics partners handle containers professionally, minimizing damage and ensuring optimal space usage.",
    },
    {
      step: 4,
      title: "Customs Clearance",
      description:
        "All necessary customs documentation and regulatory compliance are managed by our experts. We coordinate with authorities to ensure cargo passes borders quickly without delays or penalties.",
    },
    {
      step: 5,
      title: "Tracking & Updates",
      description:
        "You receive regular updates and full tracking visibility. Our platform provides real-time insights into shipment status, route progress, and expected delivery schedules for transparency.",
    },
    {
      step: 6,
      title: "Delivery to Final Destination",
      description:
        "Once customs are cleared, the shipment is delivered to the final destination. We coordinate last-mile delivery with precision and confirm successful handover of goods upon arrival.",
    },
  ];

  return (
    <>
      <section className="py-20 px-6 md:px-16 mt-15 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="images">
              <img
                src={ShipImage1}
                data-aos="fade-up-right"
                alt="sea"
                className="image"
              />
              <img
                src={ShipImage2}
                data-aos="fade-up-left"
                alt="sea"
                className="image"
              />
              <img
                src={ShipImage3}
                data-aos="fade-up-right"
                alt="sea"
                className="image"
              />
              <img
                src={ShipImage4}
                data-aos="fade-up-left"
                alt="sea"
                className="image"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-8 ml-3 font-medium">
              HOW IT WORKS
            </p>
            <ol className="space-y-8">
              {data.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-gray-300">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 style-font">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 text-justify">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeaHowItWorks;
