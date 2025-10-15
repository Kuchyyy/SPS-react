import { Building2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "SULAGRA",
    desc: "Modernizacja instalacji przemysłowych i oświetlenia hal produkcyjnych w zakładach Sulagry – od projektu po uruchomienie.",
    img: "/photos/cos3.png",
  },
  {
    title: "JELFA",
    desc: "Instalacja wydajnych systemów oświetlenia i zasilania w zakładach produkcyjnych Jelfa – zabezpieczenia antyporażeniowe i awaryjne.",
    img: "/photos/cos2.png",
  },
  {
    title: "KOMENDA POLICJI",
    desc: "Kompleksowe wykonanie instalacji elektrycznej i systemów zabezpieczeń w nowoczesnym budynku Komendy Policji we Wrocławiu.",
    img: "/photos/cos1.png",
  },
];

const Done = () => {
  return (
    <section id="realizacje" className="w-screen py-20 bg-stone-100">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        {/* 🔹 Badge */}
        <div className="mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-full text-sm font-semibold shadow-md mx-auto">
            <Building2 className="w-4 h-4" />
            REALIZACJE
          </div>

          {/* 🔹 Tytuł + opis */}
          <h1 className="mt-6 text-3xl md:text-5xl font-satoshi text-gray-900 text-center uppercase">
            Zobacz co już zrobiliśmy
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg font-satoshi-medium text-center">
            W ostatnich miesiącach intensywnie pracowaliśmy nad projektami, które
            nie tylko odzwierciedlają nasze doświadczenie, ale także pasję i
            zaangażowanie.
          </p>
        </div>

        {/* 🔹 Projekty w karuzeli */}
        <div className="mt-12 relative">
        <Carousel>
            <CarouselContent>
                {projects.map((p, i) => (
                <CarouselItem key={i} className="md:basis-1/2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden aspect-square flex flex-col">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-4/5 object-cover"
                  />
                  <div className="p-3 pb-6 flex-1 flex flex-col justify-between pointer-events-none">
                    <h3 className="text-lg sm:text-2xl font-robert-medium text-gray-900 uppercase">
                      {p.title}
                    </h3>
                    <p className="mt-0 text-gray-600 text-sm sm:text-base">{p.desc}</p>
                  </div>
                </div>
              </CarouselItem>
              
                ))}
            </CarouselContent>

            {/* 🔹 Nawigacja pod spodem */}
            <div className="flex gap-3 mt-3 justify-between items-center mr-3">
                <div   className="flex gap-3">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
                <div>
                    <span className="text-gray-600 text-sm font-robert-medium uppercase">
                        <p className="hidden sm:inline"> 
                            Przesuń, aby zobaczyć więcej
                        </p>
                        <p className="sm:hidden">
                            Przesuń
                        </p>
                    </span>
                </div>
            </div>
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Done;
