import TransportHome from "./TransportHome";
import TransportChooseUs from "./TransportChooseUs";
import TransportFeatures from "./TransportFeatures";
import SafeTransportSection from "./SafeTransportSection";

const Transportation = () => {
  return (
    <>
      <div className="bg-white w-full ">
        <TransportHome />
        <SafeTransportSection />
        <TransportChooseUs />
        <TransportFeatures />
      </div>
    </>
  );
};

export default Transportation;
