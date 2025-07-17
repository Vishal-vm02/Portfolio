import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const technicalSkills = ["JavaScript", "React.js", "HTML", "CSS", "Bootstrap", "Git", "Responsive Design", "Martial UI"];
  const softSkills = ["Teamwork", "Communication", "Time Management", "Problem Solving", "Adaptability", "Canva"];

  return (
    <section className="about-section" id="about">
      <motion.h2
        className="about-title"
        initial="hidden"
        animate="visible"
        variants={fadeLeft}
      >
        About Me
        <div className="underline" />
      </motion.h2>

      <div className="about-container container">
        <motion.div
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeLeft}
        >
          <h3 className="subheading">Get to know me!</h3>
          <p>I’m a passionate <span className="highlight">Web Developer</span> with a focus on building modern and responsive web applications.</p>
          <p>I love turning complex problems into simple, beautiful, and intuitive designs. When I’m not coding, I’m exploring new technologies or contributing to open-source projects.</p>
          <p>My journey in web development started with curiosity about how websites work, leading me to pursue a degree in Computer Science.</p>
          <p>I enjoy collaborating with teams and clients to deliver high-quality, engaging digital experiences that blend creativity and technical skills.</p>
        </motion.div>

        <motion.div
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeRight}
        >
          <h3 className="subheading">My Skills</h3>

          <div className="skill-group">
            <h4>Technical Skills</h4>
            <div className="skills">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="skill-badge tech"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeRight}
                  custom={index}
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
                  className="skill-badge soft"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeRight}
                  custom={index + technicalSkills.length}
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
