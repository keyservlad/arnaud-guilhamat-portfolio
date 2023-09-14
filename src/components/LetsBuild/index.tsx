import { motion, useInView } from "framer-motion";
import { slideUp, slideUpDescription } from "./animate";
import { useRef } from "react";

const BuildSomething = () => {
  const title = "Let's build something together.";
  const description =
    "I am opened for a fullstack or frontend position. I am curently based in Paris, France but I'm enthusiastically open to relocating for a project that truly ignites my passion though. Challenges don't intimidate me; in fact, I welcome them with open arms! No matter the industry, I'd love to talk with you and see how we could create something wonderful.";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const boldWordList = ["fullstack", "frontend", "passion", "wonderful"];

  return (
    <div className="block w-full bg-[#f7f7fa]">
      <div className="align-center mx-auto flex max-w-[940px] flex-col justify-center p-32">
        <div ref={containerRef}>
          <h2 className="relative">
            {title.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="mr-2"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </h2>
          <p className="max-w-2xl py-2 text-center leading-loose">
            {description.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className={
                      "mr-1" +
                      (boldWordList.includes(word.replace(/[^a-z]/g, "")) // remove special characters
                        ? " font-bold"
                        : "")
                    }
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuildSomething;
