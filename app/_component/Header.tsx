"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
          isMenuOpen ? "bg-transparent" : isScrolled ? "bg-white bg-opacity-70" : "bg-transparent"
        }`}
      >
        <div className="flex px-[6vw] items-center justify-between py-[2vw]">
          <div>
            <a
              onClick={toggleMenu}
              className={`text-[1.5vw] smooch tracking-[0.1rem] ${isMenuOpen ? "text-secondary" : "text-primary"} cursor-pointer`}
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/tomatored.photo/"
              target="_blank"
              className={`text-[1.5vw] smooch tracking-[0.1rem] ${isMenuOpen ? "text-secondary" : "text-primary"} cursor-pointer uppercase`}
              rel="noopener noreferrer"
            >
              Instagram.
            </a>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary text-secondary flex flex-col items-center justify-center z-40"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 left-0 px-[6vw] py-[2vw]"
            ></motion.div>

            <nav className="text-center">
              <ul className="space-y-6">
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                  className="text-[2vw] smooch tracking-[0.1rem]"
                >
                  <a
                    href="#section1"
                    className="font-climate-crisis text-[4vw] uppercase"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
                  className="text-[2vw] smooch tracking-[0.1rem]"
                >
                  <a
                    href="#section2"
                    className="font-climate-crisis text-[4vw] uppercase"
                    onClick={toggleMenu}
                  >
                    Works
                  </a>
                </motion.li>
                <motion.li
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
                  className="text-[2vw] smooch tracking-[0.1rem]"
                >
                  <a
                    href="#section3"
                    className="font-climate-crisis text-[4vw] uppercase"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
