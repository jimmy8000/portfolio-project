import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectOne from "@/public/projectOne.png";
import projectTwo from "@/public/projectTwo.png";
import projectThree from "@/public/projectThree.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Meet App",
    description:
      "I built this app to learn how to use Google Calendar API. It's a simple app that shows the user's upcoming events. It's built with React and AWS.",
    tags: ["React", "AWS", "GoogleAPI"],
    imageUrl: projectOne,
  },
  {
    title: "Pokemon App",
    description:
      "A simple web app that shows a list of Pokemon. It's built with HTML, CSS, JavaScript and JQuery. It fetches data from an PokéAPI and allows the user to search for a specific Pokemon.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery"],
    imageUrl: projectTwo,
  },
  {
    title: "Movie App",
    description:
      "A full-stack app that shows a list of movies. It's built with React, MongoDB, Express and Node.js. It has user login, signup and edit profile functions. It fetches data from an API and allows the user to search for a specific movie. It also allows the user to add a movie to the favorites list.",
    tags: ["React", "HTML", "Bootstrap", "MongoDB", "Express", "Node.js"],
    imageUrl: projectThree,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;