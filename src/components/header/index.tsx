"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import SidePanel from "./sidePanel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import Magnetic from "../common/Magnetic";

const Header = ({
  setIsLocomotiveScroll,
}: {
  setIsLocomotiveScroll: (value: boolean) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    closeMenu();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function closeMenu() {
    if (isMenuOpen) setIsMenuOpen(false);
  }
  function closeMenuAndEnableLomotive() {
    setIsLocomotiveScroll(true);
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="flex text-black">
        <div className="sticky bottom-auto top-0 mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
          <Magnetic>
            <div className="">
              <Logo />
            </div>
          </Magnetic>
          <nav className="flex h-full flex-row items-center">
            <Link
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 font-bold hover:border-black"
              href="#"
            >
              Home
            </Link>
            <Link
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 hover:border-black"
              href="#"
            >
              My Works
            </Link>
            <Link
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 hover:border-black"
              href="#"
            >
              About Me
            </Link>
            <Magnetic>
              <Link
                className="ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5 hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
                href="#"
              >
                Contact Me
              </Link>
            </Magnetic>
          </nav>
        </div>
        <button
          onClick={() => {
            if (isMenuOpen) setIsLocomotiveScroll(true);
            setIsMenuOpen(!isMenuOpen);
          }}
          ref={menuButton}
          style={{
            boxShadow: "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2)",
          }}
          className="bg-dark fixed right-7 top-7 z-50 flex h-20 w-20 scale-0 cursor-pointer items-center justify-center rounded-full"
        >
          <div className="relative w-full">
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
        </button>
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <SidePanel
              setIsMenuOpen={setIsMenuOpen}
              setIsLocomotiveScroll={setIsLocomotiveScroll}
            />
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
