import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="w-full bg-neutral-100 min-h-100">
          <div className="maxw py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-8">
              <div className="md:col-span-3">
                <img
                  src="/photos/logosps.png"
                  alt="SPS Elektro"
                  className="w-[140px] h-auto object-contain"
                />
                <p className="mt-2 text-xs font-poppins text-soft-black/60 leading-relaxed font-light max-w-sm">
                  Projektujemy i realizujemy instalacje elektryczne oraz rozwiązania dla inwestycji w całej Polsce.
                  Stawiamy na jakość, terminowość i bezpieczeństwo.
                </p>
              </div>

              <div className="md:col-span-1">
                <h4 className="text-xs font-robert-medium text-soft-black/50 mb-4 tracking-wide uppercase">
                  Przejścia
                </h4>
                <nav>
                  <ul className="space-y-3 text-sm text-soft-black/60 font-poppins font-light">
                    <li>
                      <a href="#oferta" className="hover:text-soft-black transition">
                        Oferta
                      </a>
                    </li>
                    <li>
                      <a href="#realizacje" className="hover:text-soft-black transition">
                        Realizacje
                      </a>
                    </li>
                    <li>
                      <a href="#kontakt" className="hover:text-soft-black transition">
                        Kontakt
                      </a>
                    </li>
                    <li>
                      <a href="#faq" className="hover:text-soft-black transition">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>



              <div className="md:col-span-1">
                <h4 className="text-xs font-robert-medium text-soft-black/50 mb-4 tracking-wide uppercase flex items-center gap-2">

                  Dokumenty
                </h4>
                <ul className="space-y-3 text-sm text-soft-black/60 font-poppins font-light">
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 hover:text-soft-black transition"
                    >
                      <span>Certyfikaty</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-soft-black/5 text-[10px]  tracking-wide text-soft-black/60">
                        wkrótce
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 hover:text-soft-black transition"
                    >
                      <span>Dokumenty <br className="hidden md:block" /> firmowe</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-soft-black/5 text-[10px] tracking-wide text-soft-black/60 flex-shrink-0">
                        wkrótce
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h4 className="text-xs font-robert-medium text-soft-black/50 mb-4 tracking-wide uppercase">
                  Firma
                </h4>
                <div className="space-y-3 text-sm text-soft-black/60 font-poppins font-light">
                  <div className="flex items-start gap-2">

                    <span>ul. Harcerska 21, 52-404 Wrocław</span>
                  </div>
                  <div className="flex items-start gap-2">

                    <a href="tel:+48666011919" className="hover:text-soft-black transition">
                      +48 666 011 919
                    </a>
                  </div>
                  <div className="flex items-start gap-2">

                    <a href="mailto:biuro@spselektro.pl" className="hover:text-soft-black transition">
                      biuro@spselektro.pl
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full bg-neutral-900">
          <div className="maxw py-5 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/60 font-robert-medium">
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-poppins font-light text-xs items-end gap-2 hover:text-white transition"
                aria-label="LinkedIn"
              >
                LinkedIn
                <Linkedin className="w-4 h-4 fill-white/60 mb-0.5" />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-poppins font-light text-xs">
              <p className="text-center">© 2026 spselektro Wszelkie prawa zastrzeżone.</p>
              <a href="#" className="hover:text-white transition">
                Polityka prywatności
              </a>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
