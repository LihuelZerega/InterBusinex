import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./subcomps/Herosection";
import About from "./subcomps/About";
import Values from "./subcomps/Values";
import Faq from "./subcomps/Faq";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <div className="bg-neutral-50">
        <Values />
      </div>
      <div className="bg-white">
        <Faq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
