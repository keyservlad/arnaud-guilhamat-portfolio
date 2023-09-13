import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { darkBG, menuSlide } from "./anime";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "My Works",
    href: "/#my-works",
  },
  {
    title: "About Me",
    href: "/#about-me",
  },
  {
    title: "Contact Me",
    href: "/#contact-me",
  },
];

export default function SidePanel({
  setIsMenuOpen,
  setIsLocomotiveScroll,
}: {
  setIsMenuOpen: (value: boolean) => void;
  setIsLocomotiveScroll: (value: boolean) => void;
}) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    setIsLocomotiveScroll(false);

    return () => {
      setIsLocomotiveScroll(true);
    };
  }, []);

  return (
    <>
      <motion.div
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
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-40 h-screen border-none bg-[#292929] text-white"
      >
        <div className="flex h-full flex-col justify-between p-24">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="mt-20 flex flex-col gap-3 text-6xl"
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
    </>
  );
}
