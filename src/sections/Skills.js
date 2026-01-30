import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiFigma, 
  SiAdobexd, 
  SiSketch,
  SiFramer,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiWordpress,
  SiCanva,
  SiDavinciresolve
} from 'react-icons/si';

const Skills = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
    { name: 'Sketch', icon: SiSketch, color: '#F7B500' },
    { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF' },
    { name: 'Illustrator', icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'DaVinci Resolve', icon: SiDavinciresolve, color: '#FF6B35' },
  ];


  return (
    <section
      id="skills"
      ref={inViewRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 60% at 50% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Left Aligned */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
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
            Skills & Expertise
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Skills
          </motion.h2>
        </motion.div>

        {/* Skills Grid - 2 Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(99, 102, 241, 0.5)',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className="text-white font-light text-base uppercase tracking-wider"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {skill.name}
                </span>
                <span className="text-indigo-300/60 text-sm font-light">{skill.level}%</span>
              </div>
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.5 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.6), inset 0 0 10px rgba(168, 85, 247, 0.3)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          className="p-8 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3
            className="text-xl font-light text-white mb-8 uppercase tracking-wider text-center"
            style={{
              textShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
            }}
          >
            Design Tools
          </h3>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            {/* Gradient fade on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            
            {/* Gradient fade on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling Content */}
            <div className="flex gap-4 animate-scroll">
              {/* First set of tools */}
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={`first-${index}`}
                    className="relative p-4 bg-white/5 border border-indigo-400/20 rounded-lg text-center backdrop-blur-sm group cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-2 min-w-[140px] flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.05, type: 'spring' }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      borderColor: 'rgba(99, 102, 241, 0.6)',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}15 0%, rgba(168, 85, 247, 0.15) 50%, ${tool.color}15 100%)`,
                      }}
                    />
                    
                    {/* Glowing border and inner shadow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        border: `1px solid ${tool.color}80`,
                        boxShadow: `0 0 20px ${tool.color}50, 0 0 40px ${tool.color}30, inset 0 0 20px ${tool.color}10`,
                      }}
                    />
                    
                    {/* Outer glow effect */}
                    <motion.div
                      className="absolute -inset-1 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: `radial-gradient(circle, ${tool.color}40 0%, ${tool.color}20 50%, transparent 70%)`,
                        filter: 'blur(12px)',
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="relative z-10"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        className="text-2xl md:text-3xl" 
                        style={{ color: tool.color }}
                      />
                    </motion.div>
                    
                    {/* Tool name */}
                    <motion.span
                      className="relative z-10 text-white font-light text-xs uppercase tracking-wider block"
                      initial={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}
                      whileHover={{
                        textShadow: `0 0 15px ${tool.color}60, 0 0 25px ${tool.color}40`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tool.name}
                    </motion.span>
                  </motion.div>
                );
              })}
              
              {/* Duplicate set for seamless loop */}
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={`second-${index}`}
                    className="relative p-4 bg-white/5 border border-indigo-400/20 rounded-lg text-center backdrop-blur-sm group cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-2 min-w-[140px] flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.05, type: 'spring' }}
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                      borderColor: 'rgba(99, 102, 241, 0.6)',
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: `linear-gradient(135deg, ${tool.color}15 0%, rgba(168, 85, 247, 0.15) 50%, ${tool.color}15 100%)`,
                      }}
                    />
                    
                    {/* Glowing border and inner shadow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        border: `1px solid ${tool.color}80`,
                        boxShadow: `0 0 20px ${tool.color}50, 0 0 40px ${tool.color}30, inset 0 0 20px ${tool.color}10`,
                      }}
                    />
                    
                    {/* Outer glow effect */}
                    <motion.div
                      className="absolute -inset-1 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: `radial-gradient(circle, ${tool.color}40 0%, ${tool.color}20 50%, transparent 70%)`,
                        filter: 'blur(12px)',
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className="relative z-10"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent 
                        className="text-2xl md:text-3xl" 
                        style={{ color: tool.color }}
                      />
                    </motion.div>
                    
                    {/* Tool name */}
                    <motion.span
                      className="relative z-10 text-white font-light text-xs uppercase tracking-wider block"
                      initial={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1)' }}
                      whileHover={{
                        textShadow: `0 0 15px ${tool.color}60, 0 0 25px ${tool.color}40`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tool.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
