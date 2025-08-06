import SeaFreightHome from "./SeaFreightHome";
import SeaFreightAbout from "./SeaFreightAbout";
import SeaWhyChooseUs from "./SeaWhyChooseUs";
import SeaHowItWorks from "./SeaHowItWorks";
import SeaFAQ from "./SeaFAQ";

const SeaFreight = () => {
  return (
    <div className="bg-white w-full mt-17">
      <SeaFreightHome />
      <SeaWhyChooseUs />
      <SeaFreightAbout />
      <SeaHowItWorks />
      <SeaFAQ />
    </div>
  );
};

export default SeaFreight;
