import Image from "next/image";
import React from "react";
import ImageHero from "~/public/images/hero/keyservlad._png_white_background_happy_software_developer_codin_be50f8eb-2311-4627-87b4-d3e2dfb055fd.png";

const Hero = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center bg-white">
      <div className="mx-auto flex max-w-[940px] flex-row items-center justify-center">
        <div className="flex flex-col justify-center pl-6 pr-14">
          <h4 className="mb-[6px]">
            👋 Hi! my name is Arnaud Guilhamat & I am a
          </h4>
          <h1 className="mt-[10px] min-w-[420px] font-extrabold">
            Fullstack developer
          </h1>
          <p>
            Crafting Exceptional Digital Experiences. Transforming Complex
            Problems into Simple Solutions.
          </p>
          <div className="flex flex-row gap-4">
            <button className="relative z-10 my-[10px] block cursor-pointer self-start rounded-lg border-black bg-black px-10 py-4 font-bold text-white">
              Contact Me
            </button>
            <button className="cursor-pointer self-center rounded-lg border border-slate-200 bg-white px-10 py-4 font-bold text-black">
              Learn more ↓
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={ImageHero}
            alt="Picture of the author"
            width={500}
            height={500}
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
