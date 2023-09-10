import Image from "next/image";
import React from "react";
import ImageProjects from "~/public/images/projects/projects-image.png";
import LogoEmovin from "~/public/images/projects/logo_emovin-05.c2c25522.svg";
import LogoTwitter from "~/public/images/projects/1f426.png";
import LogoAG from "~/public/images/logos/LOGO-GA-AG-shadows-lines.svg";
import LogoSkiFamily from "~/public/images/projects/ski_family_menu.b00303521a8d.svg";
import Arrow from "~/public/images/projects/rotated-right-arrow-svgrepo-com.svg";
import Link from "next/link";

const projects = [
  {
    title: "EMOVIN",
    description:
      "Initially built with Shopify, our needs evolved and we decided to rebuild our own frontend with Next.js, keeping the Shopify backend, thanks to the Storefront API.",
    logo: LogoEmovin,
    link: "/",
    github: "https://github.com/keyservlad/shopify-next-js",
    live: "https://www.emovin.fr",
  },
  {
    title: "CHIRP",
    description:
      "Experienced with various B2B products, including Shopify, WP. Create appealing solutions for business clients.",
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
    live: "/",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#f7f7fa]">
      <div className="align-center mx-auto flex max-w-[940px] flex-col justify-between pb-10 pt-20">
        <div className="align-center mb-10 mt-0 flex flex-row justify-between gap-x-8 text-left">
          <div className="flex flex-col justify-start">
            <h2 className="max-w-md text-left">
              Check out some of the products I&#39;ve worked on
            </h2>
            <p className="mb-[10px] max-w-[649px] p-0 text-left">
              My biggest project is building the website for my own startup
              Emovin, since 2021. I am always curious about new technologies and
              my never ending thirst for learning always makes me want to build
              new projects!
            </p>
            <button className="flex cursor-pointer self-start rounded-lg border border-slate-200 bg-white px-10 py-4 font-bold text-black">
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
                  fill="black"
                />
                <path
                  d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z"
                  fill="black"
                />
              </svg>
            </button>
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
        </div>
        <div className="align-center mb-6 mt-0 flex flex-row justify-between gap-x-8">
          <div className="mx-4 grid w-full grid-cols-2 gap-16">
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
    <div className="align-center absolute left-4 top-3 flex flex-row justify-center gap-[6px]">
      <div className="h-[6px] w-[6px] rounded-full bg-[#ff6660]" />
      <div className="h-[6px] w-[6px] rounded-full bg-[#fec448]" />
      <div className="h-[6px] w-[6px] rounded-full bg-[#33cb4a]" />
    </div>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    logo: string;
    link: string;
    github: string | undefined;
    live: string | undefined;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="align-start flex flex-col gap-3">
      <div className="align-center relative flex aspect-video w-full max-w-full justify-center rounded-lg border border-slate-200 bg-white align-middle">
        <AppleIconsAbsolute />
        <div className="relative m-auto">
          <Image
            src={project.logo}
            alt={`logo de ${project.title}`}
            width={150}
            height={150}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <Link
          href={project.link}
          className="align-center relative flex max-w-full items-center gap-x-[2px] pr-4 text-sm font-bold text-black"
        >
          <div>Check it out</div>
          <Image
            src={Arrow}
            alt="arrow"
            width={50}
            height={50}
            objectFit="contain"
            objectPosition="center"
            className="ml-3"
          />
        </Link>
      </div>
    </div>
  );
};
