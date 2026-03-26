import { useEffect, useState } from "react";

export function HeroNavbarBar() {
  return (
    <nav
      aria-label="Nawigacja w sekcji hero"
      className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6"
    >
      <div className="maxw mx-auto flex items-center justify-between py-3">
        <a href="#">
          <img
            src="/photos/logosps.png"
            alt="SPS Elektro"
            className="h-6 w-auto object-contain brightness-0 invert md:h-8"
          />
        </a>
        <a
          href="#kontakt"
          className="border border-white/80 px-3 py-2 text-xs text-white transition hover:bg-white/10 md:px-5 md:py-3 md:text-sm font-poppins"
        >
          <span className="md:hidden">Porozmawiajmy</span>
          <span className="hidden md:inline">Porozmawiajmy o projekcie</span>
        </a>
      </div>
    </nav>
  );
}

const Navbar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [fixedMounted, setFixedMounted] = useState(false);
  const [fixedSlideIn, setFixedSlideIn] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      setPastHero(rect.bottom <= 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (pastHero) {
      setFixedMounted(true);
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => setFixedSlideIn(true));
      });
      return () => cancelAnimationFrame(id);
    }

    setFixedSlideIn(false);
    const t = window.setTimeout(() => setFixedMounted(false), 320);
    return () => window.clearTimeout(t);
  }, [pastHero]);

  if (!fixedMounted) return null;

  return (
    <nav
      aria-label="Nawigacja główna"
      className={`fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-white  transition-transform duration-300 ease-out ${fixedSlideIn ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="maxw flex items-center justify-between py-3">
        <a href="#">
          <img
            src="/photos/logosps.png"
            alt="SPS Elektro"
            className="h-6 w-auto object-contain md:h-8"
          />
        </a>
        <div className="flex items-center gap-2">
          <a
            href="tel:+48666011919"
            className="text-xs font-poppins text-soft-black/80 transition hover:text-soft-black mr-4 hidden md:block"
          >
            +48 666 011 919
          </a>
          <a
            href="#kontakt"
            className="bg-neutral-100 border border-soft-black/10 rounded-xs px-5 py-1.5 text-xs text-soft-black/90 transition hover:text-soft-black md:px-3 md:py-1.5 font-poppins"
          >
            <span className="md:hidden">Porozmawiajmy</span>
            <span className="hidden md:inline">Porozmawiajmy o projekcie</span>
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="#0077B5" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
