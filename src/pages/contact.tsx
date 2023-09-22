import Hero from "~/components/Contact/Hero";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className="px-[8vw]">
          <Hero />
        </div>
      </Layout>
    </>
  );
}
