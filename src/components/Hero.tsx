import IphoneMockup from "./iphoneMockup"

const Hero = () => {
  const LINKEDIN_URL =
    "https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"

  return (
    <section id="hero" className="w-screen bg-neutral-100">
      <div className="maxw flex flex-col pb-12 pt-16 md:pt-20">
        <h1 className="max-w-3xl text-3xl font-poppins tracking-tight leading-tight text-soft-black md:text-6xl">
          Kompleksowe instalacje dla inwestycji
        </h1>
        <p className="mt-4 max-w-2xl text-sm font-poppins font-light tracking-tight leading-relaxed text-soft-black/70 md:text-base">
          Łączymy branżę elektryczną, sanitarną i PPOŻ w jedną, sprawnie
          zarządzaną realizację od projektu po serwis.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="tel:+48666011919"
            className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-poppins text-black border border-soft-black/15 transition hover:cursor-pointer hover:bg-white/95"
          >
            Zadzwoń
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-soft-black/65 font-poppins font-light tracking-tight transition hover:text-soft-black border border-soft-black/15 px-6 py-3"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <article className="overflow-hidden border border-soft-black/10 bg-white md:w-[42%] md:shrink-0 md:self-stretch">
            <img
              src="/photos/sps.jpeg"
              alt="Realizacja SPS Elektro"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </article>

          <div className="flex flex-1 flex-col gap-4">
            <article className="relative flex flex-1  justify-center border border-white/10 bg-[url('/photos/bg2.png')] p-5 md:p-6 overflow-hidden max-h-[420px] md:min-h-[360px]">
              <div className="absolute  z-20 mx-auto max-w-md space-y-2 text-xs font-poppins uppercase tracking-wide text-black/70 inset-x-6  top-1/3">
                <div className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black">
                  <span>1. Start prac</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </div>
                <div className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black">
                  <span>2. Przegląd etapu</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </div>
                <div className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black">
                  <span>3. Montaż instalacji</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </div>

                <div className="flex items-center justify-between rounded-xs bg-black px-3 py-2 text-white/85">
                  <span>4. Finalizacja</span>
                  <span className="font-medium">W toku</span>
                </div>
              </div>

              <div className="flex w-full items-end justify-center md:w-[280px] md:justify-start translate-y-70 md:-translate-x-18 -translate-x-2">
                <IphoneMockup
                  className="w-full"
                  frameClassName="w-[280px]"
                >
                  <div className="h-full w-full bg-neutral-50" />
                </IphoneMockup>
              </div>
            </article>

            <article className="flex-1 border border-white/10 bg-[#101214] p-6 md:p-7">
              <p className="text-xs uppercase tracking-wide text-white/40 font-poppins">
                Raport realizacji
              </p>
              <p className="mt-3 max-w-xl text-sm text-white/80 font-poppins font-light leading-relaxed">
                Koordynujemy wszystkie etapy prac w jednym harmonogramie,
                dzięki czemu inwestor ma pełną kontrolę nad zakresem,
                kosztami i terminami.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
