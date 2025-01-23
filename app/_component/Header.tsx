"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "./TransitionLink";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Referensi untuk menu fullscreen
  const linksRef = useRef<HTMLUListElement>(null); // Referensi untuk link menu

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        // Animasi membuka menu
        gsap.timeline()
          .to(menuRef.current, {
            duration: 0.5,
            opacity: 1,
            clipPath: "circle(150% at 50% 50%)", // Efek muncul seperti bubble
            ease: "power4.out",
          })
          .fromTo(
            linksRef.current ? Array.from(linksRef.current.children) : [],
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.2, // Efek bertahap untuk link menu
              ease: "power3.out",
            }
          );

        document.body.style.overflow = "hidden"; // Nonaktifkan scroll halaman
      } else {
        // Animasi menutup menu
        gsap.timeline()
          .to(linksRef.current ? Array.from(linksRef.current.children) : [], {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.1,
            ease: "power3.in",
          })
          .to(menuRef.current, {
            duration: 0.5,
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)",
            ease: "power4.in",
          });

        document.body.style.overflow = "auto"; // Aktifkan kembali scroll
      }

      return !prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isMenuOpen ? "bg-transparent" : isScrolled ? "bg-secondary " : "bg-transparent"
        }`}
      >
        <div className="flex px-[6vw] items-center justify-between py-[2vw]">
          <div>
            <a
              onClick={toggleMenu}
              className={`text-[1.5vw] smooch tracking-[0.1rem] ${
                isMenuOpen ? "text-secondary" : "text-primary"
              } cursor-pointer`}
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </a>
          </div>

          <div>
            {/* <a
              href="/portfolio "

              className={`text-[1.5vw] smooch tracking-[0.1rem] ${
                isMenuOpen ? "text-secondary" : "text-primary"
              } cursor-pointer uppercase`}
              rel="noopener noreferrer"
            >
              Portfolio
            </a> */}

            <TransitionLink newFunc={()=>{}} position="outside" isMenu={isMenuOpen} href="/portfolio" label="Portfolio"/>
          </div>
        </div>
      </header>
      

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-primary text-secondary flex flex-col items-center justify-center z-40 opacity-0 clip-circle"
        style={{ clipPath: "circle(0% at 50% 50%)" }} // Awal menu tersembunyi
      >
        <nav>
          <ul ref={linksRef} className="space-y-6 text-center">
            <li className="text-[2vw]">
              <TransitionLink newFunc={toggleMenu} position="banner" isMenu={isMenuOpen} href="/" label="Home"/>
            </li>
            <li className="text-[2vw]">
              <TransitionLink newFunc={toggleMenu} position="banner" isMenu={isMenuOpen} href="/about" label="about"/>
            </li>
            <li className="text-[2vw]">
              <a
                href="/contact"
                className="font-climate-crisis text-[4vw] uppercase"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
