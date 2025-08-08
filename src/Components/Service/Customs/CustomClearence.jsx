import CustomsFAQ from "./CustomsFAQ";
import CustomsHero from "./CustomsHero";
import CustomsIntro from "./CustomsIntro";
import CustomsWhatWeDo from "./CustomsWhatWeDo";

const CustomClearence = () => {
  return (
    <div className="bg-white w-full mt-17">
      <CustomsHero />
      <CustomsIntro />
      <CustomsWhatWeDo />
      <CustomsFAQ />
    </div>
  );
};

export default CustomClearence;
