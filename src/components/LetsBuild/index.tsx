import { motion, useInView } from "framer-motion";
import {
  container,
  item,
  FADE_UP_ANIMATION_VARIANTS,
} from "../common/animText/animate";
import { useRef } from "react";

const BuildSomething = () => {
  const title = "Let's build something together.";

  const containerRefTitle = useRef(null);
  const isInViewTitle = useInView(containerRefTitle, {
    margin: "0px 0px -40px 0px",
  });
  const containerRefPara = useRef(null);
  const isInViewPara = useInView(containerRefPara, {
    margin: "0px 0px -40px 0px",
  });

  return (
    <div className="block w-full bg-[#f7f7fa]">
      <div className="mx-auto flex max-w-[940px] flex-col items-center justify-center px-5 sm:px-16 md:px-32 py-32">
        <div>
          <motion.h2
            variants={container}
            initial="hidden"
            animate={isInViewTitle ? "show" : "hidden"}
            className=""
            ref={containerRefTitle}
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
            className="max-w-2xl py-2 text-center leading-relaxed"
            variants={FADE_UP_ANIMATION_VARIANTS}
            initial="hidden"
            ref={containerRefPara}
            animate={isInViewPara ? "show" : "hidden"}
          >
            I am opened for a <span className="font-bold">fullstack</span> or{" "}
            <span className="font-bold">frontend</span> position. I am curently
            based in Paris, France but I&#39;m enthusiastically open to
            relocating for a project that truly ignites my{" "}
            <span className="font-bold">passion</span> though. Challenges
            don&#39;t intimidate me; in fact, I welcome them with open arms! No
            matter the industry, I&#39;d love to talk with you and see how we
            could create something <span className="font-bold">wonderful</span>.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BuildSomething;
