import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
  str = 0.35,
}: {
  children: React.ReactNode;
  str?: number;
}) {
  const magneticRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const magneticElement = magneticRef.current;

    if (!magneticElement) return;

    const xTo = gsap.quickTo(magneticElement, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticElement, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magneticElement.addEventListener("mousemove", (e) => {
      const rect = magneticElement.getBoundingClientRect();

      if (!rect) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } = rect;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * str);
      yTo(y * str);
    });

    magneticElement.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="relative z-10 flex items-center justify-center hover:z-50"
      ref={magneticRef}
    >
      {children}
    </div>
  );
}
