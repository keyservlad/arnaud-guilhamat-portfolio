import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Header = () => {
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
            className="hover:shadow-custom ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5 hover:border-black hover:bg-black hover:text-white"
            href="#"
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
