import React from "react";
import { motion } from "framer-motion";
import "../css/home.css"; 

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Love Kumar</span>
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A Passionate <span className="highlight">Web Developer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          I specialize in creating modern, user-friendly web applications with cutting-edge technologies. 
          My expertise includes building interactive UI, developing scalable backend systems, and optimizing 
          performance to deliver the best user experience.
        </motion.p>
        <motion.div 
          className="buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <a href="https://docs.google.com/document/d/1maW9yVZB35Luy17HelKNu-1Rmcotylxh/edit" className="btn">Resume</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </motion.div>
      </div>
      <motion.div 
        className="image-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <img src='./godPic.jpg' alt="Profile" className="profile-img" />
      </motion.div>
    </div>
  );
}

export default Home;
