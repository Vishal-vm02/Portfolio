import React from "react";
import "./Projects.css";
import imageUrl from './img.jpg'
import { motion } from 'framer-motion';
import Weather from './weather.png'
import Card from './card.png'
import Ex from './ex3.png'
import Pet from './pet.png'





const projects = [
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeather API to show live weather of any city.",
    tags: ["React", "API", "CSS"],
    github: "https://github.com/Vishal-vm02/weather-final",
    live: "https://weather-final-iota.vercel.app/",
  },
  {
    title: "Business Card Generator",
    description: "Users can create stylish digital business cards with their own branding.",
    tags: ["React", "State Management"],
    github: "https://github.com/Vishal-vm02/bussinesscard",
    live: "https://bussinesscard-an4v.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description: "Track income/expenses with real-time state updates using React hooks and local storage.",
    tags: ["React", "Local Storage"],
    github: "https://github.com/Vishal-vm02/-Expense-Calculator-App",
    live: "https://expense-calculator-app-ivory.vercel.app/",
  },
  {
    title: "Pet Heaven",
    description: "A full-featured pet platform where users can adopt, buy, and sell pets.",
    tags: ["React", "Firebase", "Authentication"],
    github: "https://github.com/Vishal-vm02/pet-heaven",
    live: "https://pet-heaven-final.vercel.app/",
  },
];

const Projects = () => {
    const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut'
      }
    }),
  };
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

      {/* <h2 className="projects-heading">Projects</h2> */}

      <div className="projects-grid container">
        <div className="project-card">
                    <div className="project-image" style={{padding:"5px"}}> <img src={Pet} alt="Project" /></div>

          <div className="project-details">
            <h3 className="project-title">{projects[3].title}</h3>
            <p className="project-description">{projects[3].description}</p>
            <div className="project-tags">
              {projects[3].tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={projects[3].live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={projects[3].github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image" style={{padding:"5px"}}> <img src={Weather} alt="Project" /></div>
          <div className="project-details">
            <h3 className="project-title">{projects[0].title}</h3>
            <p className="project-description">{projects[0].description}</p>
            <div className="project-tags">
              {projects[0].tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={projects[0].live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={projects[0].github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
                    <div className="project-image" style={{padding:"5px"}}> <img src={Card} alt="Project" /></div>

          <div className="project-details">
            <h3 className="project-title">{projects[1].title}</h3>
            <p className="project-description">{projects[1].description}</p>
            <div className="project-tags">
              {projects[1].tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={projects[1].live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={projects[1].github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
                    <div className="project-image" style={{padding:"5px"}}> <img src={Ex} alt="Project" /></div>

          <div className="project-details">
            <h3 className="project-title">{projects[2].title}</h3>
            <p className="project-description">{projects[2].description}</p>
            <div className="project-tags">
              {projects[2].tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={projects[2].live} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={projects[2].github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        

      </div>
    </section>
  );
};

export default Projects;
