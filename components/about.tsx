"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const {ref, inView} = useInView({
    threshold: 0.75,
  });
  const {setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

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
        Hello, world! (See what I did there? 😉) <br />
        I'm Jimmy, originally known as Munkhjargal Batsaikhan (but don't stress,
        even I sometimes fumble while spelling it). Born in the majestic
        landscapes of Mongolia, I now wander the digital terrains of coding in
        the US.
      </p>
      <h3>A few things to know about me:</h3>
      <ol>
        <li>
          <strong>Moniker Master:</strong> While my birth certificate might have
          needed an extended form, most folks just call me Jimmy.
        </li>
        <li>
          <strong>Geographical Guru:</strong> I've traveled from the vast
          steppes of Mongolia to the bustling streets of the US.
        </li>
        <li>
          <strong>Coding Convert:</strong>I've embarked on the coding caravan
          not so long ago. With a blend of self-study (spoiler: it's tougher
          than it sounds) and a spritz of bootcamp magic, I'm decoding the
          matrix one line at a time.
        </li>
      </ol>
      <p>Catch you in the next &lt;div&gt;!</p>
    </motion.section>
  );
}
