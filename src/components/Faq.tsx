"use client";

import { useRef, useState } from "react";
import { HelpCircle, ChevronUp } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";

const faqItems = [
  {
    q: "Czy mogę liczyć na doradztwo techniczne przed zleceniem realizacji ?",
    a: "Oczywiście. Doradzamy naszym klientom już na etapie wstępnej koncepcji. Pomagamy dobrać optymalne rozwiązania techniczne i technologiczne oraz przygotować założenia projektowe, by inwestycja była funkcjonalna i opłacalna.",
  },
  {
    q: "Czy SPS Elektro posiada wszystkie wymagane uprawnienia i certyfikaty branżowe ?",
    a: "Tak. Nasza firma działa zgodnie z obowiązującymi przepisami i normami. Posiadamy niezbędne uprawnienia budowlane, elektryczne oraz certyfikaty jakości. Regularnie szkolimy nasz zespół, by utrzymać najwyższe standardy branżowe.",
  },
  {
    q: "Jak wygląda obsługa serwisowa po zakończeniu prac ? Czy oferujecie gwarancję ?",
    a: "Po zakończeniu realizacji zapewniamy pełną obsługę serwisową oraz wsparcie techniczne. Każda nasza usługa objęta jest gwarancją – jej długość zależy od rodzaju instalacji, ale w każdym przypadku gwarantujemy szybki czas reakcji i dostępność naszych specjalistów.",
  },
];

// Jeden element FAQ z animacją wysokości
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;

    const duration = 300;
    const startHeight = el.offsetHeight;
    const targetHeight = open ? 0 : el.scrollHeight;
    let startTime: number | null = null;

    const step = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const rawProgress = elapsed / duration;
      const progress = Math.min(rawProgress, 1); // zawsze 0–1
      const easeProgress = 1 - Math.pow(1 - progress, 2); // easeOut

      const currentHeight = open
        ? startHeight * (1 - easeProgress)
        : targetHeight * easeProgress;

      el.style.height = currentHeight + "px";
      el.style.overflow = "hidden";
      el.style.visibility = "visible";

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (open) {
          el.style.height = "0px";
          el.style.overflow = "hidden";
          el.style.visibility = "hidden";
        } else {
          el.style.height = "auto";
          el.style.overflow = "";
          el.style.visibility = "visible";
        }
        setOpen(!open);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="text-white shadow-sm hover:shadow-md transition w-full border-b border-blue-900 pb-3">
      <button
        onClick={toggle}
        className="w-full min-h-16 pb-2 flex justify-between gap-3 items-center text-left px-3 py-2 font-robert-medium text-lg"
      >
        {q}
        <ChevronUp
          className={`min-w-6 h-6 text-blue-900 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        style={{ height: "0px", overflow: "hidden", visibility: "hidden" }}
        className="px-3 pt-2 text-gray-300 text-base font-satoshi-medium"
      >
        {a}
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section
      id="faq"
      className="relative w-[90%] max-w-[1440px] my-10 rounded-2xl bg-[#111827] text-white px-6 lg:px-16 py-12 mx-auto overflow-hidden"
    >
      <Ripple circleTop="10%" circleLeft="5%" />

      {/* Nagłówek */}
      <div className="flex justify-center sm:justify-start mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-900 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-md">
          <HelpCircle className="w-4 h-4" />
          FAQ
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 relative z-10">
        {/* Lewa kolumna */}
        <div className="flex-1 max-w-[500px] flex flex-col items-center text-center sm:items-start sm:text-left">
          <div className="flex flex-col justify-between h-full items-center sm:items-start">
            <div>
              <h3 className="text-3xl md:text-5xl font-satoshi mb-5 uppercase">
                Masz więcej pytań?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-satoshi-medium text-base px-3 sm:px-0">
                Zebraliśmy najważniejsze tematy, które najczęściej nurtują naszych klientów.
                Jeśli nadal nie znalazłeś odpowiedzi na swoje pytanie, skontaktuj się z nami.
              </p>
            </div>
            <a
              href="tel:+48666011919"
              className="inline-block bg-blue-900 hover:bg-[#005494] px-6 py-3 rounded-lg font-semibold transition-colors w-[90%] sm:w-auto text-center"
            >
              Zadzwoń
            </a>
          </div>
        </div>

        {/* Prawa kolumna FAQ */}
        <div className="flex-1 flex flex-col gap-4 items-start text-left font-robert-medium">
          {faqItems.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
