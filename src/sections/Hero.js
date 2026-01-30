import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Tharsika Loganathan';
  const typingSpeed = 100; // milliseconds per character
  const startDelay = 800; // delay before typing starts (in ms)

  useEffect(() => {
    let timeoutId;
    let cursorInterval;

    // Start typing animation after delay
    const startTyping = setTimeout(() => {
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutId = setTimeout(typeNextChar, typingSpeed);
        } else {
          // Typing complete, start cursor blink
          cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
          }, 530);
        }
      };

      typeNextChar();
    }, startDelay);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

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
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 60%), radial-gradient(ellipse 80% 40% at 20% 70%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 30% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content - Vertical Centered Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full text-center"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/30 rounded-full mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)' }} />
            <span className="text-xs font-light text-indigo-300 uppercase tracking-wider">
              Available for Projects
            </span>
          </motion.div>

          {/* Main Heading - Stacked */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] tracking-tight"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hello, I'm
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              style={{
                textShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
              }}
            >
              {displayedName}
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-0.5 h-[1em] bg-gradient-to-b from-indigo-400 to-purple-400 ml-1 align-middle"
                style={{
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                }}
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="flex items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)' }} />
            <span className="text-base sm:text-lg text-white/70 font-light">UI/UX Designer</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400" style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }} />
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-light max-w-2xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Crafting beautiful and intuitive digital experiences that blend aesthetics with functionality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-light text-sm tracking-wide overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ filter: 'blur(20px)' }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative px-8 py-3 border-2 border-indigo-400/50 text-white font-light text-sm tracking-wide overflow-hidden backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(99, 102, 241, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
              }}
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-indigo-400/50 to-purple-400/50 relative overflow-hidden"
            style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)' }}
          >
            <motion.div
              className="w-full h-8 bg-gradient-to-b from-indigo-400 to-purple-400"
              animate={{ y: [0, 32, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)' }}
            />
          </motion.div>
          <motion.div
            className="w-2 h-2 border border-indigo-400/60 rotate-45"
            animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
