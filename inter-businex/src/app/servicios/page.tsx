import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herosection from "./subcomps/Herosection";
import Benefits from "./subcomps/Benefits";
import Services from "./subcomps/Services";

function page() {
  return (
    <div className="bg-white">
      <Navbar />
      <Herosection />
      <Benefits />
      <Services />
      <div className="mx-auto max-w-7xl px-3 sm:px-6">

      </div>
      <Footer />
    </div>
  );
}

export default page;
