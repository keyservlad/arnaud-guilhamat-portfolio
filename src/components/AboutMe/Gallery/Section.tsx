"use client";
import Image, { type StaticImageData } from "next/image";
import React, { type MutableRefObject, useRef } from "react";

interface SectionProps {
  index: number;
  title: string;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
  imageList: StaticImageData[];
  setMainImageSrc: (index: number, src: StaticImageData) => void;
}

export default function Section({
  index,
  title,
  manageModal,
  imageList,
  setMainImageSrc,
}: SectionProps) {
  const steps = useRef(0);
  const maxNumberOfImages = 3;

  const refs: React.MutableRefObject<HTMLImageElement | null>[] = [];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentIndex = useRef(0);
  const nbOfImages = useRef(0);

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, movementX, movementY } = e;

    // Get the container's position relative to the viewport
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const { left, top } = rect;
    const mouseX = clientX - left;
    const mouseY = clientY - top;

    steps.current += Math.abs(movementX) + Math.abs(movementY);

    if (steps.current >= currentIndex.current * 250) {
      moveImage(mouseX, mouseY);

      while (nbOfImages.current > maxNumberOfImages) {
        removeImage();
      }
    }
    if (currentIndex.current == refs.length) {
      currentIndex.current = 0;
      steps.current = -250;
    }
  };

  const moveImage = (x: number, y: number) => {
    const currentImage = refs[currentIndex.current]?.current;

    if (currentImage) {
      currentImage.style.left = x + "px";
      currentImage.style.top = y + "px";
      currentImage.style.display = "block";
      currentIndex.current += 1;
      nbOfImages.current += 1;
      setZIndex();
    }

    const image = imageList[currentIndex.current];
    if (!image) return;
    setMainImageSrc(index, image);
  };

  const setZIndex = () => {
    const images = getCurrentImages();
    if (!images[0]) return;
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      if (image) {
        image.style.zIndex = i.toString(); // Convert i to a string to set the zIndex property
      }
    }
  };

  const removeImage = () => {
    const images = getCurrentImages();
    if (!images[0]) return;
    images[0].style.display = "none";
    nbOfImages.current -= 1;
  };

  const getCurrentImages = () => {
    const images = [];
    const indexOfFirst = currentIndex.current - nbOfImages.current;
    for (let i = indexOfFirst; i < currentIndex.current; i++) {
      let targetIndex = i;
      if (targetIndex < 0) targetIndex += refs.length;
      images.push(refs[targetIndex]?.current);
    }
    return images;
  };

  const removeAllImages = () => {
    const intervalId = setInterval(() => {
      if (nbOfImages.current > 0) {
        removeImage();
      } else {
        clearInterval(intervalId); // Stop the interval when nbOfImages.current reaches zero
      }
    }, 200); // Call removeImage every 1000 milliseconds (1 second)
  };

  const pushRef = (ref: MutableRefObject<HTMLImageElement | null>) => {
    refs.push(ref);
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
        removeAllImages();
      }}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="group relative flex w-full cursor-default items-center justify-between border-t border-[#C9C9C9] px-12 py-32 transition-all duration-200 last-of-type:border-b hover:opacity-50"
    >
      <h2 className="pointer-events-none m-0 text-6xl transition-all duration-[0.4s] group-hover:-translate-x-[10px]">
        {title}
      </h2>
      <p className="pointer-events-none m-0 font-light transition-all duration-[0.4s] group-hover:translate-x-[10px]">
        Design & Development
      </p>
      {imageList.map((image, index) => (
        <ImageQueue pushRef={pushRef} image={image} index={index} key={index} />
      ))}
    </div>
  );
}

function ImageQueue({
  pushRef,
  image,
  index,
}: {
  pushRef: (ref: MutableRefObject<HTMLImageElement | null>) => void;
  image: StaticImageData;
  index: number;
}) {
  const ref = useRef(null);
  pushRef(ref);
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2"
    >
      <Image
        alt="image"
        src={image}
        width={300}
        height={300}
        className="aspect-square h-auto object-contain opacity-80"
      />
    </div>
  );
}
