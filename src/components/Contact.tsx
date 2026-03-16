import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import gsap from "gsap";
import MacBook from "./MacBook";

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stripesRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const copyToClipboard = (text: string, type: "mail") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

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
    <section id="kontakt" className="w-full bg-stone-100 relative">
      <div
        className={`fixed w-fit bottom-6 right-6 px-4 py-2 rounded-sm text-white bg-blue-900 font-robert-medium z-50 transition-all duration-400 ${copied ? "translate-y-0 opacity-100" : "translate-y-10 opacity-100"
          }`}
      >
        {copied === "mail" && (
          <span className="flex items-center gap-2">
            Skopiowano maila
            <Check className="w-4 h-4 text-white" />
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 mb-8 maxw">
        <h1 className="text-2xl font-poppins tracking-tight text-soft-black">
          Skontaktuj się z nami
        </h1>
        <p className="text-sm font-poppins text-soft-black/70 leading-relaxed max-w-2xl font-light">
          Jeśli chcesz spotkać się z nami osobiście lub porozmawiać o swoim projekcie,
          jesteśmy do Twojej dyspozycji – mailowo i telefonicznie.
        </p>
      </div>

      <div
        ref={containerRef}
        className="maxw bg-neutral-100 relative  overflow-visible h-full"
      >
        <div
          ref={stripesRef}
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 flex items-end"
        >
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/30 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/40 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent" />
          <div className="h-0 flex-1 bg-gradient-to-t from-blue-900/80 via-blue-900/15 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row h-full relative z-10 justify-between pl-0 pb-0  gap-8 ">
          <div className="flex flex-col justify-start gap-6  text-lg font-poppins w-fit">
            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <div className="flex items-center justify-between  rounded-md py-3 pr-3">
                <a
                  href="mailto:biuro@spselektro.pl"
                  className="flex items-center gap-2 hover:text-blue-900 transition text-black"
                >

                  biuro@spselektro.pl
                </a>
                <button
                  onClick={() => copyToClipboard("biuro@spselektro.pl", "mail")}
                  className="p-2 rounded-lg hover:bg-blue-100 transition"
                >
                  <Copy className="w-4 h-4 text-blue-900" />
                </button>
              </div>
            </div>

            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <div className="flex items-center justify-between  rounded-md py-3 pr-3">
                <a
                  href="tel:+48666011919"
                  className="flex items-center gap-2 hover:text-blue-900 transition text-black"
                >

                  +48 666 011 919
                </a>
              </div>
            </div>

            <div className="border-l-2 border-blue-900 pl-5 min-w-[200px]">
              <div className="flex items-center gap-2 rounded-md py-3 pr-3 font-poppins text-black">

                ul. Harcerska 21, 52-404 Wrocław
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 max-w-md h-full flex items-end justify-end ">
            <MacBook className="w-full -translate-x-10 sm:translate-x-10" slim>
              <img
                src="/photos/sps.jpeg"
                alt="Panel kontaktowy SPS Elektro na ekranie MacBooka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </MacBook>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
