import React from "react"
import { motion, useInView } from "framer-motion"
import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import IphoneMockup from "./iphoneMockup"


export type HeroTechnology = {
  id: string
  name: string
  logoSrc?: string
  mt?: string
  scale?: string
}

const HERO_TECHNOLOGIES: HeroTechnology[] = [
  {
    id: "siemens",
    name: "Siemens",
    logoSrc:
      "https://akson.com.pl/wp-content/uploads/2022/12/siemens-logo-dax.png",
    scale: "origin-center scale-90",
  },
  {
    id: "bosch",
    name: "Bosch",
    logoSrc:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png",
    scale: "origin-center scale-90",
  },
  {
    id: "eaton",
    name: "Eaton",
    logoSrc:
      "https://www.wesco.com/content/dam/wesco/assets/logos/brands/Eaton-logo_300x175.png",
    scale: "origin-center scale-90",
  },
  {
    id: "philips",
    name: "Philips Signify",
    logoSrc:
      "https://www.signify.com/content/dam/signify/master/homepage/logo-philips.png",
    scale: "origin-center scale-110",
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    logoSrc: "https://no-el.pl/wp-content/uploads/2018/03/SCHNEIDER-ELECTRIC-logo.png",
    scale: "origin-center scale-90",
  },
  {
    id: "abb",
    name: "ABB",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1280px-ABB_logo.svg.png",
    scale: "origin-center scale-70",
  },
  {
    id: "hager",
    name: "Hager",
    logoSrc: "https://e7.pngegg.com/pngimages/654/491/png-clipart-logo-hager-group-elmassan-holm-airbus-middle-east-blue-text.png",
    scale: "origin-center scale-90",
  },
]

const HeroTechnologiesStrip = ({ items }: { items: HeroTechnology[] }) => {
  const autoScroll = React.useRef(
    AutoScroll({
      speed: 1.0,
      stopOnInteraction: false,
    })
  )

  return (
    <div
      className="mt-10 flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:gap-10"
      role="region"
      aria-label="Technologie i partnerzy"
    >
      <div className="shrink-0 text-left lg:max-w-[11rem] lg:border-r lg:border-soft-black/15 lg:pr-10">
        <p className="text-[11px] font-geist-mono text-nowrap tracking-tight uppercase leading-snug  text-soft-black/60 sm:text-xs">
          Technologie <br className="hidden md:block" /> najwyższej jakości
        </p>
      </div>

      <div className="relative flex min-w-0 flex-1 justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-neutral-100 via-neutral-100/70 to-transparent sm:w-14 lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-neutral-100 via-neutral-100/70 to-transparent sm:w-14" />

        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[autoScroll.current]}
          className="w-full max-w-[1000px] mask-x-from-95% mask-x-to-100%"
        >
          <CarouselContent className="items-center">
            {[...items, ...items].map((tech, index) => (
              <CarouselItem
                key={`${tech.id}-${index}`}
                className="flex basis-1/2 justify-center md:basis-1/5"
              >
                <div
                  className={`flex h-10 w-32 items-end justify-center sm:h-12 sm:w-40 ${tech.mt ?? ""}`}
                >
                  {tech.logoSrc ? (
                    <img
                      src={tech.logoSrc}
                      alt={tech.name}
                      className={`h-full w-[100px] object-contain transition sm:opacity-60 sm:grayscale sm:hover:opacity-100 sm:hover:grayscale-0 ${tech.scale ?? ""}`}
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <span className="text-center text-[11px] font-poppins font-medium tracking-tight text-soft-black/70 sm:text-xs">
                      {tech.name}
                    </span>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

const Hero = () => {
  const LINKEDIN_URL =
    "https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"
  const stepsRef = React.useRef<HTMLDivElement | null>(null)
  const stepsInView = useInView(stepsRef, {
    once: true,

    margin: "-50% 0px -50% 0px",
  })

  return (
    <section id="hero" className="w-screen bg-grej">
      <div className="maxw flex flex-col pb-12 pt-30">
        <div className="flex items-center gap-2 mb-2">
          <div className=" inline-flex w-fit items-center gap-3 rounded-sm bg-blue-800 px-3 py-1 text-xs font-poppins  text-white/95">
            <span className="font-geist-mono">Zyskaj</span>

          </div>
          <p className="text-soft-black/70 text-xs font-geist-mono text-nowrap">przewagę na rynku</p>
          <svg
            aria-hidden
            viewBox="0 0 220 32"
            className="h-4 w-24 -rotate-1 text-blue-800 md:w-30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M4 16 C22 13, 36 19, 50 16 C62 13, 74 18, 86 16 C92 15, 98 16, 102 16"
              stroke="currentColor"
              strokeWidth="4.1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.2 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0 }}
            />
            <motion.path
              d="M102 7 C108 11, 114 12, 118 16 C114 20, 108 21, 101 26"
              stroke="currentColor"
              strokeWidth="4.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.35, delay: 0.45, ease: "easeOut" }}
            />

          </svg>

        </div>
        <h1 className="max-w-3xl text-3xl font-poppins tracking-tight leading-tight text-soft-black md:text-4xl">
          Instalacje elektryczne i <br /> teletechnika dla firm
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-poppins font-light tracking-tight  text-soft-black/70 md:text-base">
          Kompleksowe wsparcie techniczne dla Twojego obiektu. Projektujemy, montujemy i serwisujemy
          systemy, które napędzają nowoczesną infrastrukturę biznesową.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="tel:+48666011919"
            className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-poppins text-black border border-soft-black/15 transition hover:cursor-pointer hover:bg-white/95"
          >
            Porozmawiajmy o projekcie
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-blue-800 items-center gap-2 text-sm text-white/90 font-poppins font-light tracking-tight transition hover:text-white border border-soft-black/15 px-6 py-3"
          >
            LinkedIn
          </a>
        </div>

        <HeroTechnologiesStrip items={HERO_TECHNOLOGIES} />

        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <article className="relative overflow-hidden border border-soft-black/10 bg-white md:w-[36%] md:shrink-0 md:self-stretch">
            <img
              src="/photos/hero.png"
              alt="Realizacja SPS Elektro"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[52%] bg-linear-to-r from-black/55 via-black/20 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-[35%] bg-linear-to-r from-[#005494]/35 via-[#005494]/10 to-transparent mix-blend-screen"
              aria-hidden
            />
            <blockquote className="absolute inset-x-0 bottom-0 z-10 p-4 pb-5 md:p-6">
              <p className="max-w-[24rem] text-left text-base font-poppins font-light italic leading-snug tracking-tight text-white md:text-lg">
                <span
                  className="font-serif text-2xl leading-none text-white/90 not-italic md:text-3xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                Zacznijmy współpracować i zobacz, <br /> że naprawdę warto
                <span
                  className="font-serif text-2xl leading-none text-white/90 not-italic md:text-3xl"
                  aria-hidden
                >
                  &rdquo;
                </span>
              </p>
            </blockquote>
          </article>

          <div className="flex flex-1 flex-col gap-4">
            <article className="relative flex flex-1 justify-center border border-white/10 bg-[url('/photos/bg2.png')] p-5 md:p-6 overflow-hidden max-h-[420px] md:min-h-[360px]">
              <motion.div
                ref={stepsRef}
                className="absolute z-20 mx-auto max-w-md space-y-2 text-xs font-poppins uppercase tracking-wide text-black/70 inset-x-6 top-1/3"
                initial="hidden"
                animate={stepsInView ? "show" : "hidden"}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black"
                >
                  <span>1. Start prac</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black"
                >
                  <span>2. Przegląd etapu</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xs bg-white px-3 py-2 border border-black"
                >
                  <span>3. Montaż instalacji</span>
                  <span className="font-medium border border-green-300 rounded-xs px-2 py-1 bg-green-100">OK</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex items-center justify-between rounded-xs bg-black px-3 py-2 text-white/85"
                >
                  <span>4. Finalizacja</span>
                  <span className="inline-flex items-center gap-1 rounded-2xl px-1 py-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-duration:900ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:120ms] [animation-duration:900ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-current opacity-60 [animation-delay:240ms] [animation-duration:900ms]" />
                  </span>
                </motion.div>
              </motion.div>

              <div className="flex w-full items-end justify-center md:w-[280px] md:justify-start translate-y-70 md:-translate-x-18 -translate-x-2">
                <IphoneMockup
                  className="w-full"
                  frameClassName="w-[280px]"
                >
                  <div className="h-full w-full bg-neutral-50" />
                </IphoneMockup>
              </div>
            </article>

            <article className="flex-1 border border-white/10 bg-[#101214] p-4 md:p-6 flex flex-col justify-center">
              <div className="relative overflow-hidden rounded-sm border border-soft-black/15 bg-[#fbfaf8] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-6">
                <div
                  className="absolute inset-0 opacity-[0.28] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(0,0,0,0.06) 31px, rgba(0,0,0,0.06) 32px)",
                  }}
                  aria-hidden
                />
                <div className="relative border-b border-soft-black/10 pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-soft-black/45 ">
                        RAPORT REALIZACJI
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-xs border border-green-300 bg-green-100 px-2 py-1 font-mono text-[10px] text-green-800">
                      ZATWIERDZONO
                    </span>
                  </div>
                </div>
                <p className="relative mt-3 max-w-xl text-xs text-soft-black/80 font-poppins font-light leading-relaxed">
                  Koordynujemy wszystkie etapy prac w jednym harmonogramie,
                  dzięki czemu inwestor ma pełną kontrolę nad zakresem,
                  kosztami i terminami.
                </p>
                <div className="relative mt-4 grid grid-cols-2 gap-2 text-[11px] font-poppins text-soft-black/70">
                  <div className="rounded-xs border border-soft-black/15 bg-white/80 px-2 py-1.5">
                    Postęp: <span className="font-medium text-soft-black">82%</span>
                  </div>
                  <div className="rounded-xs border border-soft-black/15 bg-white/80 px-2 py-1.5">
                    Termin: <span className="font-medium text-soft-black">zgodny</span>
                  </div>
                </div>
                <div className="relative mt-3 rounded-xs border border-soft-black/15 bg-white/75">
                  <div className="flex items-center justify-between border-b border-soft-black/10 px-2 py-1.5 text-[10px] font-mono uppercase tracking-wide text-soft-black/50">
                    <span>Etap</span>
                    <span>Status</span>
                  </div>
                  <div className="flex items-center justify-between px-2 py-1.5 text-[11px] font-poppins text-soft-black/75">
                    <span>Montaż tras kablowych</span>
                    <span className="font-medium">OK</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-soft-black/10 px-2 py-1.5 text-[11px] font-poppins text-soft-black/75">
                    <span>Uruchomienie obwodów</span>
                    <span className="font-medium">W toku</span>
                  </div>
                </div>
                <div className="relative mt-3 border-t border-dashed border-soft-black/15 pt-2 text-[10px] font-mono uppercase tracking-wide text-soft-black/40">
                  Inspektor prowadzący: SPS Elektro
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
