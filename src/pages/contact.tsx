import ContactInfos from "~/components/Contact/ContactInfos";
import Form from "~/components/Contact/Form";
import Hero from "~/components/Contact/Hero";
import { HeroMobile } from "~/components/Contact/HeroMobile";
import ActualFooter from "~/components/Footer/AcutalFooter";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";

export default function Home({}) {
  return (
    <>
      <Layout>
        <Header />
        <div className="hidden flex-col px-[12vw] lg:flex">
          <Hero />
          <div className="flex">
            <Form />
            <ContactInfos />
          </div>
        </div>
        <div className="flex flex-col lg:hidden">
          <HeroMobile />
          <ContactInfos />
          <Form />
        </div>
        <ActualFooter />
      </Layout>
    </>
  );
}
