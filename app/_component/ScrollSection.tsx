"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Gallery from "../portfolio/components/Gallery";

export default function ScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Registrasi plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    if (section) {
      // Buat animasi dengan ScrollTrigger
      gsap.to(section, {
        y: "-50%", // Geser elemen ke atas saat scroll
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".hed", // Elemen yang memicu ScrollTrigger
          start: "top top", // Mulai saat elemen mencapai bagian atas viewport
          end: "bottom center", // Selesai saat elemen bagian bawah mencapai atas viewport
          scrub: true, // Animasi mengikuti scroll (smooth)
        },
      });
    }

    return () => {
      // Bersihkan animasi saat komponen di-unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen bg-primary absolute min-h-screen "
    >
        <Gallery/>
    </section>
  );
}
