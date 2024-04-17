"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className="max-w-lg mx-auto my-8 p-6 rounded-xl shadow-md bg-white"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-xl"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="mt-4 flex justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
        >
          <FiGithub className="mr-2" /> GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
        >
          <FiExternalLink className="mr-2" /> Live Site
        </a>
      </div>
    </motion.div>
  );
}
