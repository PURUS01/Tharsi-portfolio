import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { icon: '✨', size: 40, x: '10%', y: '20%', duration: 15 },
    { icon: '🎨', size: 35, x: '85%', y: '30%', duration: 18 },
    { icon: '💡', size: 30, x: '15%', y: '70%', duration: 20 },
    { icon: '⚡', size: 45, x: '90%', y: '75%', duration: 16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/5"
          style={{
            fontSize: `${element.size}px`,
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [
              0,
              Math.sin(index) * 100,
              Math.cos(index) * 100,
              0,
            ],
            x: [
              0,
              Math.cos(index) * 80,
              Math.sin(index) * 80,
              0,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.03, 0.08, 0.05, 0.03],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 2,
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;

