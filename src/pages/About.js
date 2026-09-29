import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useMotionValue } from 'framer-motion';
import profilePhoto from '../components/images/kanishphoto.jpg';
import amritaPhoto from '../components/images/amrita.jpg';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  const programmingLanguages = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '⚙️' },
    { name: 'C++', icon: '⚡' },
    { name: 'Haskell', icon: '🔷' },
  ];

  const webTechnologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Flutter', icon: '🎯' },
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
  ];

  const databases = [
    { name: 'SQL', icon: '🗄️' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'MongoDB', icon: '🍃' },
  ];

  const dataScience = [
    { name: 'Multivariable Calculus', icon: '∫' },
    { name: 'Statistics & Probability', icon: '📈' },
    { name: 'Computational Problem Solving', icon: '🧮' },
  ];

  const specializedAreas = [
    { name: 'Database Management', icon: '💾' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Data Structures & Algorithms', icon: '📊' },
  ];

  const otherTools = [
    { name: 'VS Code', icon: '💻', color: '#007ACC' },
    { name: 'Git', icon: '🌱', color: '#F05032' },
    { name: 'Flowgorithm', icon: '🔄', color: '#667eea' },
    { name: 'expOS', icon: '🖥️', color: '#764ba2' },
    { name: 'Unix', icon: '🐧', color: '#f093fb' },
    { name: 'Arduino', icon: '🤖', color: '#00d4ff' },
    { name: 'TinkerCAD', icon: '📦', color: '#06b6d4' },
    { name: 'Firebase', icon: '🔥', color: '#FFA000' },
    { name: 'MATLAB', icon: '📐', color: '#e97826' },
    { name: 'Eclipse', icon: '🌑', color: '#2C2255' },
    { name: 'LinkedIn', icon: '💼', color: '#0077b5' },
    { name: 'Ubuntu', icon: '🐧', color: '#E95420' },
    { name: 'CodeBlocks', icon: '🔨', color: '#1B5E20' },
    { name: 'MS Office', icon: '📄', color: '#D83B01' },
    { name: 'Claude', icon: '🤖', color: '#CC785C' },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      description: 'Building web applications with React, Node.js, and modern technologies.',
    },
    {
      title: 'Mobile App Developer',
      company: 'Academic Projects',
      period: '2025',
      description: 'Developed StudSync - A comprehensive student management mobile application using Flutter for cross-platform deployment with Firebase integration.',
    },
  ];

  const education = {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    year: '2023 - 2027',
  };

  return (
    <motion.div
      className="about-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="background-orb orb-1"
        animate={{
          x: mouseX.get() * 0.02,
          y: mouseY.get() * 0.02,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />
      <motion.div
        className="background-orb orb-2"
        animate={{
          x: mouseX.get() * -0.015,
          y: mouseY.get() * -0.015,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />

      <div className="about-container">
        <motion.div className="about-header" variants={itemVariants}>
          <motion.h1
            className="section-title"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.p
            className="section-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get to know more about my background and expertise
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.section className="about-intro" variants={itemVariants}>
          <div className="intro-content">
            <motion.div
              className="intro-image"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={profilePhoto} alt="Kanish Kumaran M" className="about-profile-img" />
            </motion.div>
            <div className="intro-text">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                I'm <span className="gradient-text-cyan">Kanish Kumaran M</span>, a programmer with experience in Software Development, Web Designing, and App development
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                I focus on creating interactive solutions and I'm passionate about coding, always eager to learn and grow in the field. 
                Currently pursuing B.Tech in Computer Science Engineering at Amrita Vishwa Vidyapeetham, Coimbatore, 
                my journey in tech has equipped me with strong problem-solving skills and hands-on experience in building practical applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                I thrive on challenges and am constantly learning new technologies.
                With experience in full-stack development, IoT projects, and digital electronics,
                I'm actively seeking opportunities to contribute to impactful projects and grow as
                a versatile software developer.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          className="education-section"
          ref={ref}
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="subsection-title" variants={staggerItem}>Education</motion.h2>
          <motion.div
            className="education-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 25px 80px rgba(0, 102, 204, 0.25)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="education-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img 
                src={amritaPhoto}
                alt="Amrita Vishwa Vidyapeetham Coimbatore Campus"
                className="education-image"
              />
              <motion.div
                className="education-icon"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎓
              </motion.div>
            </motion.div>
            <div className="education-details">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {education.degree}
              </motion.h3>
              <motion.p
                className="institution"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {education.institution}
              </motion.p>
              <div className="education-meta">
                <motion.span
                  className="year"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {education.year}
                </motion.span>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Programming Languages */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Programming Languages</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {programmingLanguages.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={staggerItem}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Web Technologies */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Web Technologies</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {webTechnologies.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={staggerItem}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Databases */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Databases</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {databases.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={staggerItem}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Data Science & Machine Learning */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Data Science & Machine Learning</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {dataScience.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={staggerItem}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Specialized Areas */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Specialized Areas</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {specializedAreas.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={staggerItem}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Other Tools & Technologies */}
        <motion.section className="skills-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Other Tools & Technologies</motion.h2>
          <motion.div
            className="skills-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {otherTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="skill-item"
                variants={staggerItem}
                style={{
                  borderColor: tool.color + '30',
                  background: `linear-gradient(135deg, ${tool.color}08, transparent)`
                }}
              >
                <div className="skill-icon">
                  {tool.icon}
                </div>
                <span className="skill-name" style={{ color: tool.color }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience */}
        <motion.section className="experience-section" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Experience</motion.h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.div
                  className="timeline-dot"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 30px rgba(0, 102, 204, 0.8)',
                      '0 0 50px rgba(0, 102, 204, 1)',
                      '0 0 30px rgba(0, 102, 204, 0.8)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="timeline-content"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 15px 50px rgba(0, 102, 204, 0.2)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="timeline-header">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.3 + 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.span
                      className="timeline-period"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.3 + 0.3 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>
                  <motion.p
                    className="timeline-company"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.4 }}
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p
                    className="timeline-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 0.5 }}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section className="fun-facts" variants={itemVariants}>
          <motion.h2 className="subsection-title" variants={staggerItem}>Quick Facts</motion.h2>
          <motion.div
            className="facts-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: '💻', number: '3+', label: 'Projects Completed' },
              { icon: '🏆', number: '5+', label: 'Technologies Learned' },
              { icon: '⚡', number: '100+', label: 'Problems Solved' },
            ].map((fact, index) => (
              <motion.div
                key={index}
                className="fact-card"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="fact-icon">
                  {fact.icon}
                </div>
                <div className="fact-number">
                  {fact.number}
                </div>
                <div className="fact-label">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
