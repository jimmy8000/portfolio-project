"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { FaGithubAlt, FaGlobe } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative h-full mb-3 sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-gray-200 transition rounded-lg">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <div className="flex flex-wrap -4 gap-2 sm:mt-auto py-8">
            <a
              className="bg-gray-800  text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none  transition cursor-pointer hover:bg-gray-600 "
              href={githubUrl}
              target="_blank"
            >
              <FaGithubAlt className="text-white" />
              GitHub
            </a>
            <a
              className="bg-gray-800 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none  transition cursor-pointer hover:bg-gray-600"
              href={liveUrl}
              target="_blank"
            >
              <FaGlobe className="text-white" />
              Live Site
            </a>
          </div>
        </div>

        <Image
          className="sm:absolute top-9 -right-40 w-[30rem] rounded-t-lg shadow-2xl
            group-even:right-[initial] 
            group-even:-left-40
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:rotate-2 

            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 

            group-hover:scale-[1.04]
            transition"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
