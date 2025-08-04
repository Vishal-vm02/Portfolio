import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Weather from './weather.png';
import Card from './card.png';
import Ex from './ex3.png';
import Pet from './pet.png';
import Recipe from './recipe1.png';

const projects = [
  {
    title: "Pet Heaven",
    description: "A full-featured pet platform where users can adopt, buy, and sell pets.",
    tags: ["React", "Firebase", "Authentication"],
    github: "https://github.com/Vishal-vm02/pet-heaven",
    live: "https://pet-heaven-final.vercel.app/",
    image: Pet,
  },
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API to show live weather of any city.",
    tags: ["React", "API", "CSS"],
    github: "https://github.com/Vishal-vm02/weather-final",
    live: "https://weather-final-iota.vercel.app/",
    image: Weather,
  },
  {
    title: "Recipe Finder App",
    description: "Recipe Finder App helps users discover tasty recipes by searching with ingredients or keywords, all in a clean, responsive design.",
    tags: ["React", "Spoonacular API"],
    github: "https://github.com/Vishal-vm02/Recipe-Finder-App",
    live: "https://recipe-finder-app-fawn-omega.vercel.app/",
    image: Recipe,
  },
  
  {
    title: "Business Card Generator",
    description: "Users can create stylish digital business cards with their own branding.",
    tags: ["React", "State Management"],
    github: "https://github.com/Vishal-vm02/bussinesscard",
    live: "https://bussinesscard-an4v.vercel.app/",
    image: Card,
  },
  
  
  {
    title: "Expense Tracker",
    description: "Track income/expenses with real-time state updates using React hooks and local storage.",
    tags: ["React", "Local Storage"],
    github: "https://github.com/Vishal-vm02/-Expense-Calculator-App",
    live: "https://expense-calculator-app-ivory.vercel.app/",
    image: Ex,
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

const Projects = () => {
  return (
    <section className="projects-section">
      <motion.h2
        className="about-title"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Projects
        <div className="underline" />
      </motion.h2>

      <div className="projects-grid container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="project-image" style={{ padding: "5px" }}>
              <img src={project.image} alt="Project" />
            </div>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
