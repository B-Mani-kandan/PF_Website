const tableData = [
  {
    feature: "Definition",
    ftwz: `A designated area is treated as foreign territory for trade and warehousing. Goods can be stored, processed and distributed without attracting immediate customs duties.`,
    bonded: `A storage facility licensed by customs authorities to hold imported goods without immediate payment of duties.`,
  },
  {
    feature: "Customs Duty",
    ftwz: `Deferred until goods are moved out of the FTWZ for domestic consumption.`,
    bonded: `Deferred until the goods leave the warehouse for sale or use.`,
  },
  {
    feature: "Ownership",
    ftwz: `Goods can be owned by foreign or domestic entities, facilitating cross-border trade.`,
    bonded: `Generally owned by domestic entities with stricter ownership regulations.`,
  },
  {
    feature: "Activities Allowed",
    ftwz: `Value-added services like packaging, labeling, assembly, and minor processing are permitted.`,
    bonded: `Primarily used for storage, limited processing activities may be allowed under specific conditions.`,
  },
  {
    feature: "Inbound and Outbound Processing",
    ftwz: `Takes 3 working days for inbound and 1 working day for outbound process with less administrative burden.`,
    bonded: `Takes 5 working days for inbound and 4 working days for outbound process with difficult documentation.`,
  },
  {
    feature: "Scope",
    ftwz: `Suitable for re-exporters, global distribution, and companies requiring extensive value addition.`,
    bonded: `Ideal for companies importing goods for domestic sale or short-term storage.`,
  },
  {
    feature: "Duration of storage",
    ftwz: `Flexible storage; goods can remain for extended periods.`,
    bonded: `Restricted customs regulations; maximum tenure by jurisdiction.`,
  },
  {
    feature: "Tax Benefits",
    ftwz: `Offers tax incentives, such as exemptions on import/export duties, service tax, and sales tax.`,
    bonded: `Limited tax benefits; focused on duty deferral only.`,
  },
];

const FtwzDifference = () => {
  return (
    <div className="bg-black py-10 px-4 md:px-20">
      <p className="text-sm mt-10 text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
        FTWZ Introduction
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8">
        COMPARISON OF FTWZ AND BONDED WAREHOUSE
      </h2>

      <div className="overflow-x-auto mb-20">
        <table className="min-w-full table-auto border border-gray-500">
          <thead className=" text-gray-200 text-left">
            <tr>
              <th className="p-4 border border-gray-500">FEATURE</th>
              <th className="p-4 border border-gray-500">FTWZ</th>
              <th className="p-4 border border-gray-500">BONDED WAREHOUSE</th>
            </tr>
          </thead>
          <tbody className="text-gray-200 text-sm md:text-base">
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-black" : "bg-black"}
              >
                <td className="p-4 border border-gray-500 font-semibold">
                  {row.feature}
                </td>
                <td className="p-4 border border-gray-500">{row.ftwz}</td>
                <td className="p-4 border border-gray-500">{row.bonded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FtwzDifference;
