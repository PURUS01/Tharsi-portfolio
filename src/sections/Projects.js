import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';

const Projects = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Design',
      description:
        'A modern e-commerce platform with intuitive user experience and seamless checkout process.',
      tags: ['UI/UX', 'Figma', 'Prototyping'],
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      description:
        'Secure and user-friendly mobile banking application with advanced security features.',
      tags: ['Mobile', 'iOS', 'Android'],
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Web Design',
      description:
        'Comprehensive dashboard design for SaaS platform with data visualization and analytics.',
      tags: ['Dashboard', 'Data Viz', 'Web'],
    },
    {
      id: 4,
      title: 'Fitness App',
      category: 'Mobile Design',
      description:
        'Motivational fitness tracking app with beautiful UI and engaging user experience.',
      tags: ['Mobile', 'Health', 'Fitness'],
    },
    {
      id: 5,
      title: 'Restaurant Website',
      category: 'Web Design',
      description:
        'Elegant restaurant website with online ordering system and menu showcase.',
      tags: ['Web', 'Food', 'E-commerce'],
    },
    {
      id: 6,
      title: 'Travel Booking App',
      category: 'Mobile Design',
      description:
        'Streamlined travel booking experience with easy navigation and booking flow.',
      tags: ['Mobile', 'Travel', 'Booking'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.85,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="projects"
      ref={setRefs}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="projects" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            Featured
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extralight">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid - Asymmetric Masonry Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
        >
          {projects.map((project, index) => {
            // Create asymmetric layout - some cards taller
            const isTall = index === 1 || index === 4;
            const isWide = index === 2;
            
            return (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl cursor-pointer ${
                isTall ? 'md:row-span-2' : ''
              } ${isWide ? 'md:col-span-2 lg:col-span-1' : ''}`}
              whileHover={{ 
                y: -25,
                scale: 1.05,
                borderColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 40px 100px rgba(255, 255, 255, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              {/* Project Image Placeholder */}
              <div className={`relative bg-gradient-to-br from-white/10 to-white/5 overflow-hidden ${
                isTall ? 'h-96' : 'h-64'
              }`}>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05))] bg-[size:20px_20px]" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="text-6xl opacity-20"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🎨
                  </motion.span>
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>
                </motion.div>
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 relative z-10">
                <motion.div className="flex items-start justify-between mb-3">
                  <motion.h3
                    className="text-xl sm:text-2xl font-extralight text-white tracking-wide flex-1"
                    whileHover={{ x: 8, letterSpacing: '0.02em' }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className="ml-4 text-white/30 group-hover:text-white/90 transition-all text-2xl"
                    whileHover={{ rotate: 45, scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </motion.div>
                <p className="text-white/50 mb-6 text-sm sm:text-base leading-[1.7] font-extralight tracking-wide">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-light bg-white/10 text-white/80 rounded-full border border-white/10 tracking-wide"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        y: -2,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay with Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

