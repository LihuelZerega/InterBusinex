import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./subcomps/Herosection";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
}

export default page;
