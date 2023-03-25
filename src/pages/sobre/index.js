import Head from "next/head";
import Header from "@/components/Header";
import Title from "@/components/Title";
import Sobre from "@/components/sobre/Sobre";
import Depo from "@/components/sobre/Depo";
import Contact from "@/components/sobre/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header />
          <Title title="Sobre" />
          <Sobre />
          <Depo />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
