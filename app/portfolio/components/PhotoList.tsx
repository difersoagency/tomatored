import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  src: StaticImageData;
  label: string;
  index: number;
}

export default function ImageSquare({ src, label, index }: Props) {
  const labelRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const labelElement = labelRef.current;

    if (container && labelElement) {
      // Hover-in animation
      const handleMouseEnter = () => {
        gsap.to(labelElement, {
          y: 0, // Muncul di posisi aslinya
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      // Hover-out animation
      const handleMouseLeave = () => {
        gsap.to(labelElement, {
          y: 20, // Kembali ke bawah
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      // Tambahkan event listener
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        // Bersihkan event listener saat komponen unmount
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      className={`${
        index % 7 === 1 || index % 7 === 0
          ? "pt-[9vw]"
          : index % 7 === 2 || index % 7 === 6
          ? "pt-[6vw]"
          : index % 7 === 3 || index % 7 === 5
          ? "pt-[3vw]"
          : "pt-0"
      } relative`}
    >
      <Image
        ref={containerRef}
        src={src}
        width={1000}
        height={1000}
        alt={label}
        className="w-[100vw] h-[60vh] rounded-md object-cover max-w-[24vw]"
      />
      <h2
        ref={labelRef}
        className=" left-0 opacity-0 text-primary font-climate-crisis uppercase text-[1vw]"
      >
        {label}
      </h2>
    </div>
  );
}
