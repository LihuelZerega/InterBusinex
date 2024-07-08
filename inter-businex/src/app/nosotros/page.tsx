"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Herosection from "./subcomps/Herosection";
import About from "./subcomps/About";
import Values from "./subcomps/Values";
import Faq from "./subcomps/Faq";
import Footer from "@/components/Footer";
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
        <About />
      </motion.div>
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={itemVariants}
        className="bg-neutral-50"
      >
        <Values />
      </motion.div>
      <motion.div
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={itemVariants}
        className="bg-white"
      >
        <Faq />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Page;
