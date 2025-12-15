import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';

const Skills = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const skills = [
    { name: 'Product Design', level: 95 },
    { name: 'Figma', level: 90 },
    { name: 'Adobe XD', level: 85 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Research', level: 88 },
    { name: 'Wireframing', level: 90 },
    { name: 'Visual Design', level: 93 },
    { name: 'Interaction Design', level: 87 },
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Principle',
    'Framer',
    'Photoshop',
    'Illustrator',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
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

  const toolsVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="skills"
      ref={setRefs}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="skills" />

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
            Skills & Expertise
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            What I Do
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extralight">
              Best
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Skills List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="sticky top-24"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-8"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-extralight text-base sm:text-lg tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-white/40 text-sm font-extralight">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-white/90 rounded-full relative overflow-hidden shadow-lg shadow-white/20"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 2,
                      delay: index * 0.12,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            variants={toolsVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-extralight text-white mb-8 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Design Tools
            </motion.h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md text-center relative overflow-hidden group cursor-pointer"
                  whileHover={{ 
                    scale: 1.2,
                    y: -12,
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 15px 40px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  />
                  <motion.span
                    className="text-white font-extralight text-sm sm:text-base tracking-wide relative z-10"
                    whileHover={{ scale: 1.15, letterSpacing: '0.05em' }}
                  >
                    {tool}
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

