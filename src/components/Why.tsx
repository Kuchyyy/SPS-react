import { useEffect, useRef, useState } from "react";
import { Star, CheckCircle, Clock, Award, Cpu, Users, Shield } from "lucide-react";


const reasons = [
  {
    title: "Precyzja i jakość",
    desc: "Dbamy o najwyższą jakość wykonania, używając sprawdzonych materiałów i technologii.",
    number: "1",
    icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Terminowość",
    desc: "Realizujemy projekty zgodnie z ustalonym harmonogramem, bez opóźnień.",
    number: "2",
    icon: <Clock className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Doświadczenie",
    desc: "Posiadamy wieloletnie doświadczenie w branży, co gwarantuje solidność i niezawodność.",
    number: "3",
    icon: <Award className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Nowoczesne technologie",
    desc: "Wykorzystujemy innowacyjne rozwiązania, by zapewnić trwałość i efektywność realizacji.",
    number: "4",
    icon: <Cpu className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Indywidualne podejście",
    desc: "Każdy projekt dostosowujemy do potrzeb klienta, oferując najlepsze rozwiązania.",
    number: "5",
    icon: <Users className="w-8 h-8 text-blue-900" />,
  },
  {
    title: "Bezpieczeństwo",
    desc: "Pracujemy zgodnie z obowiązującymi normami i przepisami, dbając o bezpieczeństwo.",
    number: "6",
    icon: <Shield className="w-8 h-8 text-blue-900" />,
  },
];

const Why = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(reasons.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && index !== -1 && !visibleCards[index]) {
            setVisibleCards((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="w-screen bg-stone-100 py-20">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col lg:flex-row gap-12">

        <div className="lg:w-1/2 self-start sticky lg:top-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-blue-900 text-white rounded-full text-sm font-semibold shadow-md">
          <Star className="w-4 h-4" />
            WYBIERZ NAS
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-satoshi text-gray-900 uppercase">
            Dlaczego warto?
          </h1>
          <p className="mt-4 text-gray-600 text-lg font-satoshi-medium">
            Wybierając nas, stawiasz na jakość, terminowość i rzetelność.
            Realizujemy projekty solidnie, zgodnie z najwyższymi standardami.
          </p>
        </div>


        <div className="lg:w-1/2 flex flex-col gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el;}}
                style={{ transitionDelay: `${index * 200}ms` }}
              className={`group relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition h-54 sm:h-48 flex flex-col justify-between overflow-hidden transform 
                ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                    : "opacity-0 translate-y-10"
                }`}
            >
  
              <div className="flex flex-col items-start gap-3 z-10">
                {item.icon}
                <h2 className="text-2xl font-robert-medium uppercase text-gray-900">
                  {item.title}
                </h2>
              </div>

  
              <p className="text-gray-600 text-base mt-2 sm:pr-30 z-10">{item.desc}</p>


              <div
                className="
                  absolute 
                  
                  bottom-[-60px] right-[-20px] top-auto text-[16rem]
                  font-extrabold text-gray-200 leading-none select-none z-0
                  group-hover:scale-110 transition-transform duration-300 pointer-events-none
                "
              >
                {item.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
