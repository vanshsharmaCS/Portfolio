"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Herosection() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
       Vansh Shamra <br /> Enthusiastic Coder
       <p className="max-w-2xl text-base md:text-xl mt-8 text-gradient-to-br from-slate-300 to-slate-500">
        
Currently pursuing my second year of B.Tech at GLA University, Mathura,
 delving into various engineering subjects to enhance my understanding and skills in technology.
      </p>
      </motion.h1>
    </LampContainer>
  );
}
