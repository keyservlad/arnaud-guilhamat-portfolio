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

export default function Contact() {
  const [isLocomotiveScroll, setIsLocomotiveScroll] = useState(true);
  return (
    <>
      <Layout
        isLocomotiveScroll={isLocomotiveScroll}
        setIsLocomotiveScroll={setIsLocomotiveScroll}
      >
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
        <Header setIsLocomotiveScroll={setIsLocomotiveScroll} />
        contact
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
