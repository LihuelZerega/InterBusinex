"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/subcomps/About";
import { Trusted } from "@/components/subcomps/Trusted";
import Herosection from "@/components/subcomps/Herosection";
import Faq from "@/components/subcomps/Faq";
import WhatsAppButton from "@/components/WhatsappButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
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
      <NextUIProvider>
        <WhatsAppButton />
        <Navbar />
        <Herosection />
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={itemVariants}
          className="mx-auto max-w-7xl px-3 sm:px-6"
        >
          <About />
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <Trusted />
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={itemVariants}
          className="mx-auto max-w-7xl px-3 sm:px-6"
        >
          <Faq />
        </motion.div>
        <Footer />
      </NextUIProvider>
    </div>
  );
}
