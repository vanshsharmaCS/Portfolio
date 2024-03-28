"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import Image from "next/image";


export const products = [
    {
        title: "GitHub",
        link: "https://github.com/vanshsharmaCS",
        thumbnail:
        "/github.png", 
    },
    {
        title: "LeetCode",
        link: "https://leetcode.com/zephyrus17/",
        thumbnail:
        "/leetcode.png"
    },
    
    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/vansh-sharma-2954a2246/",
      thumbnail:
      "/linkedin.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
    
    {
        title: "CodeForces",
        link: "https://codeforces.com/profile/vansh9927",
        thumbnail:
        "/codeforces.png",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
  
   
    
  ];

const Herosection = () => {
  return (
    <HeroParallax products={products} />
  )
}

export default Herosection