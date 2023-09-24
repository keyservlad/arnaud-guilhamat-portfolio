import { type StaticImageData } from "next/image";
import Gallery from "./Gallery";
import { Scroller } from "./Scroller";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { container, item } from "../common/animText/animate";
import MobileVersion from "./Gallery/MobileVersion";

interface GalleryProps {
  moveItems: (x: number, y: number) => void;
  sections: {
    title: string;
    src: StaticImageData | undefined;
    color: string;
    cursorText: string;
    images: StaticImageData[];
  }[];
  setSections: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        src: StaticImageData | undefined;
        color: string;
        cursorText: string;
        images: StaticImageData[];
      }[]
    >
  >;
  setModal: (value: any) => void;
  growCursor: () => void;
}

const AboutMe = ({
  moveItems,
  sections,
  setSections,
  setModal,
  growCursor,
}: GalleryProps) => {
  const title = "About Me";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: "0px 0px -40px 0px",
  });
  return (
    <>
      <div
        id="about-me"
        className="relative z-20 block w-full bg-[#f7f7fa] py-32"
      >
        <div className="mx-auto flex max-w-[940px] flex-col items-center justify-center ">
          <motion.h2
            ref={containerRef}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className=""
          >
            {title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={item}
                className="mr-2.5 inline-block"
              >
                {word === "" ? <span>&nbsp;</span> : word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <Scroller />
        <Gallery
          moveItems={moveItems}
          sections={sections}
          setModal={setModal}
          setSections={setSections}
          growCursor={growCursor}
        />
        <MobileVersion />
      </div>
    </>
  );
};

export default AboutMe;
