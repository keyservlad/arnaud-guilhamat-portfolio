import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import Magnetic from "../common/Magnetic";
import { useAppContext } from "~/context/appContext";
import { useRouter } from "next/router";

const Button = () => {
  const { isMenuOpen, setIsMenuOpen, setIsLocomotiveScroll } = useAppContext();

  const menuButton = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    closeMenu();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
      nullTargetWarn: false,
    });
    if (menuButton.current) {
      gsap.to(menuButton.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end:
            router.pathname === "/contact"
              ? window.innerHeight * 0.2
              : window.innerHeight * 0.4,

          onLeave: () => {
            gsap.to(container.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
            gsap.to(menuButton.current, {
              scale: 1,
              duration: 0.25,
              delay: 0.25,
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
            gsap.to(container.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
              delay: 0.25,
            });
          },
        },
      });
    }
  }, [menuButton]); // eslint-disable-line react-hooks/exhaustive-deps

  const timeline = useRef<gsap.core.Timeline | null>(null);
  const circle = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

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
      <div ref={container} className="fixed right-7 top-7 z-50 scale-0">
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
            className={`flex h-20 w-20 scale-0 cursor-pointer items-center justify-center overflow-hidden rounded-full  shadow-buttonHeader ${
              isMenuOpen ? "bg-[#455CE9]" : "bg-dark"
            }`}
          >
            <Magnetic str={0.25}>
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
