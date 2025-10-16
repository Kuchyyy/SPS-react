import { Heart } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";
import CountUp from "react-countup";

const Trust = () => {
  return (
    <div className="py-20">
    <section className="relative w-[90%] max-w-[1440px]  rounded-2xl bg-[#111827] text-white md:px-16 py-12 md:py-16 text-center md:text-left mx-auto overflow-hidden">
      <Ripple />

      <div className="inline-block bg-blue-900 text-white rounded-full px-4 py-2 text-sm font-semibold mb-6 relative z-10">
        <Heart className="w-4 h-4 inline mr-2 mb-1" />
        ZAUFANIE
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 relative z-10">
        <div className="flex-1 max-w-[500px] flex flex-col items-center text-center sm:items-start sm:text-left pl-0 sm:pl-6 md:pl-0">
          <h3 className="text-3xl md:text-5xl font-satoshi mb-5 uppercase">
            Budujemy Twój sukces
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 font-satoshi-medium text-base px-3 sm:px-0">
            Posiadamy wieloletnie doświadczenie i zaufanie klientów w całej Polsce.
            Nasze innowacyjne rozwiązania gwarantują stabilność i bezpieczeństwo każdej inwestycji.
          </p>
          <a
             href="tel:+48666011919"
            className="inline-block bg-blue-900 hover:bg-[#005494] px-6 py-3 rounded-lg font-robert-medium transition-colors w-[90%] sm:w-auto"
          >
            Zadzwoń 
          </a>
        </div>

        <div className="flex-1 flex flex-col gap-6 items-start text-left pl-6 font-robert-medium">
          <div className="border-l-2 border-blue-900 pl-5">
            <h4 className="text-2xl font-bold">
              <CountUp end={1000} duration={3} enableScrollSpy scrollSpyOnce /> +
            </h4>
            <span className="text-gray-400">Klientów</span>
          </div>
          <div className="border-l-2 border-blue-900 pl-5">
            <h4 className="text-2xl font-bold">
              <CountUp end={20} duration={4} enableScrollSpy scrollSpyOnce /> +
            </h4>
            <span className="text-gray-400">Lat Doświadczenia</span>
          </div>
          <div className="border-l-2 border-blue-900 pl-5">
            <h4 className="text-2xl font-bold">
              <CountUp end={100} duration={5} enableScrollSpy scrollSpyOnce />%
            </h4>
            <span className="text-gray-400">Satysfakcji</span>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Trust;
