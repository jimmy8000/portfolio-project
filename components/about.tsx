/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, world! (See what I did there? 😉)
      </p>
      <p className="mb-3">
        I’m Jimmy, originally known as Munkhjargal Batsaikhan (but don’t stress, even I sometimes fumble while spelling it). Born in the majestic landscapes of Mongolia, I now navigate the digital terrains of coding in the US.
      </p>
      <p className="mb-3">
        My journey from working in a nail salon to web development has given me a unique blend of creativity and precision. Completing a full-stack development bootcamp at CareerFoundry fueled my passion for creating seamless user experiences.
      </p>
      <p className="mb-3">
        Additionally, my success in singing competitions has enhanced my ability to perform under pressure and connect with audiences. I’m eager to find opportunities that blend creativity with technology, pushing the boundaries of web design and development.
      </p>
      <p className="mb-3">
        Catch you in the next &lt;div&gt;!
      </p>
    </motion.section>
  );
}