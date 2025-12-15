import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  // Parallax layers with different speeds
  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: backgroundY1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{ y: backgroundY2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{ y: backgroundY3 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Grid Pattern Overlay with Parallax */}
      <motion.div
        style={{ y: backgroundY1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="hero" />

      {/* Content */}
      <motion.div
        style={{ y: smoothY, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-10">
          <motion.span
            className="inline-block px-8 py-3 text-xs font-extralight text-white/60 border border-white/15 rounded-full backdrop-blur-md mb-8 tracking-[0.3em] uppercase"
            whileHover={{ 
              scale: 1.08, 
              borderColor: 'rgba(255,255,255,0.3)',
              backgroundColor: 'rgba(255,255,255,0.05)',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            ✨ UI/UX Designer
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-[1.1] tracking-[-0.02em]"
        >
          <motion.span 
            className="block font-extralight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            I'm tharc
          </motion.span>
          <motion.span 
            className="block font-extralight bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            Product Designer
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/50 mb-16 max-w-3xl mx-auto leading-[1.6] font-extralight tracking-wide"
        >
          Crafting beautiful and intuitive digital experiences that blend
          <span className="text-white/70 font-light"> aesthetics </span>
          with
          <span className="text-white/70 font-light"> functionality </span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-10 py-5 bg-white text-black font-light rounded-full relative overflow-hidden group text-base tracking-wider shadow-2xl shadow-white/25"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 35px 100px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.15)',
              y: -8,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            {/* Default Black Text - Always Visible */}
            <span className="relative z-20 flex items-center gap-3 text-black font-light">
              View My Work
              <motion.span 
                className="text-2xl text-black"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
            
            {/* Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%)',
                filter: 'blur(25px)',
              }}
            />
            
            {/* Outer Glow Ring */}
            <motion.div
              className="absolute -inset-3 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600"
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10 rounded-full"
              initial={{ x: '-200%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 1 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-10 py-5 border-2 border-white/30 text-white font-light rounded-full relative overflow-hidden group backdrop-blur-md bg-white/5 text-base tracking-wider"
            whileHover={{ 
              scale: 1.1,
              borderColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 50px rgba(255, 255, 255, 0.3), 0 20px 60px rgba(255, 255, 255, 0.15)',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              y: -8,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            <motion.span className="relative z-10 flex items-center gap-3 font-light">
              Get In Touch
              <motion.span 
                className="text-2xl"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                ✉
              </motion.span>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-white/15 backdrop-blur-lg rounded-full"
              initial={{ scale: 0, borderRadius: '9999px' }}
              whileHover={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-10 rounded-full"
              initial={{ x: '-200%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 1 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

