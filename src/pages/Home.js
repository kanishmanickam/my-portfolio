import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import DecryptedText from '../components/DecryptedText';
import profilePhoto from '../components/images/kanishphoto.jpg';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="home-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      ref={ref}
    >
      {/* Animated Background */}
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Cursor Follower */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      <div className="home-content">
        <motion.div className="text-content" variants={itemVariants}>
          <motion.div className="greeting-container" variants={itemVariants}>
            <motion.h3
              className="greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I am
            </motion.h3>
          </motion.div>

          <motion.div
            className="name-container"
            variants={itemVariants}
          >
            <h1 className="name">
              <DecryptedText
                text="Kanish Kumaran M"
                animateOn="view"
                speed={40}
                sequential={true}
                revealDirection="start"
                className="revealed-name"
                encryptedClassName="encrypted-name"
                parentClassName="name-animated"
              />
            </h1>
          </motion.div>

          <motion.div
            className="role-container"
            variants={itemVariants}
          >
            <motion.h2
              className="role"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              I am a{' '}
              <span className="gradient-text-accent">
                <DecryptedText
                  text="Problem Solver"
                  animateOn="view"
                  speed={50}
                  sequential={true}
                  revealDirection="center"
                  className="revealed-role"
                  encryptedClassName="encrypted-role"
                />
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="description"
            variants={itemVariants}
          >
            Computer Science Engineering student at Amrita Vishwa Vidyapeetham, Coimbatore, passionate about
            full-stack web development and creating scalable, user-centric applications. Proficient in React,
            Node.js, and modern technologies, with a solid foundation in Data Structures & Algorithms and an
            interest in problem-solving and system design.
          </motion.p>

          <motion.div
            className="cta-buttons"
            variants={itemVariants}
          >
            <Link to="/contact">
              <motion.button
                className="cta-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 102, 204, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="next-page-link"
            variants={itemVariants}
          >
            <Link to="/about">
              <motion.div
                className="learn-more-btn"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Me</span>
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="image-content"
          variants={itemVariants}
        >
          <motion.div
            className="profile-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="profile-ring ring-1"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.div
              className="profile-ring ring-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.div
              className="profile-ring ring-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
            <motion.div
              className="profile-image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img src={profilePhoto} alt="Kanish Kumaran M" />
            </motion.div>
          </motion.div>

          <motion.div
            className="floating-cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="skill-badge"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span>React</span>
            </motion.div>
            <motion.div
              className="skill-badge"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <span>JavaScript</span>
            </motion.div>
            <motion.div
              className="skill-badge"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <span>Python</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Counter Section */}
      <motion.div
        className="stats-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="stats-container">
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: 'spring', stiffness: 200 }}
            >
              7+
            </motion.div>
            <div className="stat-label">Projects</div>
          </motion.div>
          <motion.div
            className="stat-item"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
            >
              15+
            </motion.div>
            <div className="stat-label">Technologies</div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
