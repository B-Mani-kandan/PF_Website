import About1 from "../../assets/About/About1.webp";
import About2 from "../../assets/About/About2.webp";
import About3 from "../../assets/About/About3.webp";

const AboutUsGrid = () => {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4 p-6  mx-auto">
      <div className="bg-lime-300 p-6 row-span-1 col-span-1 flex flex-col justify-between">
        <h2 className="text-5xl font-bold text-black">
          120K <span className="text-base  font-medium">Safely Shipped</span>
        </h2>
        <p className=" text-black font-medium text-justify">
          Over 120,000 shipments delivered safely across the globe with
          precision and care. Our secure handling, real-time tracking, and
          professional logistics ensure your cargo arrives intact and on time.
        </p>
      </div>
      <div className="col-span-1 row-span-2">
        <img
          src={About1}
          alt="Warehouse Discussion"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          src={About3}
          alt="Inspecting Boxes"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-1 row-span-1">
        <img
          src={About2}
          alt="Container Crane"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-green-900 p-6 col-span-1 row-span-1 flex flex-col justify-between text-white h-full">
        <h2 className="text-5xl font-bold">
          40K <span className="text-base font-medium">Company We Helped</span>
        </h2>
        <p className="font-medium text-justify">
          We’ve helped over 40,000 companies streamline their logistics and
          shipping operations. From small businesses to large enterprises, our
          tailored freight solutions drive global success.
        </p>
      </div>
    </section>
  );
};

export default AboutUsGrid;
