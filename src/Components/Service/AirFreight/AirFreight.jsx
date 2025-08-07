import AirFAQ from "./AirFAQ";
import AirFreightHome from "./AirFreightHome";
import AirServiceGrid from "./AirServiceGrid";
import AirTimeline from "./AirTimeline";
import AirWhyChooseUs from "./AirWhyChooseUs";

const AirFreight = () => {
  return (
    <div>
      <AirFreightHome />
      <AirWhyChooseUs />
      <AirServiceGrid />
      <AirTimeline />
      <AirFAQ />
    </div>
  );
};

export default AirFreight;
