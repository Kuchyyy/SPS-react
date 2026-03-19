import { useState } from "react";
import { Plus } from "lucide-react";
import Cross from "../facilities/Cross";


const faqs = [
  {
    question: "Czy mogę liczyć na doradztwo techniczne przed zleceniem realizacji?",
    answer:
      "Oczywiście. Doradzamy naszym klientom już na etapie wstępnej koncepcji. Pomagamy dobrać optymalne rozwiązania techniczne i technologiczne oraz przygotować założenia projektowe, by inwestycja była funkcjonalna i opłacalna.",
  },
  {
    question: "Czy SPS Elektro posiada wszystkie wymagane uprawnienia i certyfikaty branżowe?",
    answer:
      "Tak. Nasza firma działa zgodnie z obowiązującymi przepisami i normami. Posiadamy niezbędne uprawnienia budowlane, elektryczne oraz certyfikaty jakości. Regularnie szkolimy nasz zespół, by utrzymać najwyższe standardy branżowe.",
  },
  {
    question: "Jak wygląda obsługa serwisowa po zakończeniu prac? Czy oferujecie gwarancję?",
    answer:
      "Po zakończeniu realizacji zapewniamy pełną obsługę serwisową oraz wsparcie techniczne. Każda nasza usługa objęta jest gwarancją – jej długość zależy od rodzaju instalacji, ale w każdym przypadku gwarantujemy szybki czas reakcji i dostępność naszych specjalistów.",
  },
  {
    question: "Czy realizujecie zlecenia na terenie całej Polski?",
    answer:
      "Tak, działamy na terenie całego kraju. Projekty realizujemy zarówno dla klientów lokalnych, jak i firm z innych regionów Polski, dopasowując harmonogram prac do specyfiki inwestycji i lokalizacji.",
  },
  {
    question: "Na jakim etapie inwestycji najlepiej się z Wami skontaktować?",
    answer:
      "Im wcześniej, tym lepiej. Możemy pomóc już na etapie koncepcji i projektu, co pozwala uniknąć kosztownych przeróbek na późniejszych etapach oraz lepiej zaplanować instalacje pod przyszłe potrzeby obiektu.",
  },
  {
    question: "Czy pomagacie w dokumentacji powykonawczej i odbiorach?",
    answer:
      "Tak. Przygotowujemy pełną dokumentację powykonawczą, protokoły pomiarowe oraz wspieramy klientów podczas odbiorów technicznych, aby cały proces przebiegł sprawnie i bezproblemowo.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <section id="faq" className="w-full bg-stone-100">
      <div className="w-full border-b border-black/20">
        <div className="maxw">



          <div className="flex flex-col gap-1 mb-8">
            <h1 className="text-2xl font-poppins tracking-tight text-soft-black">
              Najczęściej zadawane pytania
            </h1>
            <p className="text-sm font-poppins text-soft-black/70 leading-relaxed max-w-2xl font-light">
              Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przed rozpoczęciem współpracy.
            </p>
          </div>

        </div>

      </div>
      <div className="maxw border-x border-black/20 py-8 relative">

        <Cross corner="top-left" strokeColor="stone-100" />
        <Cross corner="top-right" strokeColor="stone-100" />

        <div className="">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-black/20 px-6 first:border-t">
                <button
                  className="w-full flex items-center justify-between py-4 md:py-5 text-left"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-base font-robert-medium text-soft-black pr-6">
                    {faq.question}
                  </span>
                  <span
                    className={`flex items-center justify-center text-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                      }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>
                <div

                  className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-60 md:max-h-96" : "max-h-0"
                    }`}
                >
                  <p className="pb-4 md:pb-5 text-sm font-poppins text-soft-black/60 leading-relaxed max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
