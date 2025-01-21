"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  "/images/try.webp",
  "/images/try2.webp",
  "/images/try3.webp",
  "/images/try.webp",
  "/images/try2.webp",
  "/images/try3.webp",
  "/images/try.webp",
  "/images/try2.webp",
  "/images/try3.webp",
];

export default function PhotoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0); // Melacak posisi scroll simulasi

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? -1 : 1; // Scroll ke bawah (-1) atau ke atas (+1)
      const distance = direction * 100; // Jarak per gerakan scroll

      // Geser slider menggunakan GSAP
      gsap.to(slider, {
        x: `+=${distance}`, // Geser sesuai arah scroll
        duration: 0.5, // Kecepatan animasi
        ease: "power1.out",
      });

      // Update posisi scroll
      scrollPosition.current += distance;
    };

    // Tambahkan event listener
    window.addEventListener("wheel", handleWheel);

    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (

   
    <div className="w-full h-screen overflow-hidden relative">
      <div ref={sliderRef} className="flex">
        {/* Gandakan gambar untuk membuat slider loop */}
        {images.concat(images).map((img, index) => (
          <Image
            width={1000}
            height={1000}
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-[30vw] h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
