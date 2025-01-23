"use client"
import React, { useEffect, useRef } from 'react'
import Try from "@/public/images/try.webp";
import Try2 from "@/public/images/try2.webp";
import Try3 from "@/public/images/try3.webp";
import gsap from 'gsap';
import ImageSquare from './PhotoList';

export default function Gallery() {

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0); // Melacak posisi scroll simulasi

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? -1 : 1; // Scroll ke bawah (-1) atau ke atas (+1)
      const distance = direction * 200; // Jarak per gerakan scroll

      // Calculate the new scroll position
      const newScrollPosition = scrollPosition.current + distance;

      // Get the width of the slider and the container
      const sliderWidth = slider.scrollWidth / 2; // Adjust for duplicated images
      // const containerWidth = slider.clientWidth;

      // Looping logic
      if (newScrollPosition > 0) {
        gsap.set(slider, { x: -sliderWidth });
        scrollPosition.current = -sliderWidth;
      } else if (newScrollPosition < -sliderWidth) {
        gsap.set(slider, { x: 0 });
        scrollPosition.current = 0;
      } else {
        // Geser slider menggunakan GSAP
        gsap.to(slider, {
          x: `+=${distance}`, // Geser sesuai arah scroll
          duration: 0.4, // Kecepatan animasi
          ease: "power1.out",
          onUpdate: () => {
            // Update posisi scroll
            scrollPosition.current = Number(gsap.getProperty(slider, "x"));
          },
          onComplete: () => {
            // Adjust the position to create an infinite loop effect
            if (scrollPosition.current <= -sliderWidth) {
              gsap.set(slider, { x: 0 });
              scrollPosition.current = 0;
            } else if (scrollPosition.current >= 0) {
              gsap.set(slider, { x: -sliderWidth });
              scrollPosition.current = -sliderWidth;
            }
          }
        });
      }
    };

    // Tambahkan event listener
    window.addEventListener("wheel", handleWheel);

    return () => {
      // Hapus event listener saat komponen di-unmount
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const images = [
    { src: Try, label: "Test2" },
    { src: Try2, label: "Test" },
    { src: Try3, label: "Test 3" },
    { src: Try, label: "Test 4" },
    { src: Try, label: "Test 4" },
    { src: Try, label: "Test 4" },
    { src: Try, label: "Test 4" },
  ];

  // Duplicate images for looping effect
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-secondary min-h-screen">
      <div className="w-[100vw] overflow-hidden pl-[6vw]">
        <div ref={sliderRef} className="flex gap-[1vw] w-screen h-full pt-[8vw]">
          {duplicatedImages.map((image, index) => (
            <ImageSquare key={index} src={image.src} index={index + 1} label={image.label} />
          ))}
        </div>
      </div>
    </section>
  );
} 