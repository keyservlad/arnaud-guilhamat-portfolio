import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
  str = 0.35,
}: {
  children: ReactElement;
  str?: number;
}) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magnetic.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    magnetic.current?.addEventListener("mousemove", (e) => {
      const rect = magnetic.current?.getBoundingClientRect();
      if (!rect) return; // Check if rect is defined

      const { clientX, clientY } = e;
      const { height, width, left, top } = rect;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * str);
      yTo(y * str);
    });
    magnetic.current?.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
