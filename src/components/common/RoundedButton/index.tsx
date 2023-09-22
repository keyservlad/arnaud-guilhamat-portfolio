import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../Magnetic";

export default function Rounded({
  children,
  backgroundColor = "#455CE9",
  backgroundColorHover,
  style,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  style?: string;
  backgroundColorHover?: string;
}) {
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);

  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      ?.to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter",
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit",
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={
          style ??
          "relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#888888] hover:z-20"
        }
        style={{
          backgroundColor: backgroundColorHover,
        }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
      >
        <Magnetic str={0.25}>
          <div
            className={
              style ??
              "relative z-20 flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-14 py-4 hover:z-20"
            }
          >
            {children}
          </div>
        </Magnetic>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute top-full h-[150%] w-full rounded-[50%]"
        />
      </div>
    </Magnetic>
  );
}
