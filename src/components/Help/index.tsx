import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { slideUp, opacity } from "./animate";

const Help = () => {
  const title = "How can i help?";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <div className="block w-full bg-white">
      <div
        ref={containerRef}
        className="align-center mx-auto flex max-w-[940px] flex-col justify-center p-32"
      >
        <h2>
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
        <motion.div
          key={`help`}
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className="max-w-2xl py-2 text-center leading-relaxed"
        >
          <p className="">
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
            <span className="font-bold">software engineering</span>.
          </p>
          <p className="">
            These rigorous educational experiences provided me with a deep
            understanding of computer science, fostering both a passionate
            commitment to <span className="font-bold">continuous learning</span>{" "}
            and an aptitude for{" "}
            <span className="font-bold">simplifying complex problems</span>.
          </p>
          <p className="">
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
          </p>
          <p className="">
            This journey undoubtedly transformed the knowledge I gained during
            my academic pursuits and internships into practical, real-world
            software engineering expertise. It also taught me invaluable lessons
            that can only be acquired in the field, such as{" "}
            <span className="font-bold">effective team communication</span> and
            the art of{" "}
            <span className="font-bold">simplifying technical concepts</span>{" "}
            because let&#39;s be honest:{" "}
            <span className="italic">not everyone speaks our language!</span>
          </p>
          <p className="">
            Here is a list of the main tools i use and technical knowledge:
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Help;
