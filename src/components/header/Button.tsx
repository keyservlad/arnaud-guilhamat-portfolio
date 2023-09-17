import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import Magnetic from "../common/Magnetic";

const Button = ({
  setIsLocomotiveScroll,
  isMenuOpen,
  setIsMenuOpen,
}: {
  setIsLocomotiveScroll: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => {
  const menuButton = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (menuButton.current) {
      console.log(menuButton);
      gsap.to(menuButton.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight * 0.4,
          onLeave: () => {
            gsap.to(menuButton.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(menuButton.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
            closeMenuAndEnableLomotive();
          },
        },
      });
    }
  }, [menuButton]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(menuButton.current);
  }, [menuButton]);

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

  function closeMenu() {
    if (isMenuOpen) setIsMenuOpen(false);
  }
  function closeMenuAndEnableLomotive() {
    setIsLocomotiveScroll(true);
    setIsMenuOpen(false);
  }
  return (
    <>
      <div className="fixed right-7 top-7 z-50">
        <Magnetic>
          <button
            ref={(el) => {
              menuButton.current = el;
            }}
            onClick={() => {
              if (isMenuOpen) setIsLocomotiveScroll(true);
              setIsMenuOpen(!isMenuOpen);
            }}
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className={`shadow-buttonHeader flex h-20 w-20 scale-0 cursor-pointer items-center justify-center overflow-hidden  rounded-full ${
              isMenuOpen ? "bg-[#455CE9]" : "bg-dark"
            }`}
          >
            <Magnetic str={0.2}>
              <div
                className={
                  "relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full"
                }
              >
                <div
                  style={{ transition: "color 0.4s linear" }}
                  className="relative z-50 w-full"
                >
                  <div
                    className={`absolute left-1/2  h-px w-8 -translate-x-1/2 bg-white transition-transform ${
                      isMenuOpen
                        ? "top-[calc(50%+0px)] -rotate-45"
                        : "top-[calc(50%+5px)]"
                    }`}
                  />
                  <div
                    className={`absolute left-1/2  h-px w-8 -translate-x-1/2  bg-white transition-transform ${
                      isMenuOpen
                        ? "top-[calc(50%-0px)] rotate-45"
                        : "top-[calc(50%-5px)]"
                    }`}
                  />
                </div>
              </div>
            </Magnetic>
            <div
              ref={circle}
              className="absolute top-full h-[150%] w-full rounded-[50%] bg-[#455CE9]"
            />
          </button>
        </Magnetic>
      </div>
    </>
  );
};

export default Button;
