import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MediStock AI – Pharmacy Inventory & Billing Platform',
      description: 'Full-stack pharmacy system for inventory, billing, and prescription workflows with AI demand forecasting, Gemini chatbot with Tamil voice support, and JWT-secured role-based access.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow.js', 'Gemini', 'Docker'],
      imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: 'https://github.com/kanishmanickam/Fullstack_Pharma_project',
      features: [
        'Full-stack pharmacy system for inventory, billing, and prescription workflows',
        'Batch-level tracking with FEFO, expiry alerts, low-stock alerts, and Excel bulk upload',
        'Built AI demand forecasting using Holt-Winters and TensorFlow.js LSTM',
        'Gemini-based chatbot with voice input and Tamil TTS for inventory queries',
        'Implemented JWT auth, RBAC, audit logs, and notifications via Nodemailer and Twilio'
      ]
    },
    {
      id: 2,
      title: 'Accessible Language Learning Platform',
      description: 'MERN-based language learning platform designed for neurodiverse learners (dyslexia, ADHD, autism) with condition-aware lessons, audio TTS support, and progress tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Python', 'gTTS', 'Gemini'],
      imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      githubUrl: 'https://github.com/kanishmanickam/SE_Team11_AccessibleLanguageLearningPlatform',
      features: [
        'Condition-specific learning experiences tailored for Dyslexia, ADHD, and Autism',
        'JWT-secured auth with user accessibility preferences persisted in MongoDB',
        'Lesson content with sections, interactive questions, and progress resume support',
        'Audio support via HTML5 Audio and backend TTS endpoint (/api/tts/speak) with browser fallback',
        'Optional Gemini-powered quiz generation with safe fallbacks'
      ]
    },
    {
      id: 3,
      title: 'Secure Student Complaint & Feedback System',
      description: 'Cybersecurity-focused full-stack complaint management system for students and faculty with hybrid encryption, MFA, digital signatures, and role-based access control.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'bcrypt', 'AES', 'RSA', 'OTP'],
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      githubUrl: 'https://github.com/kanishmanickam/Secure-Student-Complaint-System',
      features: [
        'Role-based dashboards for Students, Faculty, and Admin with complaint tracking',
        'Hybrid AES + RSA encryption for all complaint submissions',
        'Multi-factor authentication (OTP via speakeasy) and digital signature verification',
        'SHA-256 hashing, RBAC, brute-force protection via express-rate-limit',
        'Cyber-themed dark mode UI built with React 18 and custom CSS'
      ]
    },
    {
      id: 4,
      title: 'Human Detection from Drone Footage',
      description: 'Deep learning-based system using YOLOv8 to detect humans in drone video with real-time bounding box inference, modular pipeline, and optimized latency.',
      technologies: ['Python', 'YOLOv8', 'OpenCV'],
      imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      githubUrl: 'https://github.com/kanishmanickam/ES_RecordedFootage_Human_Detection',
      features: [
        'Deep learning-based system using YOLOv8 to detect humans in drone video',
        'Performs real-time detection with bounding boxes using OpenCV',
        'Modular pipeline for model loading, video processing, and visualization',
        'Optimized with YOLOv8-nano and thresholds to reduce latency and false positives'
      ],
      videoDemo: 'https://youtu.be/w0cSk9_F1gM'
    },
    {
      id: 5,
      title: 'StudSync: A Student Management App',
      description: 'Cross-platform Flutter app for managing students and staff with attendance, timetable, staff availability, campus events, and holidays.',
      technologies: ['Flutter', 'Firebase'],
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: 'https://github.com/Ash007dev/studsync',
      features: [
        'Cross-platform Flutter app for managing students and staff',
        'Features attendance, timetable, staff availability, campus events, and holidays',
        'Uses Firebase as the real-time backend with collections for timetable, events, and academic data',
        'Designed a clean UI with smooth navigation and live data updates'
      ]
    },
    {
      id: 6,
      title: 'E-Commerce Website – LuxeFashion',
      description: 'Responsive fashion e-commerce site for Men, Women, and Kids with login, shopping cart, Google Maps integration, and local storage-based cart persistence.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      githubUrl: 'https://github.com/kanishmanickam/Fashion-store',
      features: [
        'Built a responsive fashion e-commerce site for Men, Women, and Kids',
        'Implemented login, cart, and Google Maps integration',
        'Used local storage to persist items and compute totals'
      ]
    },
    {
      id: 7,
      title: 'Smart Classroom Automation',
      description: 'Embedded classroom automation system using PIR sensors for motion-based entry/exit tracking, automated lights and door control, buzzer alerts, and digital occupancy display.',
      technologies: ['C', 'Embedded Systems', 'PIR Sensor', 'Servo Motor', 'LED', 'Buzzer'],
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: [
        'Motion-based entry/exit tracking using PIR sensors to monitor occupancy',
        'Automated lights and door using LEDs and a servo motor',
        'Added buzzer alerts and a digital display for count tracking',
        'Simulated and tested in Tinkercad'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
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
      className="projects-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <div className="projects-container">
        <motion.div className="projects-header" variants={projectVariants}>
          <h1 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subtitle">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                }}
              >
                <div className="project-overlay">
                  <motion.div
                    className="project-number"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    0{project.id}
                  </motion.div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <motion.div
                      className="project-github"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <motion.button
                          className="btn-github"
                          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          View on GitHub
                        </motion.button>
                      </a>
                    </motion.div>
                  )}

                  {project.videoDemo && (
                    <motion.div
                      className="project-video-demo"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <a
                        href={project.videoDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-demo-link"
                      >
                        <motion.button
                          className="btn-video-demo"
                          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Watch Video Demo
                        </motion.button>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          variants={projectVariants}
        >
          <h3>Want to see what's coming next?</h3>
          <p>Check out my upcoming projects that I'm currently working on</p>
          <motion.a
            href="/upcoming"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-upcoming">
              View Upcoming Projects
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
