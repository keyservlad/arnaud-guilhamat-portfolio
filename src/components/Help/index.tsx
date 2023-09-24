import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  item,
  container,
  FADE_UP_ANIMATION_VARIANTS,
} from "../common/animText/animate";
import Link from "next/link";

const BuildSomething = () => {
  const title = "How can I help?";

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
  const containerRef5 = useRef(null);
  const isInView5 = useInView(containerRef5, {
    margin: "0px 0px -40px 0px",
  });
  const containerRef6 = useRef(null);
  const isInView6 = useInView(containerRef6, {
    margin: "0px 0px -40px 0px",
  });

  return (
    <div className="block w-full bg-white">
      <div className="mx-auto flex max-w-[940px] flex-col items-center justify-center px-5 py-32 sm:px-16 md:px-32">
        <div ref={containerRef}>
          <motion.h2
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
          <motion.p
            className="max-w-2xl py-2 text-center leading-loose"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef2}
            animate={isInView2 ? "show" : "hidden"}
          >
            I successfully completed{" "}
            <span className="font-bold">two master&#39;s degrees</span>, the
            first at the <span className="font-bold">engineering school</span>{" "}
            <Link
              target="_blank"
              href={"https://www.isep.fr"}
              className="cursor-pointer underline"
            >
              ISEP
            </Link>{" "}
            in Paris, France, with a major in cybersecurity and networks, and
            the second one at{" "}
            <Link
              target="_blank"
              href={
                "https://www.usherbrooke.ca/admission/programme/651/maitrise-en-genie-logiciel"
              }
              className="cursor-pointer underline"
            >
              Sherbrooke University
            </Link>{" "}
            in Canada, specializing in{" "}
            <span className="font-bold">software engineering.</span>
          </motion.p>
          <motion.p
            className="max-w-2xl py-2 text-center leading-loose"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef3}
            animate={isInView3 ? "show" : "hidden"}
          >
            These rigorous educational experiences provided me with a deep
            understanding of computer science, fostering both a passionate
            commitment to <span className="font-bold">continuous learning</span>{" "}
            and an aptitude for{" "}
            <span className="font-bold">simplifying complex problems.</span>
          </motion.p>
          <motion.p
            className="max-w-2xl py-2 text-center leading-loose"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef4}
            animate={isInView4 ? "show" : "hidden"}
          >
            Alongside my studies, I discovered a strong entrepreneurial spirit,
            which led me to co-found{" "}
            <Link
              target="_blank"
              href={"https://www.emovin.fr"}
              className="cursor-pointer underline"
            >
              Emovin
            </Link>{" "}
            two years ago. In this role, I took charge and lead the development
            of our complex website and all related IT aspects.
          </motion.p>
          <motion.p
            className="max-w-2xl py-2 text-center leading-loose"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef5}
            animate={isInView5 ? "show" : "hidden"}
          >
            This journey undoubtedly transformed the knowledge I gained during
            my academic pursuits and internships into practical, real-world
            software engineering expertise. It also taught me invaluable lessons
            that can only be acquired in the field, such as{" "}
            <span className="font-bold">effective team communication</span> and
            the art of{" "}
            <span className="font-bold">simplifying technical concepts</span>{" "}
            because let&#39;s be honest:{" "}
            <span className="italic">not everyone speaks our language!</span>
          </motion.p>
          <motion.p
            className="max-w-2xl py-2 text-center leading-loose"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRef6}
            animate={isInView6 ? "show" : "hidden"}
          >
            Here is a list of the main tools i use and technical knowledge:
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BuildSomething;
