import React from "react";
import PhotoSlider from "./_component/PhotoSlider";
import Header from "./_component/Header";
import ScrollAnimation from "./_component/ScrollSection";

export default function page() {
  return (
    <>
      <div className="overflow-y-hidden">
      <section className="bg-secondary overflow-hidden">
        {/* <Header/> */}
        {/* <PhotoCarousel/> */}
        <Header/>
        <div className="px-[6vw] absolute top-[35%]">
          <PhotoSlider />
        </div>
        
       <section className="hed">
              <div className="flex px-[6vw]">
                <div  className="h-screen  py-[3vw] gap-[5vw] flex bg-secondary w-full">
                  <h1  className={`mt-auto mr-auto text-[6vw] font-climate-crisis uppercase leading-[7vw] text-primary`}>
                    TOMATO
                  </h1>
                </div>
                <div  className="h-screen   py-[3vw] gap-[5vw] flex bg-secondary w-full">
                  <h1 className="text-primary mt-auto ml-auto text-[6vw] font-climate-crisis uppercase leading-[7vw]">
                    RED
                  </h1>
                </div>
              </div>
            </section>
      </section>
      {/* <ScrollAnimation/> */}
      </div>
    
    </>
  );
}
