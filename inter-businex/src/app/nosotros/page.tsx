import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./subcomps/Herosection";
import Footer from "@/components/Footer";
import About from "./subcomps/About";
import Values from "./subcomps/Values";

function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <div className="bg-neutral-50">
        <Values />
      </div>
      <Footer />
    </div>
  );
}

export default page;
