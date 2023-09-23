import Image from "next/legacy/image";
import React from "react";
import ImageHero from "~/public/images/hero/keyservlad._png_white_background_happy_software_developer_codin_be50f8eb-2311-4627-87b4-d3e2dfb055fd.png";
import { motion } from "framer-motion";
import { TypingText } from "./TypingText";
import Magnetic from "../common/Magnetic";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex min-h-[80vh] flex-col justify-center bg-white">
      <div className="lg:px-0 mx-auto flex max-w-[940px] flex-col-reverse items-center justify-center px-5 sm:px-16 md:px-32 lg:flex-row">
        <div className="flex flex-col items-center justify-center text-center lg:pl-6 lg:pr-14 lg:text-left lg:items-start">
          <h4 className="mb-[6px]">
            <motion.span
              key={`wave`}
              animate={{
                rotate: [0, 10, -10, 10, 0],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  ease: "linear",
                },
              }}
              className="mr-3 inline-block origin-bottom-right"
            >
              👋
            </motion.span>
            Hi! my name is Arnaud Guilhamat & I am a
          </h4>
          <TypingText text={"Fullstack developer"} />
          <p>
            Crafting Exceptional Digital Experiences. Transforming Complex
            Problems into Simple Solutions.
          </p>
          <div className="flex flex-row gap-4">
            <Magnetic>
              <Link
                href={"/contact"}
                className="relative z-10 flex cursor-pointer self-start rounded-lg border border-black bg-black px-10 py-4 font-bold text-white hover:border-black hover:bg-white hover:text-black"
              >
                Contact Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="ml-2 text-lg"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734c-.923-.283-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z"
                  ></path>
                </svg>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href={"/pdf/cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
                onClick={() => {
                  window.open("/pdf/cv.pdf", "_blank");
                }}
                className="flex cursor-pointer items-center self-center rounded-lg border border-slate-200 bg-white px-10 py-4 font-bold text-black hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="ml-2 text-lg"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153ZM6.71 2.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14ZM7.25 10A.75.75 0 0 1 8 9.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </Magnetic>
          </div>
        </div>
        <Magnetic>
          <div className="relative h-[350px] w-[350px] lg:h-[380px] lg:w-[380px]">
            <Image
              src={ImageHero}
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              placeholder="blur"
            />
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Hero;
