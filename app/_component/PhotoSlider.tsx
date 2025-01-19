"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import Trial from '@/public/images/try.webp'

const PhotoCarousel: React.FC = () => {
  const photos = [
    {
      src: "/images/try.webp",
      link: "/page1",
      alt: "Foto 1",
    },
    {
      src: "/images/try2.webp",
      link: "/page2",
      alt: "Foto 2",
    },
    {
      src: "/images/try3.webp",
      link: "/page3",
      alt: "Foto 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [photos.length]);

  return (
    <div style={{ textAlign: "center" }}>
      {photos.map((photo, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
          }}
        >
          <Link href={photo.link}>

            <Image
            src={photo.src}
            width={1000}
            height={1000}
            alt={photo.alt}
            className=' mt-auto w-[30vw] h-[20vw]  object-cover'
            />
              {/* <img
                src={photo.src}
                alt={photo.alt}
                style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
              /> */}
          
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PhotoCarousel;
