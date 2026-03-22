import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";

const Trust = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stripesRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !stripesRef.current || hasAnimated) return;

    const stripes = stripesRef.current.children;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            gsap.to(stripes[0], {
              height: "20%",
              duration: 2,
              ease: "expo.out",
              delay: 0.3,
            });
            gsap.to(stripes[1], {
              height: "40%",
              duration: 2.125,
              ease: "expo.out",
              delay: 0.3,
            });
            gsap.to(stripes[2], {
              height: "60%",
              duration: 2.25,
              ease: "expo.out",
              delay: 0.3,
            });
            gsap.to(stripes[3], {
              height: "80%",
              duration: 2.375,
              ease: "expo.out",
              delay: 0.3,
            });
            gsap.to(stripes[4], {
              height: "100%",
              duration: 2.5,
              ease: "expo.out",
              delay: 0.3,
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section className="w-full bg-stone-100 mb-20">
      <div className="flex flex-col gap-1 mb-8 maxw">
        <h1 className="text-2xl font-poppins tracking-tight text-soft-black">
          Budujemy Twój sukces
        </h1>
        <p className="text-sm font-poppins text-soft-black/70 leading-relaxed max-w-2xl font-light">
          Posiadamy wieloletnie doświadczenie i zaufanie klientów w całej Polsce.
          Nasze innowacyjne rozwiązania gwarantują stabilność i bezpieczeństwo każdej inwestycji.
        </p>
      </div>
      <div
        ref={containerRef}
        className="maxw bg-neutral-100 relative overflow-hidden  h-full"
      >
        <div
          ref={stripesRef}
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 flex items-end"
        >
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/20 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/20 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/50 via-blue-900/15 to-transparent" />
        </div>
        <div className="flex flex-col h-full relative z-10 justify-between">


          <div className="flex flex-col  justify-start gap-6">
            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <h4 className="text-3xl font-poppins font-light tracking-tight text-soft-black">
                <CountUp end={1000} duration={3} enableScrollSpy scrollSpyOnce /> +
              </h4>
              <span className="text-sm text-soft-black/60 font-poppins font-light tracking-tight">Klientów</span>
            </div>
            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <h4 className="text-3xl font-poppins font-light tracking-tight text-soft-black">
                <CountUp end={20} duration={4} enableScrollSpy scrollSpyOnce /> +
              </h4>
              <span className="text-sm text-soft-black/60 font-poppins font-light tracking-tight">Lat Doświadczenia</span>
            </div>
            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <h4 className="text-3xl font-poppins font-light tracking-tight text-soft-black">
                <CountUp end={100} duration={5} enableScrollSpy scrollSpyOnce />%
              </h4>
              <span className="text-sm text-soft-black/60 font-poppins font-light tracking-tight">Satysfakcji</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
