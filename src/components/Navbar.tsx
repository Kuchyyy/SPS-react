import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function HeroNavbarBar() {
  return (
    <nav
      aria-label="Nawigacja w sekcji hero"
      className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-6"
    >
      <div className="maxw mx-auto flex items-center justify-between py-3">
        <Link to="/">
          <img
            src="/photos/logosps.png"
            alt="SPS Elektro"
            className="h-6 w-auto object-contain brightness-0 invert md:h-8"
          />
        </Link>
        <Link
          to="/kontakt"
          className="border border-white/80 px-3 py-2 text-xs text-white transition hover:bg-white/10 md:px-5 md:py-3 md:text-sm font-poppins"
        >
          <span className="md:hidden">Porozmawiajmy</span>
          <span className="hidden md:inline">Porozmawiajmy o projekcie</span>
        </Link>
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
        <Link to="/">
          <img
            src="/photos/logosps.png"
            alt="SPS Elektro"
            className="h-6 w-auto object-contain md:h-8"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/kontakt"
            className="text-xs font-poppins text-soft-black/80 transition hover:text-soft-black hidden md:block border border-soft-black/10  px-5 py-1.5 md:px-3 md:py-3"
          >
            +48 666 011 919
          </Link>
          <Link
            to="/kontakt"
            className="bg-neutral-100 border border-soft-black/10  px-5 py-1.5 text-xs text-soft-black/90 transition hover:text-soft-black md:px-3 md:py-3 font-poppins"
          >
            <span className="md:hidden">Porozmawiajmy</span>
            <span className="hidden md:inline">Porozmawiajmy o projekcie</span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
