import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { darkBG, menuSlide } from "./anime";
import Curve from "./Curve";
import Footer from "./Footer";
import { useAppContext } from "~/context/appContext";

const navItems = [
  {
    title: "Home",
    href: "/",
    id: "#__next",
    type: "button",
  },
  {
    title: "My Works",
    href: "my-works",
    id: "#my-works",
    type: "button",
  },
  {
    title: "About Me",
    href: "about-me",
    id: "#about-me",
    type: "button",
  },
  {
    title: "Contact Me",
    href: "/contact",
    id: "",
    type: "link",
  },
];

export default function SidePanel() {
  const { setIsMenuOpen, setIsLocomotiveScroll } = useAppContext();
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    desacitvateLocomotiveScroll();

    return () => {
      activateLocomotiveScroll();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function desacitvateLocomotiveScroll() {
    setIsLocomotiveScroll(false);
  }

  function activateLocomotiveScroll() {
    setIsLocomotiveScroll(true);
  }

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <motion.div
        key={"darkBG"}
        variants={darkBG}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{
          background:
            "linear-gradient(to right, hsla(220, 13%, 0%, .3) 40%, hsla(220, 13%, 0%, 1) 80%)",
        }}
        className="fixed left-0 top-0 z-40 h-full w-full opacity-[0.35]"
        onClick={() => {
          setIsLocomotiveScroll(true);
          setIsMenuOpen(false);
        }}
      />
      <motion.div
        key={"sidePanel"}
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-40 h-screen border-none bg-dark text-white"
      >
        <div className="flex h-full flex-col justify-between p-5 sm:p-24">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="mt-20 flex flex-col gap-3 text-5xl sm:text-6xl"
          >
            <div className="mb-10 border-b border-[#999999] text-xs uppercase text-[#999999]">
              <p>Navigation</p>
            </div>
            {navItems.map((data, index) => {
              return (
                <NavItem
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                  setIsMenuOpen={setIsMenuOpen}
                  setIsLocomotiveScroll={setIsLocomotiveScroll}
                />
              );
            })}
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.div>
    </motion.div>
  );
}
