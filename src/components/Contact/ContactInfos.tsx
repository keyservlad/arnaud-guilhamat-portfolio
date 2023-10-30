import React from "react";
import Magnetic from "../common/Magnetic";
import Link from "next/link";

export default function ContactInfos() {
  return (
    <div className="relative flex lg:w-[27%] flex-col lg:pl-16 text-base font-medium mx-[12vw] lg:mx-auto">
      <div className="pb-12">
        <h5 className="mb-3 text-xs font-medium uppercase opacity-50 ">
          Contact details
        </h5>
        <p>Arnaud Guilhamat</p>
        <p className="mb-5">Location: Paris, France</p>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link
              href="mailto:arnaud.guilhamat@emovin.fr"
              className="group relative mb-2"
            >
              <p className="mb-1 cursor-pointer">arnaud.guilhamat@emovin.fr</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link href="tel:+33632469494" className="group relative mb-2 w-fit">
              <p className="mb-1 cursor-pointer">+33 6 32 32 46 94</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
      </div>
      <div className="pb-12 lg:flex hidden flex-col">
        <h5 className="mb-3 text-xs font-medium uppercase opacity-50 ">
          Socials
        </h5>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link
              target="_blank"
              href="https://github.com/keyservlad"
              className="group relative mb-2"
            >
              <p className="mb-1 cursor-pointer">GitHub</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/arnaud-guilhamat"
              className="group relative mb-2 w-fit"
            >
              <p className="mb-1 cursor-pointer">LinkedIn</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link
              href="mailto:arnaud.guilhamat@emovin.fr"
              className="group relative mb-2 w-fit"
            >
              <p className="mb-1 cursor-pointer">Email</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
        <div className="w-fit">
          <Magnetic str={0.25}>
            <Link
              target="_blank"
              href="https://www.strava.com/athletes/47513264"
              className="group relative mb-2 w-fit"
            >
              <p className="mb-1 cursor-pointer">Strava</p>
              <div
                style={{
                  transition: "width 0.2s ease-in-out",
                }}
                className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
              />
            </Link>
          </Magnetic>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
