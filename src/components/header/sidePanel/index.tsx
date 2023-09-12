import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { menuSlide } from "./anime";
import Curve from "./Curve";
import Footer from "./Footer";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "My Works",
    href: "/",
  },
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Contact Me",
    href: "/",
  },
];

export default function SidePanel() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
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
              />
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
