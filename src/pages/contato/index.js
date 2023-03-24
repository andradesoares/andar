import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/home/Banner";
import Infos from "@/components/home/Infos";
import Services from "@/components/home/Services";
import Depo from "@/components/home/Depo";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";
import Title from "@/components/Title";

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
          <Title title="Contato" />
        </div>
      </main>
    </>
  );
}