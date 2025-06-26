import ContainerSketch from "../../assets/HomeImages/SketchContainer.png";

const Features = () => {
  return (
    <section className=" py-20 px-6 md:px-10 font-sans">
      <div className="max-w-7xl border-t  border-b border-[#e5dcd3] mx-auto flex flex-col md:flex-row">
        <div className="flex flex-col border-r  border-[#e5dcd3] w-full md:w-1/2">
          <div className="  border-b border-[#e5dcd3] p-6 md:p-10">
            <div className="text-xs inline-block bg-[#f2e9e1] text-[#7d5a45] px-4 py-1 rounded-full mb-4">
              Working Process
            </div>
            <h2 className="text-2xl font-extrabold mb-2 style-font">
              Safe transport
            </h2>
            <p className="text-gray-600 ">
              Safe Transport ensures your goods are delivered securely and on
              time. With advanced tracking and expert handling, your cargo is
              always in safe hands. Reliability, safety, and speed — that’s our
              promise.
            </p>
            <div className="mt-4 mb-2">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🚚</span>
                <p className="text-gray-700">
                  We ensure on-time delivery across domestic and international
                  routes.
                </p>
              </div>
              <div className="flex items-start mt-3 gap-4">
                <span className="text-2xl">🛡️</span>
                <p className="text-gray-700">
                  All cargo is covered with comprehensive insurance for peace of
                  mind.
                </p>
              </div>
            </div>
          </div>
          <div className="  border-[#e5dcd3] p-6 md:p-10">
            <h2 className="text-2xl font-extrabold mb-2 style-font">
              Worldwide locations
            </h2>
            <p className="text-gray-600">
              With a global presence, we connect businesses across continents.
              Our network spans major ports, cities, and trade routes worldwide.
              No matter where your cargo needs to go, we’ve got it covered.
              Experience seamless logistics through our trusted international
              reach.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className=" border-b border-[#e5dcd3] p-6 md:p-10">
            <h2 className="text-2xl font-extrabold mb-1 style-font">
              On time delivery
            </h2>
            <p className="text-sm text-gray-500 mb-3 ">2500 Items Delivered</p>
            <img
              src={ContainerSketch}
              alt="Container Sketch"
              className="w-full max-w-md object-contain mt-4"
            />
          </div>
          <div className=" border-[#e5dcd3] p-6 md:p-10">
            <h2 className="text-2xl font-extrabold mb-1 style-font">10,000+</h2>
            <p className="text-sm text-gray-500">Efficient Cargo Handling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
