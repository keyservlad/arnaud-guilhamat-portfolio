import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex text-black">
      <div className="sticky bottom-auto top-0 mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
        <div className="">
          <Logo />
        </div>
        <nav className="flex flex-row items-center">
          <a
            className="mx-1 inline-block cursor-pointer px-4 py-8 font-bold"
            href="#"
          >
            Home
          </a>
          <a className="mx-1 inline-block cursor-pointer px-4 py-8" href="#">
            My Works
          </a>
          <a className="mx-1 inline-block cursor-pointer px-4 py-8" href="#">
            Education
          </a>
          <a className="mx-1 inline-block cursor-pointer px-4 py-8" href="#">
            About Me
          </a>
          <a
            className="ml-2 inline-block cursor-pointer rounded-lg border border-slate-200 px-[15px] py-[10px] font-bold leading-5"
            href="#"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
