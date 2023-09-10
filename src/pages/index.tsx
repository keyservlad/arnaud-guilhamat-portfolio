import Help from "~/components/Help";
import Hero from "~/components/Hero";
import BuildSomething from "~/components/LetsBuild";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";
import Projects from "~/components/projects";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <BuildSomething />
        <Help />
        <Projects />
      </Layout>
    </>
  );
}
