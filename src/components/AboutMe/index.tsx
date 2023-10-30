import { type StaticImageData } from "next/image";
import Gallery from "./Gallery";
import { Scroller } from "./Scroller";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FADE_UP_ANIMATION_VARIANTS,
  container,
  item,
} from "../common/animText/animate";
import MobileVersion from "./Gallery/MobileVersion";

interface GalleryProps {
  moveItems: (x: number, y: number) => void;
  sections: {
    title: string;
    src: StaticImageData | undefined;
    color: string;
    cursorText: string;
    images: StaticImageData[];
    text: JSX.Element;
  }[];
  setSections: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        src: StaticImageData | undefined;
        color: string;
        cursorText: string;
        images: StaticImageData[];
        text: JSX.Element;
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

  const containerRef2 = useRef(null);
  const isInView2 = useInView(containerRef2, {
    margin: "0px 0px -40px 0px",
  });

  const containerRef3 = useRef(null);
  const isInView3 = useInView(containerRef3, {
    margin: "0px 0px -40px 0px",
  });
  const containerRef4 = useRef(null);
  const isInView4 = useInView(containerRef4, {
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
        <div className="mx-auto hidden max-w-2xl flex-col py-10 text-center leading-relaxed lg:flex">
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef2}
            animate={isInView2 ? "show" : "hidden"}
          >
            From a young age, my life has been punctuated by a fierce
            competitive spirit and a passion for sports. I devoted 15 years to
            honing my skills in <span className="font-semibold"></span>judo,
            dabbled in <span className="font-semibold"></span>boxing during a
            two-year stint in England, and more recently, shifted my focus
            towards <span className="font-semibold"></span>endurance sports.
            Today, my heart races with the thrill of{" "}
            <span className="font-semibold"></span>long-distance running and
            triathlon. Notably, I secured a spot in the{" "}
            <span className="font-semibold"></span>Ironman 70.3 World
            Championship and tackled one of the hardest races: the grueling{" "}
            <span className="font-semibold"></span>Ironman Lanzarote in 2021.
          </motion.p>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef3}
            animate={isInView3 ? "show" : "hidden"}
            className="py-4"
          >
            Beyond the athletic sphere, I have a curiosity for{" "}
            <span className="font-semibold"></span>building stuff. Whether
            it&#39;s piecing together PCs, mining setups from scratch, or
            tweaking the tech on my bike, I relish the hands-on approach.
            Recently, I delved deep into the custom keyboards rabbit hole,
            meticulously selecting everything from the springs and switches to
            the keycaps, and then bringing them all together with precision
            soldering.
          </motion.p>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef4}
            animate={isInView4 ? "show" : "hidden"}
          >
            Travel, for me, is not just a pastime but a journey of discovery. I
            thrive on forming new connections, understanding diverse cultures,
            and being captivated by varying landscapes. So far, my adventures
            have taken me to a dozen countries across the globe, each leaving
            its own indelible mark.
          </motion.p>
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
