import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ProfilePic from "~/public/images/footer/profile.jpg";
import Rounded from "../common/RoundedButton";
import Magnetic from "../common/Magnetic";
import Circle from "./Circle";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <>
      <Circle />
      <motion.div
        style={{ y }}
        ref={container}
        className="relative flex flex-col items-center justify-center bg-dark text-white"
      >
        <footer className="w-full max-w-[1800px] bg-dark pt-44">
          <div className="relative mx-[200px] border-b border-b-[#868686] pb-[100px]">
            <span className="flex items-center">
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
                <Image
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 25%"
                  fill={true}
                  alt={"image"}
                  src={ProfilePic}
                  placeholder="blur"
                />
              </div>
              <h2 className="ml-[0.3em] text-7xl font-light">Let&#39;s work</h2>
            </span>
            <h2 className="text-7xl font-light">together</h2>
            <motion.div
              style={{ x }}
              className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]"
            >
              <Rounded
                backgroundColor={"#334BD3"}
                backgroundColorHover={"#455CE9"}
                style="relative flex h-44 w-44 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white z-10"
              >
                <p
                  style={{ transition: "color 0.4s linear" }}
                  className="z-30 m-0 cursor-pointer font-light"
                >
                  Get in touch
                </p>
              </Rounded>
            </motion.div>
            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-full top-[30%]"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>
          <div className="mx-[200px] mt-[100px] flex gap-5">
            <Rounded>
              <p
                style={{ transition: "color 0.4s linear" }}
                className="relative z-10 my-4 cursor-pointer"
              >
                info@dennissnellenberg.com
              </p>
            </Rounded>
            <Rounded>
              <p
                style={{ transition: "color 0.4s linear" }}
                className="relative z-20 my-4 cursor-pointer"
              >
                +31 6 27 84 74 30
              </p>
            </Rounded>
          </div>
          <div className="mt-32 flex justify-between p-5">
            <div className="flex items-end gap-2">
              <span className="flex flex-col gap-4">
                <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
                  Version
                </h3>
                <p>2023 © Edition</p>
              </span>
              <span className="flex flex-col gap-4">
                <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
                  Version
                </h3>
                <p>11:49 PM GMT+2</p>
              </span>
            </div>
            <div className="flex items-end gap-2">
              <span className="flex flex-col gap-4">
                <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
                  socials
                </h3>
                <Magnetic>
                  <p>Awwwards</p>
                </Magnetic>
              </span>
              <Magnetic>
                <p>Instagram</p>
              </Magnetic>
              <Magnetic>
                <p>Dribbble</p>
              </Magnetic>
              <Magnetic>
                <p>Linkedin</p>
              </Magnetic>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
