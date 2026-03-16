
import { useState } from "react";
import { Play } from "lucide-react";
const projects = [
  {
    title: "Sulagry",
    desc: "Modernizacja instalacji przemysłowych i oświetlenia hal produkcyjnych w zakładach Sulagry – od projektu po uruchomienie.",
    img: "/photos/cos3.png",
    video: "/films/sulagra.mp4",
  },
  {
    title: "Jelfa",
    desc: "Instalacja wydajnych systemów oświetlenia i zasilania w zakładach produkcyjnych Jelfa – zabezpieczenia antyporażeniowe i awaryjne.",
    img: "/photos/cos2.png",
    video: "/films/jelfa.mp4",
  },
  {
    title: "Komenda Policji",
    desc: "Kompleksowe wykonanie instalacji elektrycznej i systemów zabezpieczeń w nowoczesnym budynku Komendy Policji we Wrocławiu.",
    img: "/photos/cos1.png",
    video: "/films/komendapolicji.mp4",
  },
];

const Done = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="realizacje" className="w-full bg-stone-100 py-20">
      <div className="maxw pt-10">
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-poppins tracking-tight text-soft-black">
              Realizacje
            </h1>
          </div>

          <div className="max-w-xl">
            <p className="text-sm text-soft-black/70 font-poppins font-light tracking-tight">
              W ostatnich miesiącach intensywnie pracowaliśmy nad projektami, które
              nie tylko odzwierciedlają nasze doświadczenie, ale także pasję i
              zaangażowanie.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-4 md:px-0 lg:maxw lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible">
          {projects.map((p, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] lg:w-auto rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full rounded-sm bg-neutral-200 overflow-hidden flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => setActiveVideo(p.video)}
                  className="absolute top-3 right-3 bg-blue-900 hover:bg-[#005494] text-white rounded-full p-2 shadow-md transition-colors"
                >
                  <Play className="w-4 h-4" />
                </button>
              </div>

              <div className="py-3 flex flex-col gap-2">
                <h3 className="text-base  font-poppins tracking-tight text-soft-black">
                  {p.title}
                </h3>
                <p className="text-sm  text-soft-black/60 font-poppins font-light tracking-tight">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-sm font-poppins"
            >
              Zamknij
            </button>
            <video
              src={activeVideo}
              className="w-full max-h-[80vh] rounded-sm bg-black"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Done;
