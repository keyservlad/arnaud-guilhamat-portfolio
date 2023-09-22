import Image from "next/image";
import React from "react";
import ProfilePic from "~/public/images/footer/profile.jpg";

export default function Hero() {
  return (
    <div className="relative flex py-[21vh]">
      <div className="w-3/4">
        <h1 className="flex flex-col text-7xl">
          <span className="text-4xl">Looks like you need some help!!!</span>
          <span>Reach Out!</span>
        </h1>
      </div>
      <div className="relative flex w-1/4 pl-7 pt-12">
        <div className="relative h-[125px] w-[125px]">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="50% 25%"
            alt={"image"}
            src={ProfilePic}
            placeholder="blur"
            className="rounded-full"
          />
          <div className="absolute -bottom-32 -translate-y-1/2 pl-2">
            <svg
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="scale-[2]"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
