import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Animated Wave */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="rgba(255,255,255,0.02)"
          animate={{
            d: [
              'M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z',
              'M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z',
              'M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-1 h-16 bg-white/20 rounded-full"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};

export default SectionDivider;

