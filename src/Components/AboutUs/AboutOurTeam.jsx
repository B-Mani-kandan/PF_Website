const teamMembers = [
  {
    name: "Marie Louise",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Miguel Ángel",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Francesco Paolo",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sven Erik",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

const AboutOurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-20 md:mt-20 md:mb-30 bg-white">
      <div className=" mb-12">
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          OUR TEAM
        </p>
        <p className="text-sm uppercase font-semibold text-gray-700 tracking-widest"></p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Meet Our Dedicated Logistics Experts
        </h2>
        <p className="mt-4 text-lg text-gray-500  mx-auto">
          Introducing our committed team ensuring seamless logistics solutions
          with expertise and unwavering dedication.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutOurTeam;
