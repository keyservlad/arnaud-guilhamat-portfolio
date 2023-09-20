import React, { type PropsWithChildren } from "react";
import { useEffect, useState } from "react";
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
    enableScroll,
    scrollRouting,
    setScrollRouting,
    scrollToId,
  } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      enableScroll();
      window.scrollTo(0, 0);
    }, 2000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <AnimatePresence mode="sync" onExitComplete={() => window.scrollTo(0, 0)}>
        {isLoading ? (
          <Preloader />
        ) : (
          <motion.div
            onAnimationComplete={() => {
              setTimeout(() => {
                if (router.route === "/") {
                  if (scrollRouting) {
                    console.log(scrollRouting);
                    scrollToId(scrollRouting);
                    setScrollRouting(null);
                  }
                }
              }, 200);
            }}
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
