"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  return (
    <div className="w-full h-[30vh] overflow-hidden ">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }} // Animasi perpindahan
        transition={{
          repeat: Infinity, // Ulangi terus
          duration: 20, // Waktu untuk menyelesaikan 1 putaran
          ease: "linear", // Gerakan linear tanpa jeda
        }}
      >
        {/* Gandakan gambar agar looping lebih mulus */}
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
      </motion.div>
    </div>
  );
}
