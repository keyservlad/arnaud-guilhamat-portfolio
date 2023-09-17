import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import SidePanel from "./sidePanel";
import Magnetic from "../common/Magnetic";
import Button from "./Button";

const Header = ({
  setIsLocomotiveScroll,
}: {
  setIsLocomotiveScroll: (value: boolean) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex text-black">
        <div className="sticky bottom-auto top-0 mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10 z-[99]">
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
        <Button
          setIsLocomotiveScroll={setIsLocomotiveScroll}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
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
