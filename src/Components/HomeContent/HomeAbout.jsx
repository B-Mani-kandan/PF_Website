import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="max-w-7xl mt-20 mx-auto px-6 py-16 md:px-20 grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-7 font-medium">
          ABOUT US
        </p>
        <h2 className="text-5xl font-bold leading-tight style-font">
          Your Trusted <br />
          Cargo Logistics <br />
          Partner
        </h2>
        <p className="text-gray-500 text-lg">
          Reliable, efficient cargo logistics services tailored to meet your
          needs, ensuring timely delivery and customer satisfaction.
        </p>
        <Link
          to="/About-Us"
          className="mt-4 px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition rounded"
        >
          Learn More
        </Link>
      </div>
      <div className="flex flex-col justify-between h-full space-y-10">
        <p className="text-gray-500 text-xl leading-relaxed font-semibold">
          Welcome to our Professional Freight logistics services, where we're
          dedicated to being your trusted partner for efficient, secure, and
          reliable transportation solutions.{" "}
          <span className="text-[#253c6a]  font-bold">
            Count on us for seamless operations and peace of mind, ensuring your
            cargo reaches its destination safely and on time. Experience
            excellence with our comprehensive logistics expertise.
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-6xl font-bold style-font">1000+</h3>
            <p className="text-gray-500">Customers worldwide</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold style-font">100%</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold style-font">24+</h3>
            <p className="text-gray-500">Years experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
