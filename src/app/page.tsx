"use client"
 import { Herosection } from "@/components/Herosection";
import { Experiences } from "@/components/Experiences";
import Image from "next/image";
import Skills from "@/components/Skills";
import { Project } from "@/components/Projects";


export default function Home() {
  return (
    <>
      <Herosection/>
      <div className=" overflow-hidden">
      <Experiences/>

      </div>
      <div className="mt-[5rem] z-20">
      <Project/>
      <Skills/>
      </div>
    </>
  );
}
