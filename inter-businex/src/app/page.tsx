import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/subcomps/About";
import { Trusted } from "@/components/subcomps/Trusted";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-3 sm:px-6 ">
        <About />
        <Trusted />
      </div>
      <Footer />
    </div>
  );
}
