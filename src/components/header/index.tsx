import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Magnetic from "../common/Magnetic";

const Header = () => {
  return (
    <>
      <header className="flex text-black">
        <div className="sticky bottom-auto top-0 z-[99] mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
          <Magnetic>
            <div className="">
              <Logo />
            </div>
          </Magnetic>
          <nav className="flex h-full flex-row items-center">
            <button
              className="mx-1 inline-block cursor-pointer border-b-2 border-transparent px-4 py-8 font-bold hover:border-black"
              onClick={() => {
                window.scrollTo({
                  top: 200,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>
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
            <div className="z-[999]">
              <Magnetic>
                <Link
                  className="z-[999] ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5 hover:border-black hover:bg-black hover:text-white hover:shadow-custom"
                  href="#"
                >
                  Contact Me
                </Link>
              </Magnetic>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
