import AboutUsGrid from "./AboutUsGrid";
import AboutContent from "./AboutContent";
import AboutDetailSection from "./AboutDetailSection";
import AboutHeroSection from "./AboutHeroSection";
import AboutLogistics from "./AboutLogistics";

const AboutUs = () => {
  return (
    <div className="bg-white w-full mt-20">
      <AboutHeroSection />
      <AboutContent />
      <AboutLogistics />
      <AboutDetailSection />
      <AboutUsGrid />
    </div>
  );
};

export default AboutUs;
