import React from 'react';
import { motion } from 'framer-motion';
import './UpcomingProjects.css';

const UpcomingProjects = () => {
  const upcomingProjects = [
    {
      id: 1,
      title: 'Accessible Language Learning Platform',
      description: 'A cloud-based, multi-modal language learning platform specifically engineered for learners with cognitive, linguistic, and sensory learning disabilities including dyslexia, ADHD, autism spectrum disorders, and auditory comprehension challenges.',
      technologies: ['React', 'Node.js', 'NLP', 'Microservices', 'Cloud Architecture', 'AI/ML'],
      status: 'In Development',
      progress: 45,
      expectedDate: 'Q2 2025',
      features: [
        'Multi-modal instruction with text, audio, and visual cues',
        'Dyslexia-friendly fonts and high-contrast accessibility themes',
        'Text-to-speech and speech-to-text assistive support',
        'NLP-based automated evaluation of spoken/written responses',
        'Intelligent recommendation engine with adaptive learning paths',
        'Real-time collaborative learning frameworks',
        'Adjustable pacing and distraction-free navigation',
        'Localization support for Indian languages',
        'Scalable microservices-based architecture',
        'Guided pronunciation with phonetic reinforcement'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '🧠'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard for managing multiple social media accounts with real-time insights and scheduling features.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'D3.js'],
      status: 'In Development',
      progress: 65,
      expectedDate: 'Q1 2025',
      features: [
        'Multi-platform integration',
        'Real-time analytics',
        'Content scheduling',
        'Performance tracking',
        'AI-powered insights'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      icon: '📊'
    },
    {
      id: 3,
      title: 'AI Code Assistant',
      description: 'An intelligent VS Code extension that provides context-aware code suggestions, refactoring assistance, and automatic documentation.',
      technologies: ['TypeScript', 'OpenAI API', 'VS Code API', 'Node.js'],
      status: 'Planning',
      progress: 30,
      expectedDate: 'Q2 2025',
      features: [
        'Context-aware suggestions',
        'Automatic documentation',
        'Code refactoring',
        'Bug detection',
        'Learning from codebase'
      ],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      icon: '🤖'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      },
    },
  };

  return (
    <motion.div
      className="upcoming-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <div className="upcoming-container">
        <motion.div className="upcoming-header" variants={itemVariants}>
          <h1 className="section-title">
            Upcoming <span className="gradient-text-orange">Projects</span>
          </h1>
          <p className="section-subtitle">
            What I'm currently building and planning for the future
          </p>
        </motion.div>

        <div className="upcoming-grid">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="upcoming-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="upcoming-header-section">
                <motion.div
                  className="project-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {project.icon}
                </motion.div>
                <div className="header-content">
                  <h3 className="upcoming-title">{project.title}</h3>
                  <div className="status-badges">
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                    <span className="date-badge">{project.expectedDate}</span>
                  </div>
                </div>
              </div>

              <p className="upcoming-description">{project.description}</p>

              <div className="upcoming-features">
                <h4>Planned Features:</h4>
                <div className="features-list">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="feature-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="upcoming-tech">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="tech-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="upcoming-glow"
                style={{ background: project.gradient }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div className="cta-section" variants={itemVariants}>
          <h3>Have an idea or suggestion?</h3>
          <p>I'd love to hear your thoughts on these projects or discuss potential collaborations!</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-contact">
              Get In Touch
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UpcomingProjects;
