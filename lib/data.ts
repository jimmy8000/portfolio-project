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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Meet App",
    description:
      "I built this app to learn how to use Google Calendar API. It's a simple app that shows the user's upcoming events. It's built with React and AWS.",
    imageUrl: projectOne,
    githubUrl: "https://github.com/jimmy8000/meet",
    liveUrl: "https://jimmy8000.github.io/meet/",
  },
  {
    title: "Pokemon App",
    description:
      "A simple web app that shows a list of Pokemon. It's built with HTML, CSS, JavaScript and JQuery. It fetches data from an PokéAPI and allows the user to search for a specific Pokemon.",
    imageUrl: projectTwo,
    githubUrl: "https://github.com/jimmy8000/pokemon-app",
    liveUrl: "https://jimmy8000.github.io/pokemon-app/",
  },
  {
    title: "Movie App",
    description:
      "A full-stack app that shows a list of movies. It's built with React, MongoDB, Express and Node.js. It has user login, signup and edit profile functions. It fetches data from an API and allows the user to search for a specific movie. It also allows the user to add a movie to the favorites list.",
    imageUrl: projectThree,
    githubUrl: "https://github.com/jimmy8000/movie_api",
    liveUrl: "https://lambent-llama-a360b7.netlify.app/",
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