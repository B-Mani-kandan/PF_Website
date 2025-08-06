import Container from "../../assets/HomeImages/Container.png";
import "../HomeContent/Home.css";
import Features from "./Features";
import HomeService from "./HomeService";
import WhyOutports from "./WhyOutports";
import HomeSolution from "./HomeSolution";
import HomeWarhouse from "./HomeWarhouse";
import moreContainerSketch from "../../assets/HomeImages/moreContainerSketch.png";
import Aeroplane from "../../assets/HomeImages/AeroplaneSketch.png";
import Ship from "../../assets/HomeImages/ContShipSketch.png";
import HangCont from "../../assets/HomeImages/HangingContSketch.png";
import HomeAbout from "./HomeAbout";
import HomeGlobalReach from "./HomeGlobalReach";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <section className="hero-section">
          <div className="hero-text-left">
            <h2 className="hero-heading">
              Take Your Business <br /> to the Next Level
            </h2>
          </div>
          <div className="hero-text-right">
            <p>
              We provide complete solutions for delivering <br />
              your goods. Efficient Load Logistics Solutions <br />
              for Global Corporations
            </p>
          </div>
        </section>
        <section className="image-section">
          <img src={Container} alt="Container" className="container-image" />
        </section>
      </div>
      <div className="relative">
        <img
          src={Aeroplane}
          alt="Container Sketch"
          className="absolute bottom-35 left-0 w-[250px]  z-10 pointer-events-none"
        />
      </div>
      <div className="relative">
        <img
          src={moreContainerSketch}
          alt="Container Sketch"
          className="absolute bottom-0 right-0 w-[250px]  z-10 pointer-events-none"
        />
      </div>
      <HomeAbout />
      <WhyOutports />
      <div className="relative">
        <img
          src={Ship}
          alt="Container Sketch"
          className="absolute -bottom-20 right-0 w-[250px] pointer-events-none"
        />
      </div>
      <HomeService />
      <div className="relative">
        <img
          src={HangCont}
          alt="Container Sketch"
          className="absolute bottom-0 left-0 w-[250px] pointer-events-none"
        />
      </div>
      <Features />
      <HomeGlobalReach />
      <HomeSolution />
      <HomeWarhouse />
    </>
  );
};

export default Home;
