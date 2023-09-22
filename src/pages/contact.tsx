import ContactInfos from "~/components/Contact/ContactInfos";
import Form from "~/components/Contact/Form";
import Hero from "~/components/Contact/Hero";
import ActualFooter from "~/components/Footer/AcutalFooter";
import Header from "~/components/header";
import Layout from "~/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <div className="px-[12vw]">
          <Hero />
          <div className="flex">
            <Form />
            <ContactInfos />
          </div>
        </div>
        <ActualFooter />
      </Layout>
    </>
  );
}
