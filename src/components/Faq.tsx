"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";


const faqs = [
  {
    question: "Czy mogę liczyć na doradztwo techniczne przed zleceniem realizacji?",
    answer:
      "Oczywiście. Doradzamy naszym klientom już na etapie wstępnej koncepcji. Pomagamy dobrać optymalne rozwiązania techniczne i technologiczne oraz przygotować założenia projektowe, by inwestycja była funkcjonalna i opłacalna.",
  },
  {
    question: "Czy SPS Elektro posiada wszystkie wymagane uprawnienia i certyfikaty branżowe ?",
    answer:
      "Tak. Nasza firma działa zgodnie z obowiązującymi przepisami i normami. Posiadamy niezbędne uprawnienia budowlane, elektryczne oraz certyfikaty jakości. Regularnie szkolimy nasz zespół, by utrzymać najwyższe standardy branżowe.",
  },
  {
    question: "Jak wygląda obsługa serwisowa po zakończeniu prac ? Czy oferujecie gwarancję ?",
    answer:
      "Po zakończeniu realizacji zapewniamy pełną obsługę serwisową oraz wsparcie techniczne. Każda nasza usługa objęta jest gwarancją – jej długość zależy od rodzaju instalacji, ale w każdym przypadku gwarantujemy szybki czas reakcji i dostępność naszych specjalistów.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-20">
    <section
      id="faq"
      className="relative w-[90%] max-w-[1440px] my-10 rounded-2xl bg-[#111827] text-white px-6 lg:px-16 py-12 md:py-16 mx-auto overflow-hidden"
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
        <div className="flex-1 max-w-[500px] flex flex-col">
          <div className="flex flex-col justify-between h-full items-center text-center sm:items-start sm:text-left pl-0">
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
              className="w-full sm:w-auto bg-blue-900 hover:bg-[#005494] px-6 py-3 rounded-lg font-bold font-robert-medium transition-colors 
                        text-center sm:text-left"
            >
              Zadzwoń
            </a>
          </div>
        </div>

        {/* Prawa kolumna FAQ */}
        <div className="flex-1 flex flex-col gap-4 items-start text-left font-robert-medium">
        {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border-b-blue-900 border-b-1 shadow-sm"
            >
              <button
                className="w-full flex justify-between gap-2.5 items-top md:px-3 py-4 text-left text-lg font-medium text-white"
                onClick={() => setOpenIndex(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform duration-300 min-w-6 text-blue-900 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`md:px-3 pb-4 text-gray-300 transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
}
