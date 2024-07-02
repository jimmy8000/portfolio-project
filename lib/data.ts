import projectOne from "@/public/projectOne.png";
import projectTwo from "@/public/projectTwo.png";
import projectThree from "@/public/projectThree.png";
import projectFour from "@/public/projectFour.png";
import projectFive from "@/public/projectFive.png";
import projectSix from "@/public/projectSix.png";

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
    caseStudy: ``,
  },
  {
    title: "Recipe App",
    description:
      "The Recipe Application is a web-based platform built using Django that allows users to create, manage, and view recipes. The application includes features for automatically calculating recipe difficulty, adding pictures, and displaying charts related to recipes.",
    imageUrl: projectSix,
    githubUrl: "https://github.com/jimmy8000/recipe-app",
    liveUrl: "https://recipe-app-foundry-09ed5908c1e3.herokuapp.com/",
    caseStudy: `
      Case Study: Recipe Application Built with Django

Overview

The Recipe Application is a web app developed using Django that allows users to submit, view, and rate recipes. Users can create an account, update their personal data, and manage their recipe submissions with images and difficulty ratings.

Purpose & Context

The Recipe Application was a personal project built as part of my web development course at CareerFoundry to demonstrate my mastery of full-stack development using Django.

Objective

The aim of the project was to build a comprehensive server-side and client-side application from scratch, which could be added to my professional portfolio.

Approach

Server-Side

I created a robust backend using Django, which interacts with a relational database (PostgreSQL). The server-side includes the following features:

	•	User authentication and authorization.
	•	Recipe submission and management.
	•	Automatic difficulty calculation for recipes based on ingredients and steps.

To handle user authentication securely, I used Django’s built-in authentication system. For image handling, I integrated the Pillow library to manage image uploads and storage efficiently.

Testing the API:
To ensure all functionalities worked correctly, I conducted extensive testing, including user testing to gather feedback on the interface and functionality. This process helped in identifying and fixing bugs related to image uploads and form submissions.

Client-Side

After completing the backend, I developed a user-friendly interface using Django templates and Bootstrap for responsiveness. The client-side includes several views:

	•	Main View: Displays a list of all recipes.
	•	Recipe Detail View: Shows details of a single recipe and allows users to rate and comment on it.
	•	Login and Registration Views: Allow users to create accounts and log in.
	•	Profile View: Enables users to update their personal information and manage their recipes.



Challenges

Developing this application was both exciting and challenging. Some of the key challenges included:

	•	Image Handling: Ensuring efficient upload and storage of images.
	•	Difficulty Calculation: Implementing an accurate system to automatically calculate the difficulty of recipes.
	•	Responsive Design: Making sure the interface works seamlessly across various devices.

Through perseverance and with the help of my tutor, I was able to overcome these challenges and build a functional and attractive application.


Duration

The development of the Recipe Application took longer than initially expected due to the need to thoroughly understand Django’s capabilities and implement complex features like image handling and difficulty calculation.

Credits

Role: Lead Developer
Tutor: Azamat Uzbekov

Conclusion

The Recipe Application successfully met its goals, providing a platform for users to share and rate recipes. The use of Django facilitated efficient development, and Bootstrap ensured a responsive design.

Lessons Learned:

	•	The importance of user feedback in iterative design.
	•	Balancing feature richness with simplicity.
	•	The necessity of thorough testing to ensure reliability.

Future Improvements:

	•	Implementing a recommendation system based on user preferences.
	•	Adding social features like comments and recipe sharing.
    `,
  },
  {
    title: "Pokemon App",
    description:
      "A simple web app that shows a list of Pokemon. It's built with HTML, CSS, JavaScript and JQuery. It fetches data from an PokéAPI and allows the user to search for a specific Pokemon.",
    imageUrl: projectTwo,
    githubUrl: "https://github.com/jimmy8000/pokemon-app",
    liveUrl: "https://jimmy8000.github.io/pokemon-app/",
    caseStudy: ``,
  },
  {
    title: "Chat App",
    description:
      "This project is a chat application built with React Native, designed for both iOS and Android platforms. It features real-time messaging, image sharing, location sharing, and audio messages, integrating Firebase for backend services and expo-av for audio playback functionalities.",
    imageUrl: projectFive,
    githubUrl: "https://github.com/jimmy8000/Mobile-App",
    liveUrl: "",
    caseStudy: ``,
  },
  {
    title: "MyFlix Angular",
    description:
      "Angular application designed to help users discover and manage their favorite movies. This app allows users to view movie details, manage their profiles.",
    imageUrl: projectFour,
    githubUrl: "https://github.com/jimmy8000/myFlix-Angular-client",
    liveUrl: "https://jimmy8000.github.io/myFlix-Angular-client/welcome",
    caseStudy: ``,
  },
  {
    title: "Movie App",
    description:
      "A full-stack app that shows a list of movies. It's built with React, MongoDB, Express and Node.js. It has user login, signup and edit profile functions. It fetches data from an API and allows the user to search for a specific movie. It also allows the user to add a movie to the favorites list.",
    imageUrl: projectThree,
    githubUrl: "https://github.com/jimmy8000/movie_api",
    liveUrl: "https://lambent-llama-a360b7.netlify.app/",
    caseStudy: ``,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "ReactNative",
  "Framer Motion",
] as const;
