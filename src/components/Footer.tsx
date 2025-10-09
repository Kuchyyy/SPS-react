"use client";

import { Mail, Phone, MapPin, FileText, Linkedin, ArrowUp, Heart } from "lucide-react";
import { TextHoverEffect } from '@/components/ui/shadcn-io/text-hover-effect';

const Footer = () => {
  return (
    <>
      <div className="pt-20">
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

            {/* Dokumenty */}
            <div>
              <a
                href="dokumenty.html"
                className="flex items-center gap-2 text-white transition font-robert-medium bg-blue-900 px-4 py-2 rounded-lg "
              >
                <FileText className="w-5 h-5 text-white" />
                Dokumenty
              </a>
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
                  <MapPin className="w-5 h-5 text-blue-500" />
                  ul. Harcerska 21, 52-404 Wrocław
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <a href="tel:+48666011919" className="hover:underline">
                    +48 666 011 919
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-500" />
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="text-gray-500 text-sm font-robert-medium">
              © {new Date().getFullYear()} SPS Elektro. Wszelkie prawa zastrzeżone.
            </p>

            <div className="flex gap-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-900 hover:bg-[#005494] px-4 py-2 rounded-md transition text-white"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center bg-blue-900 hover:bg-[#005494] px-3 rounded-md transition text-white cursor-pointer"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ✨ napis na samym dole */}
          <div className="pt-6 text-start text-gray-600 text-sm font-robert-medium flex items-center justify-center gap-2">
            MADE WITH <Heart className="w-4 h-4 text-red-500 fill-red-500" /> BY <span className="font-bold">@KHY</span>
          </div>
        </footer>
      </div>

      {/* Wielki napis SPSELEKTRO pod stopką */}
      <div className="relative text-center overflow-hidden mt-[-8vw] z-0">
        <span className="block font-extrabold tracking-[1vw] leading-none translate-y-5/14">
          <span className="inline-block align-middle w-[100%] tracking-[0.02em]">
            <TextHoverEffect text="SPSELEKTRO" />
          </span>
        </span>
      </div>
    </>
  );
};

export default Footer;
