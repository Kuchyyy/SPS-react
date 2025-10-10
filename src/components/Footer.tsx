import { useState } from "react";
import { Mail, Phone, MapPin, FileText, Linkedin, ArrowUp, Heart, Clock } from "lucide-react";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleClick = () => {
    setShowBanner(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 3000); 
  };

  return (
    <>
      <div className="py-20">
        <footer className="relative bg-stone-100 text-white w-[90%] max-w-[1440px] mx-auto z-10 border p-8 rounded-xl shadow-lg">
          {/* Górna sekcja */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-blue-900 pb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/photos/logosps.png"
                alt="SPS Elektro"
                className="w-[140px] h-auto object-contain"
              />
            </div>

            {/* Menu */}
            <nav>
              <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 font-robert-medium uppercase text-md text-gray-600 text-center">
                <li>
                  <a href="#oferta" className="hover:text-black transition">
                    Oferta
                  </a>
                </li>
                <li>
                  <a href="#realizacje" className="hover:text-black transition">
                    Realizacje
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-black transition">
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>

            {/* Dokumenty (przycisk z drop-downem) */}
            <div className="relative">
              <button
                onClick={handleClick}
                className="flex items-center gap-2 text-white transition font-robert-medium bg-blue-900 px-4 py-2 rounded-lg hover:bg-[#005494] cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white" />
                Dokumenty
              </button>

              {/* Drop-down baner */}
              {showBanner && (
                <div className="absolute top-full left-1/2 md:left-1/10 -translate-x-1/2 mt-2 flex items-center gap-2 bg-gray-200 text-gray-800 font-robert-medium px-4 py-2 w-90 rounded-lg shadow z-50 animate-fade">
                  <Clock className="w-5 h-5 text-blue-900" />
                  <span>Dokumenty – wkrótce zostanie dodane</span>
                </div>
              )}
            </div>
          </div>
          {/* Środkowa sekcja */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-blue-900">
            {/* Kolumna 1 */}
            <div>
              <h3 className="text-xl font-robert-medium mb-4 text-black">
                Siedziba główna Inplag Sp. z o.o.
              </h3>
              <div className="text-gray-600 space-y-2 font-robert-regular">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  ul. Harcerska 21, 52-404 Wrocław
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <a href="tel:+48666011919" className="hover:underline">
                    +48 666 011 919
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-900" />
                  <a href="mailto:biuro@spselektro.pl" className="hover:underline">
                    biuro@spselektro.pl
                  </a>
                </span>
              </div>
            </div>

            {/* Kolumna 2 */}
            <div>
              <h3 className="text-xl font-robert-medium mb-4 text-black">
                SPS Budownictwo Sp. z o.o.
              </h3>
              <p className="text-gray-600 leading-relaxed font-satoshi-medium">
                Jesteśmy dumni, że należymy do grona partnerów SPS Budownictwo Sp. z
                o.o. Nasza współpraca to gwarancja najwyższego standardu oraz
                innowacyjnego podejścia do realizowanych projektów.
              </p>
            </div>
          </div>

          {/* Dolna sekcja */}
          <div className="flex flex-col-reverse items-center justify-between gap-4 pt-8">
            <div className="flex flex-col md:flex-row gap-2 w-full items-center text-center justify-between text-sm text-gray-600 font-robert-medium">
              <p>© {new Date().getFullYear()} SPS Elektro. Wszelkie prawa zastrzeżone.</p>

              <div className="flex items-center gap-1">
                MADE WITH 
                <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
                BY 
                <a 
                  href="https://github.com/Kuchyyy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold transition-colors hover:text-blue-900"
                >
                  @KHY
                </a>
              </div>
            </div>

            <div className="flex gap-2 w-full justify-center md:justify-end">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-900 hover:bg-[#005494] px-4 py-2 font-robert-medium rounded-md transition text-white"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center bg-blue-900 hover:bg-[#005494] px-3 rounded-md transition text-white cursor-pointer"
              >
                <ArrowUp className="w-5 h-5 font-robert-medium" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
