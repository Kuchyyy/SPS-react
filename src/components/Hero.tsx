import Threads from './Threads'
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const Hero = () => {
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
  ];


  return (


    <section className="w-screen bg-stone-100">
      <div className="max-w-[1440px] mx-auto w-[90%] h-full flex flex-col justify-center mt-4">
        

        <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col bg-radial-[at_50%_100%] from-blue-900 to-[#111827] h-[96svh]">
          

          <div className="absolute inset-0">
            <Threads
              amplitude={0.8}
              distance={0}
              enableMouseInteraction={false}
              className="w-full h-full translate-y-16 md:translate-y-0"
            />
          </div>


          <div className="relative z-10 flex flex-col justify-between h-full">
            <div className="text-center text-white px-3 pt-30">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight font-satoshi">
                Technologie, które napędzają<br />Twoje projekty
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl mx-auto font-satoshi-medium text-md">
                SPS to firma instalacyjno-serwisowa z branży sanitarnej, elektrycznej i przeciwpożarowej.
              </p>
            </div>

             <section className="py-8 bg-transparent">
                  <div className="w-[96%] mx-auto">
            
                    <div className="relative w-full h-[180px] overflow-hidden touch-pan-x">
                      <div className="absolute inset-0 mask-[linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
                        <InfiniteSlider gap={24} reverse className="w-full h-full flex items-center pointer-events-none" duration={50}>
                          {logos.map((logo, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center w-[160px] h-[160px] bg-stone-100 rounded-lg shadow-md"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                draggable="false"
                                className="max-w-[120px] max-h-[120px] object-contain  transition duration-300"
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
