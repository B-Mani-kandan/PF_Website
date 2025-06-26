import shipImage from "../../assets/HomeImages/ShippingContainer.jpg";

const HomeSolution = () => {
  return (
    <div className="py-20 px-6 md:px-16 font-poppins">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
        <div>
          <div className="text-xs inline-block bg-[#f2e9e1] text-[#7d5a45] px-4 py-1 rounded-full mb-4">
            Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold style-font">
            Smart solutions to simplify <br /> your supply chain
          </h2>
        </div>
        <p className="text-gray-600 max-w-xl mt-6 md:mt-0 text-sm leading-relaxed">
          Revolutionizing the way you manage logistics, our smart solutions
          streamline your supply chain, enhancing efficiency, reducing costs,
          and ensuring seamless operations from start to finish.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#ba427a] p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden relative">
          <div className="mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-100/20 flex items-center justify-center">
              📦
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-semibold text-white mb-2 font-style">
              Supply Chain
            </h3>
            <p className="text-sm text-white">
              By leveraging innovative strategies and cutting-edge technology.
              We help streamline supply chain operations.
            </p>
          </div>
        </div>
        <div className="bg-[#786fc7] text-white p-6 rounded-xl transform transition-transform duration-300 hover:scale-105 overflow-hidden relative">
          <div className="mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-100/20 flex items-center justify-center text-white">
              🧾
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-semibold mb-2 font-style">
              Customs Clearance
            </h3>
            <p className="text-sm">
              Navigating the complexities of customs clearance with ease. We
              ensure your shipments meet all legal requirements.
            </p>
          </div>
        </div>
        <div
          className="relative rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
          style={{
            backgroundImage: `url(${shipImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "300px",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 text-white p-5  transition duration-300">
            <h3 className="text-lg font-semibold mb-1 font-style">
              International Shipping
            </h3>
            <p className="text-sm">
              Our logistics company is committed to transforming the
              transportation of goods. Our expert team handles every step of the
              process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSolution;
