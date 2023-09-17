"use client";
import { useEffect, useRef, useState } from "react";
import AboutMe from "~/components/AboutMe";
import Help from "~/components/Help";
import Hero from "~/components/Hero";
import BuildSomething from "~/components/LetsBuild";
import Temoignage from "~/components/Temoignage";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";
import Projects from "~/components/projects";
import type LocomotiveScroll from "locomotive-scroll";
import Footer from "~/components/Footer";
import Preloader from "~/components/Preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [isLocomotiveScroll, setIsLocomotiveScroll] = useState(true);
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isLocomotiveScroll) {
      enableScroll();
    } else {
      disableScroll();
    }
  }, [isLocomotiveScroll]); // eslint-disable-line react-hooks/exhaustive-deps

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

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Header setIsLocomotiveScroll={setIsLocomotiveScroll} />
        <Hero />
        <BuildSomething />
        <Help />
        <Projects />
        <Temoignage />
        <AboutMe />
        <Footer />
      </Layout>
    </>
  );
}
