import React from "react";
import PhotoSlider from "./_component/PhotoSlider";
import Header from "./_component/Header";

export default function page() {
  return (
    <>
      <section className="bg-secondary">
        {/* <Header/> */}
        {/* <PhotoCarousel/> */}
        <Header/>
        <div className="px-[6vw] absolute top-[50%]">
          <PhotoSlider />
        </div>
        <div className="flex px-[6vw]">
          <div className="h-screen  py-[3vw] gap-[5vw] flex bg-secondary w-full">
            <h1 className="text-primary mt-auto mr-auto text-[6vw] font-climate-crisis uppercase leading-[7vw]">
              TOMATO
            </h1>
          </div>
          <div className="h-screen   py-[3vw] gap-[5vw] flex bg-secondary w-full">
            <h1 className="text-primary mt-auto ml-auto text-[6vw] font-climate-crisis uppercase leading-[7vw]">
              RED
            </h1>
          </div>
        </div>
      </section>

      <section className="h-screen w-full">

      </section>
    </>
  );
}
