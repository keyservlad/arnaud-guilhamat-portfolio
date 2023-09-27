import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { useAppContext } from "~/context/appContext";
import { useRouter } from "next/router";

const Header = () => {
  const {
    scrollToId,
    setScrollRouting,
    isMenuOpen,
    setIsLocomotiveScroll,
    setIsMenuOpen,
  } = useAppContext();
  const router = useRouter();
  return (
    <>
      <header className="flex bg-white text-black font-normal">
        <div className="sticky bottom-auto top-0 z-[99] mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
          <Magnetic>
            <div className="">
              <Logo />
            </div>
          </Magnetic>
          <nav className="hidden h-full flex-row items-center md:flex">
            <Link
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 font-bold hover:border-black"
              href={"/"}
            >
              Home
            </Link>
            <button
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 hover:border-black"
              onClick={() => {
                if (router.pathname === "/") {
                  scrollToId("#my-works");
                } else {
                  setScrollRouting("#my-works");
                  router.push("/");
                }
              }}
            >
              My Works
            </button>
            <button
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 hover:border-black"
              onClick={() => {
                if (router.pathname === "/") {
                  scrollToId("#about-me");
                } else {
                  setScrollRouting("#about-me");
                  router.push("/");
                }
              }}
            >
              About Me
            </button>
            <Magnetic>
              <Link
                className="z-[999] ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5 hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
                href="/contact"
              >
                Contact Me
              </Link>
            </Magnetic>
          </nav>
          <nav className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              className="w-16 aspect-[1/1]"
              onClick={() => {
                if (isMenuOpen) setIsLocomotiveScroll(true);
                setIsMenuOpen(!isMenuOpen);
                const menuButton = document.getElementById("menuButton");
                const container = document.getElementById(
                  "containerMenuButton",
                );

                if (!menuButton || !container) return;
                menuButton.style.scale = "1";
                menuButton.style.transform = "scale(1)";
                container.style.scale = "1";
                container.style.transform = "scale(1)";
              }}
            >
              <defs>
                <clipPath id="__lottie_element_6">
                  <rect width="100" height="100" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_6)">
                <g transform="matrix(1,0,0,1,51,30)" opacity="1">
                  <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                    <path
                      fill="rgb(51,51,51)"
                      fillOpacity="1"
                      d=" M15.5,0 C15.5,0 15.5,0 15.5,0 C15.5,1.1038000583648682 14.603799819946289,2 13.5,2 C13.5,2 -13.5,2 -13.5,2 C-14.603799819946289,2 -15.5,1.1038000583648682 -15.5,0 C-15.5,0 -15.5,0 -15.5,0 C-15.5,-1.1038000583648682 -14.603799819946289,-2 -13.5,-2 C-13.5,-2 13.5,-2 13.5,-2 C14.603799819946289,-2 15.5,-1.1038000583648682 15.5,0z"
                    ></path>
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,51,50)" opacity="1">
                  <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                    <path
                      fill="rgb(51,51,51)"
                      fillOpacity="1"
                      d=" M15.5,0 C15.5,0 15.5,0 15.5,0 C15.5,1.1038000583648682 14.603799819946289,2 13.5,2 C13.5,2 -13.5,2 -13.5,2 C-14.603799819946289,2 -15.5,1.1038000583648682 -15.5,0 C-15.5,0 -15.5,0 -15.5,0 C-15.5,-1.1038000583648682 -14.603799819946289,-2 -13.5,-2 C-13.5,-2 13.5,-2 13.5,-2 C14.603799819946289,-2 15.5,-1.1038000583648682 15.5,0z"
                    ></path>
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,51,70)" opacity="1">
                  <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                    <path
                      fill="rgb(51,51,51)"
                      fillOpacity="1"
                      d=" M15.5,0 C15.5,0 15.5,0 15.5,0 C15.5,1.1038000583648682 14.603799819946289,2 13.5,2 C13.5,2 -13.5,2 -13.5,2 C-14.603799819946289,2 -15.5,1.1038000583648682 -15.5,0 C-15.5,0 -15.5,0 -15.5,0 C-15.5,-1.1038000583648682 -14.603799819946289,-2 -13.5,-2 C-13.5,-2 13.5,-2 13.5,-2 C14.603799819946289,-2 15.5,-1.1038000583648682 15.5,0z"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
