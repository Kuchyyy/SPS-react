"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Threads from "./Threads"
import { InfiniteSlider } from "@/components/ui/infinite-slider"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null) // ref na div z rounded

  useEffect(() => {
    if (wrapperRef.current && innerRef.current) {
      gsap.fromTo(
        wrapperRef.current,
        { width: "90%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200",
            scrub: true,
          },
        }
      )

      // osobna animacja na borderRadius
      gsap.fromTo(
        innerRef.current,
        { borderRadius: "1rem" }, // odpowiada rounded-2xl
        {
          borderRadius: "0rem",
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=200",
            scrub: true,
          },
        }
      )
    }
  }, [])

  const logos = [
    { src: "https://akson.com.pl/wp-content/uploads/2022/12/siemens-logo-dax.png", alt: "Siemens logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png", alt: "Bosch logo" },
    { src: "https://www.wesco.com/content/dam/wesco/assets/logos/brands/Eaton-logo_300x175.png", alt: "Eaton logo" },
    { src: "https://www.signify.com/content/dam/signify/master/homepage/logo-philips.png", alt: "Philips logo" },
    { src: "https://filtrdodomu.pl/userdata/public/producers/10.jpg", alt: "Partner 6" },
    { src: "https://rodavigo.net/datos/logos-marcas-png/ceag.png", alt: "CEAG logo" },
    { src: "https://www.securedbydesign.com/images/Aritech.png", alt: "Aritech logo" },
    { src: "https://akson.com.pl/wp-content/uploads/2022/12/siemens-logo-dax.png", alt: "Siemens logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bosch_logo.png", alt: "Bosch logo" },
    { src: "https://www.wesco.com/content/dam/wesco/assets/logos/brands/Eaton-logo_300x175.png", alt: "Eaton logo" },
    { src: "https://www.signify.com/content/dam/signify/master/homepage/logo-philips.png", alt: "Philips logo" },
    { src: "https://filtrdodomu.pl/userdata/public/producers/10.jpg", alt: "Partner 6" },
    { src: "https://rodavigo.net/datos/logos-marcas-png/ceag.png", alt: "CEAG logo" },
    { src: "https://www.securedbydesign.com/images/Aritech.png", alt: "Aritech logo" },
  ]

  return (
    <section className="w-screen bg-stone-100">
      <div
        ref={wrapperRef}
        className="mx-auto w-[80%] h-[96svh] flex flex-col justify-center mt-4"
      >
        {/* tu ref na innera */}
        <div
          ref={innerRef}
          className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col bg-radial-[at_90%_100%] from-blue-900 to-[#111827] h-full"
        >
          {/* animacja w tle */}
          <div className="absolute inset-0">
            <Threads
              amplitude={0.8}
              distance={0}
              enableMouseInteraction={false}
              className="w-screen h-full translate-y-16 md:translate-y-0"
            />
          </div>

          {/* treść */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="text-center text-white px-3 pt-30">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight font-satoshi">
                Technologie, które napędzają<br />Twoje projekty
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl mx-auto font-satoshi-medium text-md">
                SPS to firma instalacyjno-serwisowa z branży sanitarnej, elektrycznej i przeciwpożarowej.
              </p>
            </div>

            {/* slider z logotypami */}
            <section className="py-8 bg-transparent">
              <div className="w-[100%] mx-auto">
                <div className="relative w-full h-[180px] overflow-hidden touch-pan-y ">
                  <div className="absolute">
                    <InfiniteSlider
                      gap={24}
                      reverse
                      duration={50}
                      className="w-full h-full flex items-center"
                    >
                      {logos.map((logo, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center w-[160px] h-[160px] bg-stone-100 rounded-lg shadow-md pointer-events-none"
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            draggable="false"
                            className="max-w-[120px] max-h-[120px] object-contain transition duration-300 pointer-events-none"
                          />
                        </div>
                      ))}
                    </InfiniteSlider>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
