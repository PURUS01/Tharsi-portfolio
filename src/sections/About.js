import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/images/tharsi.png';

const About = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: '3+', label: 'Year Experience' },
    { number: '50+', label: 'Projects' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section
      id="about"
      ref={inViewRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 10% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 60% at 90% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 10% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header - Right Aligned */}
        <motion.div
          className="text-right mb-16"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-6 py-2 bg-indigo-500/10 border border-indigo-400/30 rounded-full text-xs font-light text-indigo-300 uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
            }}
          >
            About Me
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            About
          </motion.h2>
        </motion.div>

        {/* Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)',
                }}
              />
              {/* Image container - no border, natural display */}
              <div className="relative h-full overflow-hidden rounded-lg group/image">
                <motion.img
                  src={profileImage}
                  alt="Tharsika Loganathan - UI/UX Designer"
                  className="w-full h-full object-cover grayscale group-hover/image:grayscale-0"
                  style={{
                    transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Text overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-base text-white font-light mb-1" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
                    UI/UX Designer
                  </div>
                  <div className="text-xs text-white/80 font-light" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}>
                    Based in Sri Lanka
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.p
                className="text-sm sm:text-base text-white/70 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
              >
                As a UI/UX Designer specializing in user interface design for web and mobile applications, with additional expertise in WordPress development and product poster design.
              </motion.p>
              
              <motion.p
                className="text-sm sm:text-base text-white/70 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                My primary focus is creating clean, intuitive, and responsive digital experiences that align with business objectives and user needs. I work closely with stakeholders to transform requirements into well-structured web and mobile interfaces.
              </motion.p>
              
              <motion.p
                className="text-sm sm:text-base text-white/70 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
              >
                I believe effective design balances usability, clarity, and visual impact. By following modern design standards and best practices, I deliver consistent, accessible, and user-centered design solutions.
              </motion.p>
            </div>

            {/* Stats - Vertical List */}
            <div className="flex flex-col gap-4 pt-8 border-t border-indigo-400/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(99, 102, 241, 0.5)',
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <span className="text-white/70 font-light uppercase tracking-wider text-sm">
                    {stat.label}
                  </span>
                  <motion.span
                    className="text-2xl font-light bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    style={{
                      textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    {stat.number}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
