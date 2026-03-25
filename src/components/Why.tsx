const reasons = [
  {
    title: "Precyzja i jakość",
    desc: "Dbamy o najwyższą jakość wykonania, używając sprawdzonych materiałów i technologii.",
  },
  {
    title: "Terminowość",
    desc: "Realizujemy projekty zgodnie z ustalonym harmonogramem, bez opóźnień.",
  },
  {
    title: "Doświadczenie",
    desc: "Posiadamy wieloletnie doświadczenie w branży, co gwarantuje solidność i niezawodność.",
  },
  {
    title: "Nowoczesne technologie",
    desc: "Wykorzystujemy innowacyjne rozwiązania, by zapewnić trwałość i efektywność realizacji.",
  },
  {
    title: "Indywidualne podejście",
    desc: "Każdy projekt dostosowujemy do potrzeb klienta, oferując najlepsze rozwiązania.",
  },
  {
    title: "Bezpieczeństwo",
    desc: "Pracujemy zgodnie z obowiązującymi normami i przepisami, dbając o bezpieczeństwo.",
  },
];

const Why = () => {
  return (
    <section className="w-full bg-stone-100 py-20">
      <div className="maxw">
        <div className="flex flex-col gap-1 mb-8">

          <h1 className="text-2xl font-poppins tracking-tight text-soft-black">
            Postaw na <br /> doświadczenie
          </h1>
          <p className="text-sm font-poppins text-soft-black/70 leading-relaxed max-w-2xl font-light">
            Skupiamy się na dostarczaniu wartości, która od razu robi różnicę.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 pl-4 pr-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 ">
            {reasons.map((item, index) => {
              const isActive = index === 0;
              return (
                <div key={index} className="relative py-10 p-6 pl-2 shrink-0 w-[280px] md:w-auto">
                  <div className="absolute left-0.5 top-3 -translate-y-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-5 h-5 rounded-full ${isActive
                        ? "bg-blue-900/30 animate-pulse-sps"
                        : "bg-gray-400 opacity-30 "
                        }`}
                    ></div>
                    <div
                      className={`absolute w-1.75 h-1.75 rounded-full ${isActive
                        ? "bg-blue-900"
                        : "bg-gray-400"
                        }`}
                    ></div>
                  </div>
                  <div className="absolute left-[24px] top-3 right-0 h-[1px] bg-gray-300"></div>
                  <h2 className="text-base font-poppins font-light tracking-tight text-soft-black mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-soft-black/60 font-poppins font-light tracking-tight">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
};

export default Why;
