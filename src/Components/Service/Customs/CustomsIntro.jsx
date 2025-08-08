const CustomsIntro = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-16 md:px-20 mt-30 mb-10 CustomsIntro">
      <div>
        <p className="text-sm text-gray-600 uppercase tracking-widest border-l-4 border-yellow-400 pl-3 mb-4 font-medium">
          CUSTOMS Introduction
        </p>
        <h2 className="text-4xl font-bold leading-tight">
          Seamless Customs Clearance, <br />
          Powered by Professional <br />
          Freight
        </h2>
      </div>
      <div className="space-y-10">
        <div className=" pt-8">
          <p className="text-gray-600 text-xl text-justify">
            At Professional Freight, we specialize in providing seamless customs
            clearance solutions for both imports and exports. Our expert team
            handles all the paperwork, compliance checks, and duty payments to
            ensure your cargo moves smoothly across borders without unnecessary
            delays.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xl text-justify">
            From document verification to final cargo release, we take care of
            every step so you can focus on growing your business. With our
            in-depth knowledge of customs regulations and strong network of
            trusted partners, we make international trade faster, easier, and
            stress-free.
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-xl text-justify">
            Your goods, our priority — cleared with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomsIntro;
