import { motion } from "framer-motion";
import Image from "../../assets/HomeImages/ShippingContainer.jpg";

const timelineData = [
  {
    year: "2019",
    title: "Achieving 99.9% On-Time Delivery Rate",
    description:
      "Exceeding expectations with a 99.9% on-time delivery rate, we ensure reliability and efficiency in every shipment, guaranteeing customer satisfaction.",
    image: Image,
  },
  {
    year: "2020",
    title: "Expanding Global Reach to 50+ Countries",
    description:
      "Our global expansion now reaches over 50 countries, offering seamless logistics solutions around the world.",
    image: Image,
  },
  {
    year: "2021",
    title: "Improving Delivery Chain Speed by 40%",
    description:
      "Optimized routes and smart technologies allowed us to reduce delivery times by 40%.",
    image: Image,
  },
  {
    year: "2022",
    title: "Reducing Carbon Footprint by 30%",
    description:
      "Through green initiatives and eco-friendly fleets, we reduced our carbon footprint significantly.",
    image: Image,
  },
];

const AboutDetailSection = () => {
  return (
    <section className="bg-gray-100 lg:px-16 px-6 py-16 md:px-20 mb-30">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="space-y-6 sticky top-40 h-fit self-start">
          <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
            ACCOMPLISHMENT
          </p>
          <h2 className="text-5xl font-bold leading-tight">
            Revolutionizing <br /> Global Logistics
          </h2>
          <p className="text-gray-500 text-lg">
            Revolutionizing global logistics with innovative solutions, we're
            shaping the future of transportation with cutting-edge technology
            and seamless operations.
          </p>
        </div>
        <div className="flex flex-col space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="px-8 py-6 bg-white border-t-4 border-red-600 shadow-xl rounded-xl max-w-xl w-full"
            >
              <h3 className="text-2xl font-bold">{item.year}</h3>
              {item.title && (
                <p className="mt-2 text-lg font-medium">{item.title}</p>
              )}
              {item.image && (
                <img
                  src={item.image}
                  alt={`${item.year} visual`}
                  className="mt-4 w-full object-cover max-h-60 rounded"
                />
              )}
              {item.description && (
                <p className="mt-2 text-gray-600">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDetailSection;
