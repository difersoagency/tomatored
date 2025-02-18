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

const Marquee = () => {
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
    <div className="relative w-full overflow-hidden bg-secondary py-4">
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div ref={marqueeRef} className="flex w-max space-x-8 whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <p className="text-lg font-bold text-gray-700 smooch">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
    </div>
  );
};

export default Marquee;
