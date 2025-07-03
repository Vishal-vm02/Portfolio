import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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

  const technicalSkills = ["JavaScript", "React.js", "HTML", "CSS","Bootstrap", "Git", "Responsive Design", "Martial UI"];
  const softSkills = ["Teamwork", "Communication", "Time Management", "Problem Solving", "Adaptability", "Canva"];

  return (
    <section className="about-section " id="about">
      <motion.h2
        className="about-title"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        About Me
        <div className="underline" />
      </motion.h2>

      <div className="about-container container">
        <motion.div className="about-left" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
          <h3 className="subheading">Get to know me!</h3>
          <p>
            I'm a passionate <span className="highlight">Web Developer</span> with a focus on building modern and responsive web applications.
          </p>
          <p>
            I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enhancing my skills through online courses.
          </p>
          <p>
            My journey in web development started with a curiosity about how websites work, which led me to pursue a degree in Computer Science. Since then, I've been continuously learning and applying my knowledge to create meaningful projects.
          </p>
          <p>
            I enjoy collaborating with teams and clients to deliver high-quality solutions that meet both user needs and business goals. My approach combines technical expertise with creativity to create engaging digital experiences.
          </p>
        </motion.div>

        <motion.div className="about-right" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
          <h3 className="subheading">My Skills</h3>

          <div className="skill-group">
            <h4>Technical Skills</h4>
            <div className="skills">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h4>Soft Skills</h4>
            <div className="skills">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * (index + technicalSkills.length) }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
