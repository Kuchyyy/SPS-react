import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-grej">
      <div className="maxw py-16 md:py-20">
        <div className="grid gap-12 border-b border-dashed border-soft-black/20 pb-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <img
              src="/photos/logosps.png"
              alt="SPS Elektro"
              className="h-auto w-[140px] object-contain"
            />
            <p className="mt-3 max-w-sm text-xs font-poppins font-light leading-relaxed text-soft-black/60">
              Projektujemy i realizujemy instalacje elektryczne oraz rozwiazania dla
              inwestycji w calej Polsce.
            </p>

            <nav className="mt-8">
              <ul className="grid grid-cols-2 gap-y-3 text-sm font-poppins text-soft-black/65 md:flex md:flex-wrap md:gap-6">
                <li>
                  <a href="#oferta" className="transition hover:text-soft-black">
                    Oferta
                  </a>
                </li>
                <li>
                  <a href="#realizacje" className="transition hover:text-soft-black">
                    Realizacje
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition hover:text-soft-black">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link to="/kontakt" className="transition hover:text-soft-black">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                Telefon
              </p>
              <Link
                to="/kontakt"
                className="mt-1 block text-sm font-poppins tracking-tight text-soft-black transition hover:text-soft-black/70"
              >
                +48 666 011 919
              </Link>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                E-mail
              </p>
              <a
                href="mailto:biuro@spselektro.pl"
                className="mt-1 block text-sm font-poppins tracking-tight text-soft-black transition hover:text-soft-black/70"
              >
                biuro@spselektro.pl
              </a>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                Adres
              </p>
              <p className="mt-1 text-sm font-poppins font-light leading-relaxed text-soft-black/70">
                ul. Harcerska 21 <br />
                52-404 Wroclaw
              </p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-soft-black/40">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/company/sps-elektro-sp-z-o-o/?originalSubdomain=pl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-sm font-poppins text-soft-black transition hover:text-soft-black/70"
                aria-label="LinkedIn"
              >
                SPS Elektro

              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 pt-5 text-xs font-poppins font-light text-soft-black/55 md:flex-row">
          <p>© 2026 spselektro. Wszelkie prawa zastrzezone.</p>
          <Link to="/polityka-prywatnosci" className="transition hover:text-soft-black">
            Polityka prywatnosci
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
