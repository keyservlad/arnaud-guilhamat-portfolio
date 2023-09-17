"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import ImageS1 from "~/public/images/About-me/s-1.jpg";
import ImageH1 from "~/public/images/About-me/h-1.jpg";
import ImageV1 from "~/public/images/About-me/v-1.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const sections = [
  {
    title: "Sports",
    src: ImageS1,
    color: "#8C8C8C",
  },
  {
    title: "PC and keyboards",
    src: ImageH1,
    color: "#EFE8D3",
  },
  {
    title: "Travels",
    src: ImageV1,
    color: "#706D63",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Gallery() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  let xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  let xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  let yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    console.log(cursor.current);

    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x: number, y: number) => {
    if (!xMoveContainer.current) return;
    if (!yMoveContainer.current) return;
    if (!xMoveCursor.current) return;
    if (!yMoveCursor.current) return;
    if (!xMoveCursorLabel.current) return;
    if (!yMoveCursorLabel.current) return;
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number,
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };
  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="align-center mt-72 flex flex-col px-48"
    >
      <div className="flex w-full max-w-[1400px] flex-col items-center justify-center pb-24">
        {sections.map((section, index) => {
          return (
            <Section
              index={index}
              title={section.title}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="pointer-events-none fixed left-1/2 top-1/2 z-30 h-80 w-96 overflow-hidden bg-white"
        >
          <div
            style={{
              top: index * -100 + "%",
              transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
            className="relative h-full w-full"
          >
            {sections.map((section, index) => {
              const { src, color } = section;
              return (
                <div
                  className="relative flex h-full w-full items-center justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image src={src} width={300} height={300} alt="image" className="object-cover" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-30 flex h-20 w-20 items-center justify-center rounded-[50%] bg-[#455CE9] text-sm font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-30 flex h-20 w-20 items-center justify-center rounded-[50%] bg-[#455CE9] bg-transparent text-sm font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </section>
  );
}
