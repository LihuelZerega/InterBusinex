import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herosection from "./subcomps/Herosection";
import Benefits from "./subcomps/Benefits";
import Services from "./subcomps/Services";
import Diferencies from "./subcomps/Diferencies";
import Faq from "./subcomps/Faq";

function page() {
  return (
    <div className="bg-white">
      <Navbar />
      <Herosection />
      <Benefits />
      <Services />
      <Diferencies />
      <Faq />
      <Footer />
    </div>
  );
}

export default page;
