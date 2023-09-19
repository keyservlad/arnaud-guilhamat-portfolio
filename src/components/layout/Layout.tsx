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
  const {
    isMenuOpen,
    locomotiveScrollRef,
    disableScroll,
    enableScroll,
    isLocomotiveScroll,
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!locomotiveScrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScrollRef.current = new LocomotiveScroll();
      }
      disableScroll();

      setTimeout(() => {
        setIsLoading(false);
        enableScroll();
        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isLocomotiveScroll) {
      enableScroll();
    } else {
      disableScroll();
    }
  }, [isLocomotiveScroll]); // eslint-disable-line react-hooks/exhaustive-deps

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
      <AnimatePresence mode="wait">
        {isMenuOpen && <SidePanel key={"sidePanel"} />}
      </AnimatePresence>
    </>
  );
};

export default Layout;
