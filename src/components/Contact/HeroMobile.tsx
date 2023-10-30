import Image from "next/image";
import React from "react";
import ProfilePic from "~/public/images/footer/profile.jpg";

export const HeroMobile = () => {
  return (
    <div className="relative mx-[12vw] flex py-20">
      <div className="relative flex w-full flex-col">
        <h1 className="text-4xl font-semibold">
          <span className="mb-2  flex flex-row items-end">
            <div className="relative mr-3 h-16 w-16">
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="50% 25%"
                alt={"image"}
                src={ProfilePic}
                placeholder="blur"
                className="rounded-full"
              />
            </div>
            Looks like
          </span>
          <span>you need some help!</span>
        </h1>
        <div className="absolute -top-3 right-0 rotate-90">
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
  );
};
