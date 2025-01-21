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

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth / 2; // Lebar konten slider
      gsap.to(sliderRef.current, {
        x: -sliderWidth, // Geser ke kiri hingga -100% dari konten
        duration: 100, // Waktu untuk satu siklus animasi
        repeat: -1, // Ulangi terus-menerus
        ease: "linear", // Animasi linear
      });
    }
  }, []);

  return (
    <div className="w-full h-[40vh] overflow-hidden">
      <div ref={sliderRef} className="flex">
        {/* Gandakan gambar agar animasi loop lebih mulus */}
        {images.concat(images).map((img, index) => (
          <Image
            width={1000}
            height={1000}
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-[50vh] object-cover"
          />
        ))}
      </div>
    </div>
  );
}
