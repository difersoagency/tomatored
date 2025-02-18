import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-secondary py-[6vw] px-[6vw]">
      <div className="grid grid-cols-2 items-center">
        <div className="pr-[15vw]">
          <div className="flex gap-[2vw]">
            <h2 className="libre font-bold text-[5vw]">say hello</h2>
            <Image
              src="/images/glass.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[5vw] object-contain "
            />
          </div>
          <p className="text-[1.4vw] pr-[2vw]">
            We’d love to hear from you! Let’s create your next amazing project
            together.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="inline-block">
            <Image
              src="/images/mexican.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[5vw] object-contain mb-[1vw] ml-auto mr-[2vw]"
            />
            <a
              href="/contact"
              className="text-[1vw] bg-primary text-white px-[1.4vw] py-[1vw] rounded-full hover:bg-secondary border-primary border hover:text-primary transition-all"
            >
              Get In Touch →
            </a>
          </div>
        </div>
      </div>

      <hr className="border-black my-[4vw]" />

      <div className="grid grid-cols-2 items-center">
        <div className="pr-[15vw] flex flex-col gap-[0.5vw]">
          <a href="mailto:hello@tomatoredstudio.com" className="underline text-[1vw]">hello@tomatoredstudio.com</a>
          <a href="https://wa.me/628112341234" className=" text-[1vw]">+62 81 1234 1234</a>

          <div className="grid grid-cols-2 pr-[10vw] mt-[4vw]">
            <div className="flex flex-col gap-[0.6vw]">
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">Work</a>
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">Process</a>
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">Contact</a>
            </div>

            <div className="flex flex-col gap-[0.6vw]">
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">Instagram</a>
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">TikTok</a>
            <a href="https://wa.me/628112341234" className=" text-[0.8vw]">Behance</a>
            </div>
          </div>
          
        </div>

        <div className="flex justify-end">
          <div className="inline-block">
            <Image
              src="/images/logo.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[15vw] object-contain mb-[3vw] ml-auto "
            />

<Image
              src="/images/tomat.png"
              width={500}
              height={500}
              alt="arrow"
              className="w-[10vw] object-contain ml-auto mr-[4vw]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
