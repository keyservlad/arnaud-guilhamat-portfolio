"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

interface GalleryProps {
  moveItems: (x: number, y: number) => void;
  sections: {
    title: string;
    src: StaticImageData | undefined;
    color: string;
    cursorText: string;
    images: StaticImageData[];
  }[];
  setSections: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        src: StaticImageData | undefined;
        color: string;
        cursorText: string;
        images: StaticImageData[];
      }[]
    >
  >;
  setModal: (value: any) => void;
  growCursor: () => void;
}

export default function Gallery({
  moveItems,
  sections,
  setSections,
  setModal,
  growCursor,
}: GalleryProps) {
  const manageModal = (
    active: boolean,
    index: number,
    x: number,
    y: number,
  ) => {
    moveItems(x, y);
    setModal({ active, index });
  };
  function setMainImageSrc(index: number, src: StaticImageData) {
    setSections((prevSections) => {
      const newSections = [...prevSections];

      if (index >= 0 && index < newSections.length) {
        const sectionToUpdate = newSections[index];
        if (sectionToUpdate) {
          sectionToUpdate.src = src;
        }
      }

      return newSections;
    });
  }

  useEffect(() => {
    growCursor();
  }, []);

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="align-center flex flex-col py-72"
    >
      <div className="flex w-full flex-col items-center justify-center pb-24">
        {sections.map((section, index) => {
          return (
            <Section
              index={index}
              title={section.title}
              manageModal={manageModal}
              key={index}
              imageList={section.images}
              setMainImageSrc={setMainImageSrc}
            />
          );
        })}
      </div>
    </section>
  );
}
