import { useState, useEffect, useRef } from "react";
import { FileText, Wrench, Settings, Star, ChevronUp } from "lucide-react";

const tabs = [
  {
    title: "Projektujemy",
    desc: "Tworzymy profesjonalne projekty instalacji, dostosowane do potrzeb i wymagań klientów.",
    icon: <FileText className="w-8 h-8 text-blue-900" />,
    img: "/photos/projektujemy.png",
  },
  {
    title: "Wykonujemy",
    desc: "Realizujemy zadania w oparciu o najnowsze technologie, gwarantując solidne wykonanie.",
    icon: <Wrench className="w-8 h-8 text-blue-900" />,
    img: "/photos/wykonujemy.png",
  },
  {
    title: "Serwisujemy",
    desc: "Zapewniamy wsparcie i konserwację, aby Twoje instalacje działały bez zakłóceń.",
    icon: <Settings className="w-8 h-8 text-blue-900" />,
    img: "/photos/serwisowanie.png",
  },
];

const Offer = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = (index: number) => {
    setActive(index);
    startAutoSlide();
  };

  return (
    <section id="oferta" className="py-20 bg-stone-100">
      <div className="max-w-[1440px] w-[90%] mx-auto">
  
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold shadow-md">
            <Star className="w-4 h-4" />
            OFERTA
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-satoshi text-gray-900 uppercase">
            Działamy dla Ciebie
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg font-satoshi-medium">
            Tworzymy, instalujemy i utrzymujemy. Zawsze stawiamy na najwyższą
            jakość, realizując projekty zgodnie z ustalonym harmonogramem i
            budżetem.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-6 items-stretch">
    
          <div className="flex justify-center items-center order-1 lg:order-2 col-span-3 h-[300px] lg:h-[484px]">
            <img
              key={tabs[active].img}
              src={tabs[active].img}
              alt={tabs[active].title}
              className="rounded-2xl shadow-lg w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>

    
          <div className="flex flex-col gap-4 order-2 lg:order-1 col-span-2 w-full h-[420px] sm:h-[500px] lg:h-[484px] mt-3 lg:mt-0">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer rounded-xl border shadow-md p-5 flex-1 relative transition ${
                  active === index
                    ? "bg-white border-blue-900 border-1 shadow-lg"
                    : "bg-gray-50 hover:bg-white"
                }`}
              >
                
                <div className="flex items-start justify-between">
                  <div className="flex sm:flex-col flex-row">
                    {tab.icon}
                    <h3 className="text-2xl font-robert-medium mt-1 uppercase px-4 sm:px-0">
                      {tab.title}
                    </h3>
                  </div>
                  <ChevronUp
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`absolute left-0 right-0 bottom-0 p-5 py-3 sm:py-5 text-gray-600 text-sm transition-all duration-500 transform ${
                    active === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {tab.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
