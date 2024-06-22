import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./subcomps/Herosection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";

function page() {
  return (
    <div>
      <WhatsAppButton />

      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
}

export default page;
