import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="relative w-full h-20 overflow-hidden bg-black">
      {/* Animated Diagonal Line Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
          animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
          duration: 10,
            repeat: Infinity,
          ease: 'linear',
          }}
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(99, 102, 241, 0.1) 10px,
            rgba(99, 102, 241, 0.1) 12px
          )`,
        }}
      />
      
      {/* Center Geometric Element with Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"
            animate={{
              width: [48, 64, 48],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
            }}
          />
        <motion.div
            className="w-2 h-2 border border-indigo-400/60 rotate-45"
          animate={{
              rotate: [45, 225, 45],
              scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
            style={{
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.6)',
            }}
          />
          <motion.div
            className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
            animate={{
              width: [48, 64, 48],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            style={{
              boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
            }}
        />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
