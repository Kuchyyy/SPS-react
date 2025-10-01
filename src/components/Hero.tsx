
import Threads from './Threads'

const Hero = () => {
  return (
    <section className="w-screen h-dvh bg-stone-100">
      <div className="max-w-[1440px] mx-auto w-[96%] h-full flex flex-col justify-center mt">
        
        {/* Ciemna karta */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg flex flex-col bg-[#111827] h-[96vh]">
          
          {/* 🔥 Efekt shaderowy – jedna wstęga na środku */}
          <div className="absolute inset-0">
            <Threads
              color={[1, 1, 1]}       
              amplitude={0.8}         
              distance={0}            
              enableMouseInteraction={false}
              className="w-full h-full translate-y-16 md:translate-y-0"
            />
          </div>

          {/* Zawartość karty */}
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Nagłówek + podtytuł */}
            <div className="text-center text-white px-3 pt-30">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight font-satoshi">
                Technologie, które napędzają<br />Twoje projekty
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl mx-auto font-satoshi-medium text-md">
              SPS to firma instalacyjno-serwisowa z branży sanitarnej, elektrycznej i przeciwpożarowej.
              </p>
            </div>

            {/* Dolna część */}
            <div className="flex flex-col md:flex-row mt-10">
              <div className="flex-1 flex items-end justify-center">
                <img
                  src="/photos/mac.png"
                  alt="Laptop z projektem SPS"
                  className="w-full max-w-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
