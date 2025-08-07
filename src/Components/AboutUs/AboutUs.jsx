import AboutUsGrid from "./AboutUsGrid";
import AboutContent from "./AboutContent";
import AboutDetailSection from "./AboutDetailSection";
import AboutHeroSection from "./AboutHeroSection";
import AboutLogistics from "./AboutLogistics";
import AboutOurTeam from "./AboutOurTeam";

const AboutUs = () => {
  return (
    <div className="bg-white w-full mt-20">
      <AboutHeroSection />
      <AboutContent />
      <AboutLogistics />
      <AboutDetailSection />
      <AboutUsGrid />
      <AboutOurTeam />
    </div>
  );
};

export default AboutUs;
