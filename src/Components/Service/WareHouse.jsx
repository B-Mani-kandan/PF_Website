import WareHouseImg from "../../assets/Service/WareHouse/WareHouseImg.webp";
import WareHouseStore from "../../assets/Service/WareHouse/WareHouseBG.webp";
import WareHouseLoading from "../../assets/Service/WareHouse/WareVechicleLoading.webp";
import CargoImage from "../../assets/Service/WareHouse/WareHouseVechicle.webp";
import LoadingTruck from "../../assets/Service/WareHouse/TruckPFL.webp";
import WareHouseCard1 from "../../assets/Service/WareHouse/WareHouseCard1.webp";
import WareHousecard3 from "../../assets/Service/WareHouse/WareHouseCard3.webp";
import { Link } from "react-scroll";
const WareHouse = () => {
  return (
    <>
      <div className="flex flex-col mt-6 md:flex-row items-center justify-between min-h-screen bg-gray-50 py-20 px-6 md:px-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 style-font">
            Dynamic <br />
            <span>Warehousing Solutions</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            We offer scalable and flexible warehousing services tailored to meet
            the evolving needs of your business. Whether you're managing
            seasonal inventory, eCommerce fulfillment, or long-term storage, our
            dynamic warehousing solutions ensure efficiency, security, and
            real-time visibility.{" "}
          </p>
          <div className="flex gap-4">
            <Link
              to="bondWarehouse"
              smooth={true}
              offset={-40}
              duration={2000}
              href="#explore"
              className="border border-red-600 text-red-600 px-5 py-2 rounded hover:bg-red-600 hover:text-white transition"
            >
              Explore WareHousing
            </Link>
          </div>
        </div>
        <div className="overflow-hidden">
          <img src={WareHouseImg} alt="warehouseimage" />
        </div>
      </div>
      <div className="flex flex-col py-20 px-6 md:px-16 md:flex-row items-center justify-between p-8 bg-white min-h-screen bondWarehouse">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
          <img
            src={WareHouseLoading}
            alt="Bonded Warehouse"
            className="w-full h-auto "
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 style-font">
            Bonded Warehousing
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A bonded warehouse is a secure storage facility authorized by
            customs where imported goods can be stored without immediate payment
            of duties. This provides businesses with financial and operational
            flexibility.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>
              📦 Duty Deferment – Customs duties are paid only when goods are
              released.
            </li>
            <li>
              🚛 Ideal for Re-exports – Goods can be stored and exported without
              incurring local duties.
            </li>
            <li>
              🔐 Secure Storage – Monitored and regulated by customs authorities
              for added protection.
            </li>

            <li>
              🕒 Long-Term Storage – Goods can typically be stored for up to 5
              years.
            </li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen bg-[#0b0f19] mt-6 text-white px-6 py-12 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-gray-400 mb-3">How can you solve it?</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-500">Professional Freight</span>{" "}
              automates tasks and delivers real-time insights.
            </h1>
            <p className="text-gray-300 mt-6 text-lg">
              Professional Freight automates your repetitive tasks, integrates
              seamlessly with your existing tools, and provides real-time
              analytics for informed decision-making.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={WareHouseStore}
              alt="Professional Freight Warehouse"
              className="w-full max-w-xl"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 ">
          <div>
            <div className="text-green-400 text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Automate workflows</h3>
            <p className="text-gray-400">
              Eliminate manual task management and reduce errors. Professional
              Freight streamlines your processes, so you can focus on what truly
              matters.
            </p>
          </div>
          <div>
            <div className="text-green-400 text-3xl mb-4">💲</div>
            <h3 className="text-xl font-semibold mb-2">
              Work smarter, not harder
            </h3>
            <p className="text-gray-400">
              Professional Freight seamlessly integrates with your tools to
              simplify complex workflows, ensuring deadlines are met and
              productivity soars.
            </p>
          </div>
          <div>
            <div className="text-green-400 text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">
              Real-time insights, better decisions
            </h3>
            <p className="text-gray-400">
              Make informed choices with Professional Freight analytics,
              designed to transform chaos into clarity and boost your
              productivity by up to 30%.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 px-6 mt-8 md:px-16 font-poppins">
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold style-font">
              All-In One Solution For <br /> Everyone
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl mt-6 md:mt-0 text-sm leading-relaxed">
            Automate repetitive tasks, integrate seamlessly with your tools, and
            access real-time insights to optimize every step of your process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="relative rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${WareHouseCard1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 text-white p-5  transition duration-300">
              <h3 className="text-lg font-semibold mb-1 font-style">
                Warehousing Services
              </h3>
              <p className="text-sm">
                More than mere storage, our expertly designed warehouses ensure
                your products maintain a seamless flow through the supply chain,
                moving at the speed you prefer.
              </p>
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${LoadingTruck})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 text-white p-5  transition duration-300">
              <h3 className="text-lg font-semibold mb-1 font-style">
                Distribution Services
              </h3>
              <p className="text-sm">
                Our distribution network seamlessly integrates with our
                warehouses, ensuring your products reach their final
                destinations-be it a distribution centre, wholesaler, retail
                store, or the end consumer.
              </p>
            </div>
          </div>
          <div
            className="relative rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${WareHousecard3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 text-white p-5  transition duration-300">
              <h3 className="text-lg font-semibold mb-1 font-style">
                Value Added Services
              </h3>
              <p className="text-sm">
                Save time and costs with on-the-go customisation. Our warehouse
                operations offer a wide range of value added services, from
                co-packing and labelling to product customisation and late
                localisation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-start px-4 py-10 mb-10 md:mb-20">
        <div className="text-center max-w-3xl mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight style-font">
            Full Sustainable <br /> Cargo Solution
          </h1>
          <p className="text-gray-600 mb-6">
            We Continue To Pursue That Same Vision In Today’s Complex, Uncertain
            World, Working Every Day To Earn Our Customers’
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={CargoImage}
            alt="Cargo Illustration"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default WareHouse;
