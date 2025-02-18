'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const items = [
  { type: 'text', content: 'Product Videography' },
  { type: 'text', content: 'Stop Motion' },
  { type: 'text', content: 'Website Development' },
  { type: 'text', content: 'Product Photography' },
  { type: 'text', content: 'Product Videography' },
  { type: 'text', content: 'Stop Motion' },
  { type: 'text', content: 'Website Development' },
  { type: 'text', content: 'Product Photography' },
  { type: 'text', content: 'Product Videography' },
  { type: 'text', content: 'Stop Motion' },
  { type: 'text', content: 'Website Development' },
  { type: 'text', content: 'Product Photography' },
  { type: 'text', content: 'Product Videography' },
  { type: 'text', content: 'Stop Motion' },
  { type: 'text', content: 'Website Development' },
  { type: 'text', content: 'Product Photography' },
  { type: 'text', content: 'Product Videography' },
  { type: 'text', content: 'Stop Motion' },
  { type: 'text', content: 'Website Development' },
  { type: 'text', content: 'Product Photography' },
];

const ViewMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current && containerRef.current) {
      const width = marqueeRef.current.scrollWidth / 2;
      gsap.to(marqueeRef.current, {
        x: `-${width}px`,
        duration: 50,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % width}px`,
        },
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#7584EC] py-4">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={marqueeRef} className="flex w-max space-x-8 whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <a href='#' key={index} className="flex items-center space-x-4">
              <p className="text-[2.5vw] font-semibold text-white libre uppercase">View All Work</p>
            </a>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#7584EC] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#7584EC] to-transparent pointer-events-none" />
    </div>
  );
};

export default ViewMarquee;
