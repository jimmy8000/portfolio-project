"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "@/public/profile.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm-md-0 scroll-m-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profile}
              alt="Munkhjargal Batsaikhan image"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.34rem] border-white shadow-lg"
            ></Image>
          </motion.div>

          <motion.span
            className="absolute bottom-0 -left-4 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt04 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Jimmy Jargal.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> based in Chicago,
        IL. I'm passionate about building software and
        <span className="italic"> learning new technologies.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/5" href="/CV.pdf" download>
          Download resume <HiDownload  className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/5"
        href="https://www.linkedin.com/in/jimmy-jargal-8906222b6/" target="_blank"
        >
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/5" href="https://github.com/jimmy8000" target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
