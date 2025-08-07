import FtwzDifference from "./FtwzDifference";
import FtwzHome from "./FtwzHome";
import FtwzIntro from "./FtwzIntro";
import FtwzValues from "./FtwzValues";
import FtwzWhyChooseUs from "./FtwzWhyChooseUs";

const FTWZ = () => {
  return (
    <div className="bg-white w-full mt-17">
      <FtwzHome />
      <FtwzIntro />
      <FtwzValues />
      <FtwzDifference />
      <FtwzWhyChooseUs />
    </div>
  );
};

export default FTWZ;
