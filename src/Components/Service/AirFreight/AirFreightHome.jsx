import Air1 from "../../../assets/Service/Transportation/Air3.jpg";
import Air2 from "../../../assets/Service/Transportation/Air2.jpg";
const AirFreightHome = () => {
  return (
    <div className="talented-people">
      <div className="text-container">
        <h1 data-aos="slide-up" className="style-font font-medium">
          Fast, reliable, and secure global air cargo solutions.
        </h1>
        <p data-aos="fade-up" className="text-gray-600">
          We specialize in time-critical and high-value shipments, ensuring your
          goods reach their destination on schedule with real-time tracking and
          expert customs handling.
        </p>
      </div>
      <div className="DGimage-container">
        <div className="DGimage-card" data-aos="fade-left">
          <img src={Air1} alt="Talented person 1" />
        </div>
        <div className="DGimage-card" data-aos="fade-right">
          <img src={Air2} alt="Talented person 2" />
          <p data-aos="fade-up" className="text-gray-600 mt-12 text-justify">
            Our Air Freight Services offer fast, reliable, and secure
            transportation of goods across international and domestic locations.
            Whether it's urgent documents, high-value cargo, or time-sensitive
            shipments, we ensure timely delivery through our global airline
            network. With partnerships across major carriers, we provide
            flexible options including express, standard, and chartered
            services.
          </p>
          <p data-aos="fade-up" className="text-gray-600 mt-8 text-justify">
            From airport-to-airport to complete door-to-door logistics, we
            handle it all. Our experienced team manages everything from pickup,
            packaging, documentation, to customs clearance. Real-time tracking
            ensures full visibility of your cargo throughout its journey. Choose
            us for seamless, efficient air shipping that meets your business
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AirFreightHome;
