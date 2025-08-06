import collageImage from "../../../assets/Service/Transportation/ShipSplitImage.png"; // adjust path as needed

const content = [
  {
    title: "FCL (Full Container Load)",
    text: "Ideal for large shipments requiring exclusive container use. Ensures faster transit and reduced handling.",
  },
  {
    title: "LCL (Less than Container Load)",
    text: "Best for smaller cargo sharing space with others. Cost-effective and flexible global shipping option.",
  },
  {
    title: "Port-to-Port",
    text: "Efficient delivery between major seaports worldwide. Suitable for businesses managing inland logistics.",
  },
  {
    title: "Customs Clearance",
    text: "Expert handling of import/export documentation. Ensures regulatory compliance and smooth cargo flow.",
  },
];

const AboutUsSection = () => {
  return (
    <>
      <div className="bg-black mt-20 text-white px-6 py-16 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            CORE SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Built on <span className="text-orange-500">Values</span>,<br />
            Anchored for excellence
          </h2>

          <div className="mt-10 space-y-8">
            {content.map((item, index) => (
              <div
                key={index}
                className="group transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 transition">
                    <svg
                      className="w-3 h-3 text-orange-500 group-hover:text-white transition"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="group-hover:text-orange-500 transition">
                    {item.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed group-hover:text-orange-400 transition">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3">
          <img
            src={collageImage}
            alt="Container Grid Collage"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsSection;
