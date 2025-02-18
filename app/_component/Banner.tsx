"use client";

import React, { forwardRef } from "react";
import Marquee from "./Marque";
import GridImage from "./GridImage";
import Image from "next/image";

const Banner = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="bg-secondary banner  pt-[10vw]"
    >
      
      <div className="hed">
      <div className=" mb-[3vw]">
          <Marquee/>
        </div>
        <div className=" px-[6vw] mb-[6vw]">
          <div className="  bg-secondary w-full flex">
            <h1
              className={`mr-auto text-[2vw] uppercase leading-[2.5vw] absolute pr-[7vw] z-10 font-bold libre`}
            >
              Vibrant Indonesia-based production house, offering full-scale 
              production and representing creative crew.
            </h1>
            <Image src="/images/star.png" width={500} height={500} alt="arrow" className="w-[5vw] animate-spin2 ml-auto mr-[11vw] mt-[-1vw]"/>
          </div>
          
        </div>
        
        <div>
          <GridImage/>
        </div>
      </div>

     
      
    </section>
  );
});

Banner.displayName = "Banner";
export default Banner;
