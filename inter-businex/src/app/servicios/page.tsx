"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herosection from "./subcomps/Herosection";
import Benefits from "./subcomps/Benefits";
import Services from "./subcomps/Services";
import Diferencies from "./subcomps/Diferencies";
import Faq from "./subcomps/Faq";
import WhatsAppButton from "@/components/WhatsappButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Page() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white">
      <WhatsAppButton />
      <Navbar />
      <Herosection />
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <Benefits />
      </motion.div>
      <Services />
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <Diferencies />
      </motion.div>
      <Faq />
      <Footer />
    </div>
  );
}

export default Page;
