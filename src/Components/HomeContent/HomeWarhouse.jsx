import Warhouse from "../../assets/HomeImages/Warhouse.webp";

const HomeWarhouse = () => {
  return (
    <div className="py-20 px-6 md:px-16 text-center">
      <h3 className="text-3xl md:text-4xl font-semibold style-font mb-10">
        Optimize logistics through smart warehouse{" "}
        <br className="hidden md:block" />
        and supply chain control
      </h3>
      <div className="flex justify-center">
        <img src={Warhouse} alt="Warehouse" />
      </div>
    </div>
  );
};

export default HomeWarhouse;
