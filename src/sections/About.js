import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/images/tharsi.jpeg';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

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
      y: 80,
      scale: 0.9,
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

  const stats = [
    { number: '1+', label: 'Year Experience' },
    { number: '30+', label: 'Projects' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      id="about"
      ref={setRefs}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="about" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Side - Profile Image with Creative Design */}
          <motion.div
            variants={itemVariants}
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Floating Background Shapes */}
            <motion.div
              className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/5 blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-white/5 blur-3xl"
              animate={{
                x: [0, -20, 0],
                y: [0, -30, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />

            {/* Profile Image Container - Modern Square Design */}
            <motion.div
              style={{ y: imageY }}
              className="relative z-10"
              whileHover={{ 
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-white/10 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Decorative Border Frame */}
              <motion.div
                className="absolute -inset-6 rounded-3xl border-2 border-white/20 backdrop-blur-sm"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Profile Image - Square with Rounded Corners */}
              <motion.div
                style={{ scale: imageScale }}
                className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl group cursor-pointer bg-white/5"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 80px rgba(255, 255, 255, 0.4), 0 0 120px rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.img
                  src={profileImage}
                  alt="tharc - Product Designer"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-black/30"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%', rotate: -45 }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1 }}
                />

                {/* Corner Accents */}
                {[
                  { top: '10%', left: '10%' },
                  { top: '10%', right: '10%' },
                  { bottom: '10%', left: '10%' },
                  { bottom: '10%', right: '10%' },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 border-2 border-white/40 rounded-full"
                    style={pos}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating Decorative Elements */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/50 rounded-full blur-sm"
                  style={{
                    top: `${15 + i * 25}%`,
                    left: i % 2 === 0 ? '-8%' : '108%',
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, i % 2 === 0 ? -10 : 10, 0],
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
          >
            {/* Section Label */}
            <motion.span
              className="inline-block text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              About Me
            </motion.span>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-[-0.02em] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              About
            </motion.h2>

            {/* Introduction Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl text-white/50 leading-[1.7] font-extralight tracking-wide"
              >
                As a UI/UX Designer specializing in user interface design for web and mobile applications, with additional expertise in WordPress development and product poster design.
              </motion.p>
              
              <motion.p
                className="text-base sm:text-lg md:text-xl text-white/50 leading-[1.7] font-extralight tracking-wide"
              >
                My primary focus is creating clean, intuitive, and responsive digital experiences that align with business objectives and user needs. I work closely with stakeholders to transform requirements into well-structured web and mobile interfaces, develop functional and scalable WordPress websites, and design visually compelling product posters that support branding and marketing goals.
              </motion.p>
              
              <motion.p
                className="text-base sm:text-lg md:text-xl text-white/50 leading-[1.7] font-extralight tracking-wide"
              >
                I believe effective design balances usability, clarity, and visual impact. By following modern design standards and best practices, I deliver consistent, accessible, and user-centered design solutions across digital platforms and marketing assets.
              </motion.p>
            </motion.div>

            {/* Stats - Horizontal Layout */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-10"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 15px 35px rgba(255, 255, 255, 0.1)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="text-3xl sm:text-4xl font-light text-white mb-1 relative z-10"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      delay: 1.1 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <motion.div
                    className="text-xs sm:text-sm text-white/50 relative z-10 font-extralight tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {stat.label}
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

