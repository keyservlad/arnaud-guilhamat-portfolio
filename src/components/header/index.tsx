import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import SidePanel from "./sidePanel";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex text-black">
      <div className="sticky bottom-auto top-0 mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
        <div className="">
          <Logo />
        </div>
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
          <Link
            className="ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5 hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
            href="#"
          >
            Contact Me
          </Link>
        </nav>
      </div>
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        className="fixed right-7 top-7 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-black z-50"
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
        {isMenuOpen && <SidePanel />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
