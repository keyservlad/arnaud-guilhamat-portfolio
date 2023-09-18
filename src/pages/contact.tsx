"use client";
import Help from "~/components/Help";
import Hero from "~/components/Hero";
import BuildSomething from "~/components/LetsBuild";
import Temoignage from "~/components/Temoignage";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";
import Projects from "~/components/projects";
import Footer from "~/components/Footer";

export default function Contact() {
  return (
    <>
      <Layout>
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
        <Header />
        contact
        <Hero />
        <BuildSomething />
        <Help />
        <Projects />
        <Temoignage />
        <Footer />
      </Layout>
    </>
  );
}
