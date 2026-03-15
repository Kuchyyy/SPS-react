const OfferSVG = ({ variant }: { variant: "bottom" | "middle" | "top" }) => {
  const blueColor = "#00629C";
  const whiteColor = "#ffffff";

  const getBottomFill = () => variant === "bottom" ? blueColor : whiteColor;
  const getMiddleFill = () => variant === "middle" ? blueColor : whiteColor;
  const getTopFill = () => variant === "top" ? blueColor : whiteColor;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={getBottomFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 186 L 87 205 L 150 224 L 213 205 Z"
      />
      <path
        fill={getBottomFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 87 205 L 60 251 L 150 278 L 150 224 Z"
      />
      <path
        fill={getBottomFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 224 L 150 278 L 240 251 L 213 205 Z"
      />

      <path
        fill={getMiddleFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 139 L 119 149 L 150 158 L 181 149 Z"
      />
      <path
        fill={getMiddleFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 119 149 L 92 195 L 150 212 L 150 158 Z"
      />
      <path
        fill={getMiddleFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 158 L 150 212 L 208 195 L 181 149 Z"
      />

      <path
        fill={getTopFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 92 L 123 138 L 150 146 Z"
      />
      <path
        fill={getTopFill()}
        stroke="#111"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M 150 92 L 150 146 L 177 138 Z"
      />
    </svg>
  );
};

const tabs = [
  {
    title: "Projektujemy",
    desc: "Tworzymy profesjonalne projekty instalacji, dostosowane do potrzeb i wymagań klientów.",
  },
  {
    title: "Wykonujemy",
    desc: "Realizujemy zadania w oparciu o najnowsze technologie, gwarantując solidne wykonanie.",
  },
  {
    title: "Serwisujemy",
    desc: "Zapewniamy wsparcie i konserwację, aby Twoje instalacje działały bez zakłóceń.",
  },
];

const Offer = () => {
  return (
    <section id="oferta" className="w-full bg-stone-100">
      <div className="maxw  pt-10">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-poppins tracking-tight text-soft-black ">
              Działamy dla Ciebie
            </h1>
          </div>

          <div className="max-w-xl ">
            <p className="text-sm  text-soft-black/60 font-poppins font-light tracking-tight">
              Tworzymy, instalujemy i utrzymujemy. Zawsze stawiamy na najwyższą
              jakość, realizując projekty zgodnie z ustalonym harmonogramem i
              budżetem.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0 lg:maxw lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="shrink-0 w-[300px] lg:w-auto rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full rounded-sm bg-neutral-200 overflow-hidden flex items-center justify-center">
                <OfferSVG variant={index === 0 ? "bottom" : index === 1 ? "middle" : "top"} />
              </div>

              <div className="py-3 flex flex-col gap-2">
                <h3 className="text-base font-poppins tracking-tight text-soft-black font-light">
                  {tab.title}
                </h3>
                <p className="text-sm text-soft-black/60 font-poppins font-light tracking-tight">
                  {tab.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
