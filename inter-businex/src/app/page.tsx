import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/subcomps/About";
import { Trusted } from "@/components/subcomps/Trusted";
import Herosection from "@/components/subcomps/Herosection";
import Faq from "@/components/subcomps/Faq";
import WhatsAppButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="bg-white">
      <NextUIProvider>
        <WhatsAppButton />
        <Navbar />
        <Herosection />
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <About />
        </div>
        <Trusted />
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <Faq />
        </div>
        <Footer />
      </NextUIProvider>
    </div>
  );
}
