// import About_img from "../../assets/HomeImages/CollabAboutImg.png";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const HomeAbout = () => {
//   return (
//     <div className="about">
//       <div className="about-left">
//         <div className="line"></div>
//         <div className="about-heading" data-aos="fade-right">
//           <h3>Leading companies trust us</h3>
//           <h2>to develop software</h2>
//         </div>

//         <p>
//           We<span className="about-content">add development capacity </span>to
//           tech teams. Our value isn’t limited to building teams but is equally
//           distributed across the project lifecycle. We are a custom software
//           development company that guarantees the successful delivery of your
//           project.
//         </p>
//         <p className="moreinfo">
//           <Link className="a-link" to="/More-Info">
//             See more Information
//             <ArrowRight className="Rightarrow" />
//           </Link>
//         </p>
//       </div>
//       <div className="about-right" data-aos="zoom-in">
//         <img src={About_img} className="about-img" alt="" />
//       </div>
//     </div>
//   );
// };

// export default HomeAbout;

import About_img from "../../assets/HomeImages/CollabAboutImg.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeAbout = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
      {/* Left - Image */}
      <div className="w-full md:w-1/2" data-aos="zoom-in">
        <img
          src={About_img}
          alt="About"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
        <div>
          <div className="text-xs inline-block bg-[#f2e9e1] text-[#7d5a45] px-4 py-1 rounded-full mb-5">
            About Us
          </div>
          <h3 className="text-3xl md:text-4xl font-bold style-font mb-4">
            Reliable Freight & Logistics Partner
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-2">
          Founded in 2001 in Chennai, Professional Freight Logistics (PFL) is a
          trusted provider of end-to-end logistics solutions for all types of
          inbound and outbound cargo.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We specialize in delivering flexible and timely services tailored to
          each client’s unique needs—across sea and air routes. Our dedicated
          team of professionals ensures reliable, cost-effective operations,
          earning us long-term relationships with satisfied customers across
          India and beyond.
        </p>
        <p className="text-sm">
          <Link
            to="/More-Info"
            className="style-font font-semibold inline-flex items-center group"
          >
            See more Information{" "}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeAbout;
