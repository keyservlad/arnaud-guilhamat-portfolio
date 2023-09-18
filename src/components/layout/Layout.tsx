import React, { type PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";
import type LocomotiveScroll from "locomotive-scroll";
import Preloader from "~/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface LayoutProps extends PropsWithChildren {
  isLocomotiveScroll: boolean;
}

const Layout = (props: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

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
    if (props.isLocomotiveScroll) {
      enableScroll();
    } else {
      disableScroll();
    }
  }, [props.isLocomotiveScroll]); // eslint-disable-line react-hooks/exhaustive-deps

  function disableScroll() {
    locomotiveScrollRef.current?.stop();
    setScrollTop(window.scrollY || document.documentElement.scrollTop);
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    locomotiveScrollRef.current?.scrollTo(scrollTop);
    locomotiveScrollRef.current?.start();
    document.body.style.overflow = "auto";
  }

  const router = useRouter();
  console.log(router.route);
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
            exit={{
              y: "-100vh",
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
    </>
  );
};

export default Layout;
