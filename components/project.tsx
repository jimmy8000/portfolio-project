"use client";

import { useRef, useState } from "react";
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
  caseStudy,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
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
            layout="fill"
            objectFit="cover"
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
          <button
            onClick={toggleModal}
            className="flex items-center px-4 py-2 rounded-lg text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
          >
            Case Study
          </button>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{title} Case Study</h2>
            <div className="text-gray-700 whitespace-pre-wrap">{caseStudy}</div>
            <button
              onClick={toggleModal}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}