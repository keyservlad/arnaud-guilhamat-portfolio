import Image from "next/legacy/image";
import React, { useRef } from "react";
import ImageProjects from "~/public/images/projects/projects-image.png";

import LogoEmovin from "~/public/images/projects/logo_emovin-05.c2c25522.svg";
import LogoTwitter from "~/public/images/projects/1f426.png";
import LogoAG from "~/public/images/logos/LOGO-GA-AG-final.svg";
import LogoSkiFamily from "~/public/images/projects/ski_family_menu.b00303521a8d.svg";
import Link from "next/link";

import GithubImage from "~/public/images/projects/github.svg";
import SVGArrow from "~/public/images/projects/arrow-circle-up-right-svgrepo-com.svg";
import { useInView } from "framer-motion";

import { motion } from "framer-motion";
import {
  FADE_UP_ANIMATION_VARIANTS,
  container,
  item,
} from "../common/animText/animate";
import Magnetic from "../common/Magnetic";
import LogoSVG from "./LogoSVG";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    logo: any;
    link: string;
    github: string | undefined;
    live: string | undefined;
  };
}

const projects = [
  {
    title: "EMOVIN",
    description:
      "Initially built with Shopify, our needs evolved and we decided to rebuild our own frontend with Next.js, keeping Shopify as a CMS, communicating via the Storefront API and GraphQL.",
    logo: LogoEmovin,
    link: "/",
    github: "https://github.com/keyservlad/shopify-next-js",
    live: "https://www.emovin.fr",
  },
  {
    title: "CHIRP",
    description:
      "Twitter but only with emojis 🐦... fullstack project built with the T3 Stack with Next.js, Typescript, tRPC, Prisma, Tailwindcss, NextAuth. Hosted on Planetscale & Vercel",
    logo: LogoTwitter,
    link: "/",
    github: "https://github.com/keyservlad/twitter-emojis-t3-stack",
    live: "https://twitter-emojis-five.vercel.app/",
  },
  {
    title: "PORTFOLIO",
    description:
      "Experienced with various B2B products, including Shopify, WP. Create appealing solutions for business clients.",
    logo: LogoAG,
    link: "/",
    github: "https://github.com/keyservlad/arnaud-guilhamat-portfolio",
    live: undefined,
  },
  {
    title: "SKI FAMILY",
    description:
      "Experienced with various B2B products, including Shopify, WP. Create appealing solutions for business clients.",
    logo: LogoSkiFamily,
    link: "/",
    github: undefined,
    live: "https://www.ski-family.fr/fr/",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: "0px 0px -40px 0px",
  });

  const title = "Check out some of the products I've worked on";

  return (
    <div id="my-works" className="bg-[#f7f7fa]">
      <div className="mx-auto flex max-w-[940px] flex-col items-center justify-between pb-10 pt-20">
        <motion.div
          ref={containerRef}
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-10 mt-0 flex flex-row items-center justify-between gap-x-8 text-left"
        >
          <div className="flex flex-col justify-start">
            <motion.h2
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="max-w-md text-left"
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
            <p className="mb-5 max-w-[649px] p-0 text-left">
              My biggest project is building the website for my own startup{" "}
              <span className="font-bold">Emovin</span>, since 2021. I am always
              curious about new technologies and my never ending thirst for
              learning always makes me want to build new projects!
            </p>
            <Link
              target="_blank"
              href="https://github.com/keyservlad"
              className="flex cursor-pointer self-start rounded-lg border border-slate-200 bg-white px-10 py-4 font-bold text-black hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
            >
              See other projects
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M13 3L16.293 6.293L9.29297 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z"
                  fill="currentColor"
                />
                <path
                  d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="relative inline-block max-w-full align-middle">
            <Image
              src={ImageProjects}
              alt="illustration on notebook and coffee"
              width={217}
              height={184}
              objectFit="contain"
              objectPosition="center"
              placeholder="blur"
            />
          </div>
        </motion.div>
        <div className="mb-6 mt-0 flex flex-row items-center justify-between gap-x-8">
          <div className="mx-4 grid w-full grid-cols-2 gap-16 gap-y-32">
            {projects.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const AppleIconsAbsolute = () => {
  return (
    <div className="absolute left-4 top-3 flex flex-row items-center justify-center gap-[6px]">
      <div className="h-[6px] w-[6px] rounded-full bg-[#ff6660]" />
      <div className="h-[6px] w-[6px] rounded-full bg-[#fec448]" />
      <div className="h-[6px] w-[6px] rounded-full bg-[#33cb4a]" />
    </div>
  );
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const containerSVG = useRef(null);
  const isInViewSVG = useInView(containerSVG, {
    margin: "0px 0px -40px 0px",
  });
  const container1 = useRef(null);
  const isInView1 = useInView(container1, {
    margin: "0px 0px -40px 0px",
  });
  const container2 = useRef(null);
  const isInView2 = useInView(container2, {
    margin: "0px 0px -40px 0px",
  });

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 2000,
          damping: 30,
        },
      }}
      className="flex h-full flex-col items-center justify-between gap-3 rounded-lg pb-6 shadow-md"
    >
      <div>
        <motion.div
          ref={container1}
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate={isInView1 ? "show" : "hidden"}
          className="items-middle relative flex aspect-[16/9] w-full max-w-full items-center justify-center rounded-lg border border-slate-200 bg-white"
        >
          <AppleIconsAbsolute />
          <div className="relative m-auto">
            {project.title === "PORTFOLIO" ? (
              <LogoSVG />
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                animate={
                  isInView1
                    ? {
                        scale: 1.1,
                        transition: {
                          duration: 0.4,
                          ease: "backIn",
                          repeat: 3,
                          repeatType: "reverse",
                        },
                      }
                    : { scale: 1 }
                }
                className="relative"
              >
                <Image
                  src={project.logo}
                  alt={`logo de ${project.title}`}
                  width={150}
                  height={150}
                  objectFit="contain"
                  objectPosition="center"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          ref={container2}
          animate={isInView2 ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex w-full flex-col justify-between px-3"
        >
          <div className="">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              animate={isInView2 ? "show" : "hidden"}
              className="my-3 flex flex-row justify-between"
            >
              <h4>{project.title}</h4>
              <div className="flex flex-row gap-1">
                {project.github && (
                  <Magnetic str={0.2}>
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        transition: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.4,
                        },
                      }}
                      className="relative rounded-full"
                    >
                      <Link
                        target="_blank"
                        href={project.github}
                        className="relative flex h-11 w-11"
                      >
                        <Image
                          alt="github logo"
                          src={GithubImage}
                          objectFit="contain"
                          objectPosition="center"
                          layout="fill"
                          className="m-auto"
                        />
                      </Link>
                    </motion.div>
                  </Magnetic>
                )}
                {project.live && (
                  <Magnetic str={0.2}>
                    <motion.div
                      whileHover={{
                        scale: 1.15,
                        transition: {
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 0.4,
                        },
                      }}
                      className="relative rounded-full"
                    >
                      <Link target="_blank" href={project.live}>
                        <motion.div
                          whileHover={{
                            rotate: 45,
                          }}
                          className="relative flex h-11 w-11"
                        >
                          <Image
                            alt="open link logo"
                            src={SVGArrow}
                            objectFit="contain"
                            objectPosition="center"
                            layout="fill"
                            className="m-auto"
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </Magnetic>
                )}
              </div>
            </motion.div>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              animate={isInView2 ? "show" : "hidden"}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
      <Link href={project.link} className="w-full">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          animate={isInView2 ? "show" : "hidden"}
          whileHover={{
            x: 10,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.4,
            },
          }}
          className="relative flex max-w-full items-start justify-start gap-x-[2px] p-3 pr-4 text-sm font-bold text-black"
        >
          <div>Check it out</div>
          <svg
            ref={containerSVG}
            id="Layer_3"
            data-name="Layer 3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 289.47"
            className="ml-3 h-auto w-14"
          >
            <motion.path
              key={`shadow1`}
              id="shadows"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={
                isInViewSVG
                  ? {
                      opacity: 1,
                      pathLength: 1,
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                      },
                    }
                  : { opacity: 0, pathLength: 0 }
              }
              className="fill-none stroke-black stroke-[20]"
              d="m4.31,226.53c48.14,9.79,97.81,7.44,146.88,5.04,58.22-2.85,118.24-6.13,170.77-31.39,31.78-15.28,60.69-39.63,73.76-72.38,13.07-32.75,6.93-74.37-20.3-96.77-10.06-8.28-22.25-13.56-34.59-17.73-11.6-3.92-23.87-6.96-36.01-5.4-9.7,1.25-18.77,5.36-27.54,9.67-47.5,23.37-95.04,59.91-103.78,112.13-8.64,51.58,25.86,103.61,72.33,127.61s101.87,24.37,153.31,14.93,100.74-27.98,151.56-40.32c50.11-12.16,101.46-18.25,152.66-24.29"
            />
            <motion.path
              key={`shadow2`}
              id="shadows2"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={
                isInViewSVG
                  ? {
                      opacity: 1,
                      pathLength: 1,
                      transition: {
                        duration: 0.5,
                        delay: 1,
                        ease: "easeInOut",
                      },
                    }
                  : { opacity: 0, pathLength: 0 }
              }
              className="fill-none stroke-black stroke-[20]"
              d="m644.66,146.34c14.3,17.87,38.29,23.89,58.96,33.73,13.52,6.44,26.1,14.88,37.18,24.96-8.09,10.9-20.84,17.15-33.12,22.93-16.28,7.67-32.62,15.21-49.02,22.64"
            />
          </svg>
        </motion.div>
      </Link>
    </motion.div>
  );
};
