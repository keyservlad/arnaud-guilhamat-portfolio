import React, { useContext, type PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import type LocomotiveScroll from "locomotive-scroll";
import Preloader from "~/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "../header/Button";
import SidePanel from "../header/sidePanel";
import { useAppContext } from "~/context/appContext";

const Layout = (props: PropsWithChildren) => {
  const { isLoading, isMenuOpen } = useAppContext();

  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="sync" onExitComplete={() => window.scrollTo(0, 0)}>
        {isLoading ? (
          <Preloader />
        ) : (
          <motion.div
            initial={{
              y: "100vh",
            }}
            animate={{
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.4,
              },
            }}
            key={router.route}
            className="min-h-screen max-w-[100vw]"
          >
            <main className="relative min-h-[64.4vh] overflow-hidden">
              {props.children}
            </main>
          </motion.div>
        )}
      </AnimatePresence>
      <Button key={"button"} />
      {isMenuOpen && <SidePanel key={"sidePanel"} />}
    </>
  );
};

export default Layout;
