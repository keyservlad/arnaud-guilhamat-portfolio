import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { useAppContext } from "~/context/appContext";
import { useRouter } from "next/router";

const Header = () => {
  const { scrollToId, setScrollRouting } = useAppContext();
  const router = useRouter();
  return (
    <>
      <header className="flex text-black bg-white">
        <div className="sticky bottom-auto top-0 z-[99] mx-auto flex min-h-[4vh] w-full items-center justify-between border-b border-slate-100 px-10">
          <Magnetic>
            <div className="">
              <Logo />
            </div>
          </Magnetic>
          <nav className="flex h-full flex-row items-center">
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
        </div>
      </header>
    </>
  );
};

export default Header;
