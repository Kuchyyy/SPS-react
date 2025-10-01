import { useEffect } from 'react'
import Threads from './Threads'

const Hero = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.96 // 96% wysokości
      document.documentElement.style.setProperty('--hero-height', `${vh}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)

    return () => window.removeEventListener('resize', setVh)
  }, [])

  return (
    <section className="w-screen bg-stone-100">
      <div className="max-w-[1440px] mx-auto w-[96%] h-full flex flex-col justify-center">
        
        {/* karta z ustaloną wysokością */}
        <div
          className="relative rounded-2xl mt-4 overflow-hidden shadow-lg flex flex-col bg-[#111827]"
          style={{ height: 'var(--hero-height)' }} // <-- stała wysokość
        >
          {/* efekt w tle */}
          <div className="absolute inset-0">
            <Threads   
              amplitude={0.8}         
              distance={0}            
              enableMouseInteraction={false}
              className="w-full h-full translate-y-16 md:translate-y-0"
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
