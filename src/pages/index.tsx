"use client";
import { use, useEffect, useRef, useState } from "react";
import AboutMe from "~/components/AboutMe";
import Help from "~/components/Help";
import Hero from "~/components/Hero";
import BuildSomething from "~/components/LetsBuild";
import Temoignage from "~/components/Temoignage";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";
import Projects from "~/components/projects";
import LocomotiveScroll from "locomotive-scroll";

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

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    if (isLocomotiveScroll) {
      locomotiveScrollRef.current?.scrollTo(scrollTop);
      locomotiveScrollRef.current?.start();
      document.body.style.overflow = "auto";
    } else {
      locomotiveScrollRef.current?.stop();
      setScrollTop(window.scrollY || document.documentElement.scrollTop);
      document.body.style.overflow = "hidden";
    }
  }, [isLocomotiveScroll]);

  return (
    <>
      <Layout>
        <Header setIsLocomotiveScroll={setIsLocomotiveScroll} />
        <Hero />
        <BuildSomething />
        <Help />
        <Projects />
        <Temoignage />
        <AboutMe />
      </Layout>
    </>
  );
}
