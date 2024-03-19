"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function SkillsComponent() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <div className="py-12 mt-8 scroll-m-20 " ref={ref} id="skills">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading>Skills & Technologies</SectionHeading>
        <p className="text-center text-gray-700 mt-4 mb-8">The tools and technologies I specialize in</p>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center"
        >
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 20, opacity: 0 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex bg-white bg-opacity-80 shadow-lg w-[10rem] items-center justify-center px-4 py-2 rounded-full text-sm font-semibold text-gray-800 hover:bg-opacity-100 transition duration-100 ease-in-out cursor-pointer"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
