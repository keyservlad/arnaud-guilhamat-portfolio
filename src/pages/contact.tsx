"use client";
import { useRef, useState } from "react";
import AboutMe from "~/components/AboutMe";
import Help from "~/components/Help";
import Hero from "~/components/Hero";
import BuildSomething from "~/components/LetsBuild";
import Temoignage from "~/components/Temoignage";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";
import Projects from "~/components/projects";
import Footer from "~/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  SportImages,
  TechImages,
  TravelImages,
} from "~/components/AboutMe/Gallery/importImages";

export default function Home() {
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);
  const xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  const modalContainer = useRef(null);
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

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

  const [sections, setSections] = useState([
    {
      title: "Sports",
      src: SportImages[0],
      color: "#8C8C8C",
      cursorText: "Sports",
      images: SportImages,
    },
    {
      title: "PC and keyboards",
      src: TechImages[0],
      color: "#EFE8D3",
      cursorText: "Tech",
      images: TechImages,
    },
    {
      title: "Travels",
      src: TravelImages[0],
      color: "#706D63",
      cursorText: "Travels",
      images: TravelImages,
    },
  ]);

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

  function growCursor() {
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
  }

  return (
    <>
      <Layout>
        <Header />
        contact
        <Hero />
        <BuildSomething />
        <Help />
        <Projects />
        <Temoignage />
        <AboutMe
          moveItems={moveItems}
          sections={sections}
          setSections={setSections}
          setModal={setModal}
          growCursor={growCursor}
        />
        <Footer />
      </Layout>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="pointer-events-none fixed left-1/2 top-1/2 z-30 h-[424px] w-[424px] overflow-hidden bg-white"
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
              if (!src) return;
              return (
                <div
                  className="relative flex h-full w-full items-center justify-center"
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={src}
                    width={350}
                    height={350}
                    alt="image"
                    className="aspect-square h-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-30 flex h-24 w-24 items-center justify-center rounded-[50%] bg-[#455CE9] text-sm font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-30 flex h-24 w-24 items-center justify-center rounded-[50%] bg-[#455CE9] bg-transparent text-sm font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          {sections[modal.index]?.cursorText}
        </motion.div>
      </>
    </>
  );
}
