import Image from "next/image";
import React from "react";

export default function GridImage() {
  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-3 mt-[3vw]">
        <div className="row-span-2 ">
          <Image
            src="/images/kura.png"
            width={5000}
            height={5000}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#FFA897] flex flex-col px-[4vw]">
          <div className="w-full h-[7vw]"></div>
          <div className="mr-auto my-auto flex gap-[2vw]">
            <Image
              src="/images/arrow1.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[4vw] h-auto object-contain"
            />
            <p className="libre text-[5vw] font-bold text-[#FFF6CA]">
              Kura Kura
            </p>
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="my-auto mr-auto text-[#FFF6CA] text-[1.2vw] smooch"
            >
              View More
            </a>
            <div className="flex flex-col">
              <Image
                src="/images/donut.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[8vw] mr-[3vw]"
              />
              <Image
                src="/images/orchid.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[2vw] ml-auto animate-spin2"
              />
            </div>
          </div>
          <div className="w-full h-[7vw]"></div>
        </div>
        <div className="bg-purple-200 row-span-2 ">
          <Image
            src="/images/a.png"
            width={5000}
            height={5000}
            alt="image"
            className="w-full h-full"
          />
        </div>
        
        <div className="bg-[#F5E181] flex flex-col px-[4vw]">
          <div className="w-full h-[7vw]"></div>
          <a href="#" className=" ml-auto items-center my-auto flex gap-[2vw]">
            <p className="libre text-[5vw] font-bold text-[#FB6649]">
            Santai Seltzer
            </p>
            <Image
              src="/images/arrow3.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[4vw] h-auto object-contain"
            />
            
          </a>
          <div className="flex items-start">
            
            <div className="flex flex-col">
              <Image
                src="/images/vector.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[5vw] mr-[3vw]"
              />

            </div>
            <a
              href="#"
              className="my-auto ml-auto text-[#FB6649] text-[1.2vw] smooch"
            >
              View More
            </a>
          </div>
          <div className="w-full h-[7vw]"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 ">
        <div className="row-span-2 ">
          <Image
            src="/images/coklat.png"
            width={5000}
            height={5000}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#7584EC] flex flex-col px-[4vw]">
          <div className="w-full h-[7vw]"></div>
          <div className="mr-auto my-auto flex gap-[2vw]">
            <Image
              src="/images/arrow2.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[4vw] h-auto object-contain"
            />
            <p className="libre text-[5vw] font-bold text-[#F5E181]">
              Sorga
            </p>
          </div>
          <div className="flex items-start">
            <a
              href="#"
              className="my-auto mr-auto text-[#F5E181] text-[1.2vw] smooch"
            >
              View More
            </a>
            <div className="flex flex-col">
              <Image
                src="/images/candy.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[3vw] mr-[3vw]"
              />
              <Image
                src="/images/keju.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[4vw] ml-auto "
              />
            </div>
          </div>
          <div className="w-full h-[7vw]"></div>
        </div>
        <div className="bg-purple-200 row-span-2 ">
          <Image
            src="/images/ginger.png"
            width={5000}
            height={5000}
            alt="image"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#FFA897] flex flex-col px-[4vw]">
          <div className="w-full h-[7vw]"></div>
          <a href="#" className=" ml-auto items-center my-auto flex gap-[2vw]">
            <p className="libre text-[5vw] font-bold text-[#FFF6CA]">
            Santai Seltzer
            </p>
            <Image
              src="/images/arrow4.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[4vw] h-auto object-contain"
            />
            
          </a>
          <div className="flex items-start">
            
            <div className="flex flex-col">
            <Image
                src="/images/flower.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[4vw] mr-[3vw] animate-spin2"
              />
              <Image
                src="/images/burger.png"
                width={500}
                height={500}
                alt="Donat"
                className="w-[4vw] ml-[6vw] "
              />

            </div>
            <a
              href="#"
              className="my-auto ml-auto text-[#FFF6CA] text-[1.2vw] smooch"
            >
              View More
            </a>
          </div>
          <div className="w-full h-[7vw]"></div>
        </div>
      </div>
    </section>
  );
}
