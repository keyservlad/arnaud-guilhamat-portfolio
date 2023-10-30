import Image from "next/legacy/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ProfilePic from "~/public/images/footer/profile.jpg";
import Rounded from "../common/RoundedButton";
import Circle from "./Circle";
import Link from "next/link";
import ActualFooter from "./AcutalFooter";

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
        key={`footer`}
        style={{ y }}
        ref={container}
        className="relative flex flex-col items-center justify-center bg-dark text-white"
      >
        <div className="w-full max-w-[1800px] bg-dark pt-44">
          <div>
            <div className="relative mx-10 border-b border-b-[#868686] pb-[100px] sm:mx-24 lg:mx-[200px]">
              <span className="flex items-center">
                <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 25%"
                    alt={"image"}
                    src={ProfilePic}
                    placeholder="blur"
                  />
                </div>
                <h2 className="ml-[0.3em] text-4xl font-semibold sm:text-6xl lg:text-7xl">
                  Let&#39;s work
                </h2>
              </span>
              <h2 className="mt-0 text-left text-4xl font-semibold sm:text-6xl lg:text-7xl">
                together
              </h2>
              <Link href={"/contact"}>
                <motion.div
                  key={`footer_button`}
                  style={{ x }}
                  className="absolute left-[calc(100%-300px)] xl:left-[calc(100%-400px)] top-[calc(100%-75px)]"
                >
                  <Rounded
                    backgroundColor={"#334BD3"}
                    backgroundColorHover={"#455CE9"}
                    style="relative flex h-40 w-40 cursor-pointer items-center justify-center overflow-hidden rounded-full text-white z-10"
                  >
                    <p
                      style={{ transition: "color 0.4s linear" }}
                      className="z-30 m-0 cursor-pointer font-light"
                    >
                      Get in touch
                    </p>
                  </Rounded>
                </motion.div>
              </Link>
              <motion.svg
                key={`footer_arrow`}
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
            <div className="mt-32 flex w-full flex-col gap-5 lg:mx-[200px] lg:flex-row">
              <Link href="mailto:arnaud.guilhamat@emovin.fr">
                <div className="w-full">
                  <Rounded>
                    <p
                      style={{ transition: "color 0.4s linear" }}
                      className="relative z-10 my-2 cursor-pointer lg:my-4"
                    >
                      arnaud.guilhamat@emovin.fr
                    </p>
                  </Rounded>
                </div>
              </Link>
              <Link href="tel:+33632464694">
                <Rounded>
                  <p
                    style={{ transition: "color 0.4s linear" }}
                    className="relative z-20 my-2 cursor-pointer lg:my-4"
                  >
                    +33 6 32 32 46 94
                  </p>
                </Rounded>
              </Link>
            </div>
          </div>
          <ActualFooter />
        </div>
      </motion.div>
    </>
  );
}
