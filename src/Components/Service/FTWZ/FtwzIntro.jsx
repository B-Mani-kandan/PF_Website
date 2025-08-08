const FtwzIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mb-15 FTWZIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          FTWZ Introduction
        </p>
        <h2 className="text-5xl font-bold leading-tight">
          A Gateway to Global <br />
          Supply Chain <br />
          Excellence
        </h2>
      </div>
      <div className="space-y-10">
        <div className=" pt-8">
          <p className="text-gray-600 text-xl text-justify">
            Free Trade Warehousing Zones (FTWZ) are specially designated areas
            that function as foreign territories for trade, governed by SEZ
            rules. At Professional Freight Logistics, we offer FTWZ services to
            simplify international logistics and provide a competitive edge in
            cross-border trade.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xl text-justify">
            Our FTWZ facilities are strategically located near major ports and
            airports, allowing faster customs clearance, reduced cargo holding
            time, and direct deliveries without delays. The model operates in
            freely convertible currency (FOREX), helping businesses save
            significantly on customs duties and interest costs.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xl text-justify">
            FTWZ also supports a range of value-added services such as
            packaging, labeling, kitting, and re-exporting—all within a single
            integrated zone. This makes it a cost-effective solution for
            companies seeking efficient supply chain and distribution management
            without the burden of setting up their own infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FtwzIntro;
