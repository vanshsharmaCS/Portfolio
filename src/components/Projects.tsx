"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function Project() {
  return (
    <>
    <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold text-white dark:text-white flex justify-center mb-14"> Projects </h1>

    <div className="flex flex-wrap m-5 p-5 justify-center  gap-20 max-w-[1180px] mx-auto">
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-blue-400 to-blue-600 bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl  font-extrabold text-white dark:text-white"
        >
          Code Editor
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          A feature-rich code editor coupled with seamless room join system for collaborative coding experiences, enhancing productivity and teamwork.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/project1.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
          >
            Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-blue-400 to-blue-600 bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl  font-extrabold text-white dark:text-white"
        >
            Assignment Jin (BOT)
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
         An advanced Assignment Jin Bot equipped with an intuitive interface and seamless room join system for efficient academic collaboration and problem-solving.       </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/project5.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
          >
            Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-blue-400 to-blue-600 bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl  font-extrabold text-white dark:text-white"
        >
          WeaterApp
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          A comprehensive Weather App integrated with a user-friendly interface and seamless location access, delivering accurate forecasts and enhancing outdoor experiences
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/project3.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
          >
            Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-br from-blue-400 to-blue-600 bg-opacity-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-4xl  font-extrabold text-white dark:text-white"
        >
         Food App
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
            A Swiggy-inspired Food App with user-friendly interface, facilitating seamless local cuisine exploration, enhancing dining convenience and culinary experiences.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/project4.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-bold"
          >
            Live
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </div>
    </>
  );
}
