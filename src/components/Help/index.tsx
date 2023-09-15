import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { slideUp, slideUpDescription } from "./animate";

const Help = () => {
  const title = "How can i help?";
  const text1 =
    "I successfully completed two master's degrees, the first at the engineering school";
  const text2 =
    "in Paris, France, with a major in cybersecurity and networks, and the second one at";
  const text3 = "in Canada, specializing in software engineering.";
  const text4 =
    "These rigorous educational experiences provided me with a deep understanding of computer science, fostering both a passionate commitment to continuous learning and an aptitude for simplifying complex problems.";
  const text5 =
    "Alongside my studies, I discovered a strong entrepreneurial spirit, which led me to co-found";
  const text6 =
    "two years ago. In this role, I took charge and lead the development of our complex website and all related IT aspects.";
  const text7 =
    "This journey undoubtedly transformed the knowledge I gained during my academic pursuits and internships into practical, real-world software engineering expertise. It also taught me invaluable lessons that can only be acquired in the field, such as effective team communication and the art of simplifying technical concepts because let's be honest: not everyone speaks our language!";
  const text8 =
    "Here is a list of the main tools i use and technical knowledge:";

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const boldWordList = [
    "two",
    "masters",
    "degrees",
    "engineering",
    "school",
    "software",
    "engineering",
    "continuous",
    "learning",
    "simplifying",
    "complex",
    "problems",
    "effective",
    "team",
    "communication",
    "simplifying",
    "technical",
    "concepts",
  ];

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
        <div className="max-w-2xl py-2 text-center leading-relaxed">
          <p className="">
            {text1.split(" ").map((word, index) => {
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
            <Link target="_blank" href={"https://www.isep.fr"}>
              <span className="relative inline-flex overflow-hidden">
                <motion.span
                  variants={slideUpDescription}
                  custom={text1.split(" ").length}
                  animate={isInView ? "open" : "closed"}
                  className="mr-1 cursor-pointer underline"
                >
                  ISEP
                </motion.span>
              </span>
            </Link>
            {text2.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={index + text1.split(" ").length + 1}
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
            <Link
              target="_blank"
              href={
                "https://www.usherbrooke.ca/admission/programme/651/maitrise-en-genie-logiciel"
              }
            >
              <span className="relative inline-flex overflow-hidden">
                <motion.span
                  variants={slideUpDescription}
                  custom={text1.split(" ").length + text2.split(" ").length + 1}
                  animate={isInView ? "open" : "closed"}
                  className="mr-1 cursor-pointer underline"
                >
                  Sherbrooke University
                </motion.span>
              </span>
            </Link>
            {text3.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      1
                    }
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
          <p className="">
            {text4.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      text3.split(" ").length +
                      1
                    }
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
          <p className="">
            {text5.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      text3.split(" ").length +
                      text4.split(" ").length +
                      1
                    }
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
            <Link target="_blank" href={"https://www.emovin.fr"}>
              <span className="relative inline-flex overflow-hidden">
                <motion.span
                  variants={slideUpDescription}
                  custom={
                    text1.split(" ").length +
                    text2.split(" ").length +
                    text3.split(" ").length +
                    text4.split(" ").length +
                    text5.split(" ").length +
                    2
                  }
                  animate={isInView ? "open" : "closed"}
                  className="mr-1 cursor-pointer underline"
                >
                  Emovin
                </motion.span>
              </span>
            </Link>
            {text6.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      text3.split(" ").length +
                      text4.split(" ").length +
                      text5.split(" ").length +
                      2
                    }
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="mr-1"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <p className="">
            {text7.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      text3.split(" ").length +
                      text4.split(" ").length +
                      text5.split(" ").length +
                      text6.split(" ").length +
                      2
                    }
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
          <p className="">
            {text8.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className="relative inline-flex overflow-hidden"
                >
                  <motion.span
                    variants={slideUpDescription}
                    custom={
                      index +
                      text1.split(" ").length +
                      text2.split(" ").length +
                      text3.split(" ").length +
                      text4.split(" ").length +
                      text5.split(" ").length +
                      text6.split(" ").length +
                      text7.split(" ").length +
                      2
                    }
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="mr-1"
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

export default Help;
