import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { useWindowScroll } from 'react-use';
import { ChevronDown } from 'lucide-react';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links?: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const NAV_OFFSCREEN_Y = -120;

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [forceHidden, setForceHidden] = useState(false);

  const { y: currentScroll } = useWindowScroll();

  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const lastScrollRef = useRef(0);

  // dropdown
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // mobile/desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // helpers: animacje nav
  const hideNav = (dur = 0.6) => {
    if (!navRef.current) return;
    gsap.killTweensOf(navRef.current);
    gsap.to(navRef.current, { y: NAV_OFFSCREEN_Y, duration: dur, ease: 'power3.out' });
  };

  const showNav = (dur = 0.4) => {
    if (!navRef.current) return;
    gsap.killTweensOf(navRef.current);
    gsap.to(navRef.current, { y: 0, duration: dur, ease: 'power3.out' });
  };

  // startowo schowany
  useLayoutEffect(() => {
    if (!navRef.current) return;
    gsap.set(navRef.current, { y: NAV_OFFSCREEN_Y });
  }, []);

  // animacja kart
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 60;
    const cards = navEl.querySelectorAll('.nav-card') as NodeListOf<HTMLElement>;
    if (cards.length > 0) {
      const isMobileView = typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches;
      if (isMobileView) {
        const sum = Array.from(cards).reduce((acc, el) => acc + el.offsetHeight + 6, 0);
        return 60 + sum + 16;
      } else {
        const maxH = Array.from(cards).reduce((acc, el) => Math.max(acc, el.offsetHeight), 0);
        return 60 + maxH + 16;
      }
    }
    return 60;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: 'visible' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');
    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) tlRef.current = newTl;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  // logika scrolla (z uwzględnieniem forceHidden)
  useEffect(() => {
    if (!navRef.current) return;
    const last = lastScrollRef.current;

    if (isExpanded) {
      showNav(0.4);
    } else if (forceHidden) {
      hideNav(0.2); // zawsze chowaj, dopóki forceHidden = true
    } else {
      if (currentScroll === 0) {
        showNav(1);
      } else if (currentScroll > last) {
        hideNav(1);
      } else if (currentScroll < last) {
        showNav(0.6);
      }
    }

    lastScrollRef.current = currentScroll;
  }, [currentScroll, isExpanded, forceHidden]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      // OTWARCIE
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      setForceHidden(false); // reset blokady
      showNav(0.3);
      tl.play(0);
    } else {
      // ZAMKNIĘCIE
      setIsHamburgerOpen(false);
      setOpenDropdown(false);
      setIsExpanded(false);
      setForceHidden(true); // blokada widoczności
      tl.reverse(0);
      hideNav(0.5);
    }
  };

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setIsHamburgerOpen(false);
    setOpenDropdown(false);
    setIsExpanded(false);
    setForceHidden(true); // blokada widoczności po kliknięciu linku/CTA
    tl.reverse(0);
    hideNav(0.5);
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  // dropdown
  const handleMouseEnter = () => {
    if (isMobile) return;
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 500);
  };

  const toggleDropdown = () => setOpenDropdown((p) => !p);

  return (
    <div
      className={`card-nav-container fixed w-[86%] max-w-[800px] z-[99] top-6 left-1/2 -translate-x-1/2 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-visible will-change-[height,transform]`}
        style={{ backgroundColor: baseColor }}
      >
        {/* TOP BAR */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2] pr-4 md:pr-2">
          {/* hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </div>

          {/* logo */}
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt={logoAlt} className="logo h-[28px] cursor-pointer" />
            </a>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={closeMenu}
            className="hidden md:inline-flex border-0 rounded-lg px-4 h-full nav-card-label font-robert-medium cursor-pointer transition-colors duration-300 items-center uppercase"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Kontakt
          </button>
        </div>

        {/* CONTENT */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] p-2 flex flex-col sm:flex-row gap-2 z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          }`}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card relative flex flex-col items-start gap-1 px-4 py-4 rounded-lg flex-1 justify-between"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              {item.label !== 'Kontakt' ? (
                <a
                  href={`#${item.label.toLowerCase()}`}
                  onClick={closeMenu}
                  className="nav-card-label font-robert-medium text-[18px] md:text-[20px] uppercase cursor-pointer hover:text-gray-200 transition w-full"
                >
                  {item.label}
                </a>
              ) : (
                <div
                  className="relative w-full"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex w-full items-center justify-between">
                    <a
                      href="#kontakt"
                      onClick={closeMenu}
                      className="nav-card-label font-robert-medium text-[18px] md:text-[20px] uppercase cursor-pointer hover:text-gray-200 transition"
                    >
                      {item.label}
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown();
                      }}
                      className="ml-2"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openDropdown ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {openDropdown && (
                    <div
                      className="absolute left-0 top-full mt-8 flex flex-col bg-white shadow-lg rounded-md p-2 z-50"
                      style={{ width: 'calc(100% + 2rem)', transform: 'translateX(-1rem)' }}
                    >
                      {item.links?.map((lnk) => (
                        <a
                          key={`${lnk.label}`}
                          className="px-3 py-1.5 text-gray-800 hover:bg-gray-100 rounded-md flex items-center gap-2 text-sm transition"
                          href={lnk.href}
                          onClick={closeMenu}
                          aria-label={lnk.ariaLabel}
                        >
                          <GoArrowUpRight className="text-blue-600 w-4 h-4" />
                          {lnk.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
