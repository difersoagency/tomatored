"use client";

import React, { forwardRef } from "react";
import PhotoSlider from "./PhotoSlider";

const Banner = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="bg-secondary banner overflow-hidden"
    >
      
      <div className="px-[6vw] absolute top-[35%]">
        <PhotoSlider />
      </div>

      <div className="hed">
        <div className="flex px-[6vw]">
          <div className="h-screen py-[3vw] gap-[5vw] flex bg-secondary w-full">
            <h1
              className={`mt-auto mr-auto text-[6vw] font-climate-crisis uppercase leading-[7vw] text-primary`}
            >
              TOMATO
            </h1>
          </div>
          <div className="h-screen py-[3vw] gap-[5vw] flex bg-secondary w-full">
            <h1 className="text-primary mt-auto ml-auto text-[6vw] font-climate-crisis uppercase leading-[7vw]">
              RED
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
});

Banner.displayName = "Banner";
export default Banner;
