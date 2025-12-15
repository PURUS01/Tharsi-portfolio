import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ variant = 'default' }) => {
  // Elegant floating particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 25,
    delay: Math.random() * 8,
  }));

  // Design-inspired geometric shapes
  const designShapes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 35 + 30,
    shape: ['circle', 'square', 'diamond'][i % 3],
  }));

  // Flowing gradient orbs
  const gradientOrbs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: 300 + i * 150,
    x: 20 + i * 25,
    y: 15 + i * 20,
    duration: 25 + i * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elegant Animated Gradient Background - Video-like */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(255,255,255,0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 50% at 80% 30%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 80% 40% at 20% 70%, rgba(255,255,255,0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 30% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 70%, rgba(255,255,255,0.06) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Flowing Gradient Orbs - Elegant Video Effect */}
      {gradientOrbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, rgba(255,255,255,${0.12 - orb.id * 0.02}) 0%, rgba(255,255,255,${0.05 - orb.id * 0.01}) 40%, transparent 70%)`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [
              0,
              Math.sin(orb.id * 1.5) * 250,
              Math.cos(orb.id * 1.5) * 250,
              Math.sin(orb.id * 1.5) * 200,
              0,
            ],
            y: [
              0,
              Math.cos(orb.id * 1.5) * 250,
              Math.sin(orb.id * 1.5) * 250,
              Math.cos(orb.id * 1.5) * 200,
              0,
            ],
            scale: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.06, 0.18, 0.1, 0.14, 0.06],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.id * 4,
          }}
        />
      ))}

      {/* Elegant Floating Particles - Refined Motion */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-white/20 blur-[1.5px]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px rgba(255,255,255,0.3)',
          }}
          animate={{
            y: [
              particle.y * 10,
              (particle.y * 10) + Math.sin(particle.id * 0.3) * 400,
              (particle.y * 10) + Math.cos(particle.id * 0.3) * 400,
              (particle.y * 10) + Math.sin(particle.id * 0.5) * 300,
              particle.y * 10,
            ],
            x: [
              particle.x * 10,
              (particle.x * 10) + Math.cos(particle.id * 0.3) * 400,
              (particle.x * 10) + Math.sin(particle.id * 0.3) * 400,
              (particle.x * 10) + Math.cos(particle.id * 0.5) * 300,
              particle.x * 10,
            ],
            opacity: [0.1, 0.4, 0.25, 0.35, 0.1],
            scale: [1, 2, 1.3, 1.8, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Design-Inspired Geometric Shapes */}
      {designShapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute border border-white/12 backdrop-blur-md"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'diamond' ? '0%' : '12px',
            transform: shape.shape === 'diamond' ? 'rotate(45deg)' : 'none',
            background: shape.shape === 'square' ? 'rgba(255,255,255,0.02)' : 'transparent',
          }}
          animate={{
            y: [
              shape.y * 10,
              (shape.y * 10) + Math.sin(shape.id * 0.4) * 600,
              (shape.y * 10) + Math.cos(shape.id * 0.4) * 600,
              (shape.y * 10) + Math.sin(shape.id * 0.6) * 400,
              shape.y * 10,
            ],
            x: [
              shape.x * 10,
              (shape.x * 10) + Math.cos(shape.id * 0.4) * 500,
              (shape.x * 10) + Math.sin(shape.id * 0.4) * 500,
              (shape.x * 10) + Math.cos(shape.id * 0.6) * 400,
              shape.x * 10,
            ],
            rotate: [0, 180, 360, 270, 0],
            scale: [1, 1.4, 0.9, 1.2, 1],
            opacity: [0.03, 0.12, 0.06, 0.1, 0.03],
            borderRadius: shape.shape === 'circle' 
              ? ['50%', '30%', '50%', '40%', '50%']
              : shape.shape === 'diamond'
              ? ['0%', '20%', '0%', '15%', '0%']
              : ['12px', '50%', '12px', '30%', '12px'],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.id * 2,
          }}
        />
      ))}

      {/* Elegant Flowing Lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-0.5 h-60 bg-gradient-to-b from-white/15 via-white/8 to-transparent blur-[1px]"
          style={{
            left: `${(i * 6.5) % 100}%`,
            top: `${(i * 8) % 100}%`,
            transformOrigin: 'center',
          }}
          animate={{
            y: [
              (i * 8) * 10,
              (i * 8) * 10 + Math.sin(i * 0.5) * 500,
              (i * 8) * 10 + Math.cos(i * 0.5) * 500,
              (i * 8) * 10 + Math.sin(i * 0.7) * 400,
              (i * 8) * 10,
            ],
            x: [
              (i * 6.5) * 10,
              (i * 6.5) * 10 + Math.cos(i * 0.5) * 400,
              (i * 6.5) * 10 + Math.sin(i * 0.5) * 400,
              (i * 6.5) * 10 + Math.cos(i * 0.7) * 300,
              (i * 6.5) * 10,
            ],
            rotate: [i * 24, i * 24 + 720, i * 24 + 1080, i * 24 + 540, i * 24],
            opacity: [0.04, 0.15, 0.08, 0.12, 0.04],
            scaleY: [1, 2, 0.6, 1.5, 1],
          }}
          transition={{
            duration: 22 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Elegant Pulsing Circles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-white/10 backdrop-blur-lg"
          style={{
            width: `${180 + i * 100}px`,
            height: `${180 + i * 100}px`,
            left: `${12 + i * 15}%`,
            top: `${10 + i * 14}%`,
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.05)',
          }}
          animate={{
            scale: [1, 1.6, 0.7, 1.3, 1],
            opacity: [0.04, 0.15, 0.07, 0.12, 0.04],
            rotate: [0, 180, 360, 270, 0],
            x: [0, Math.sin(i * 1.2) * 120, Math.cos(i * 1.2) * 120, 0],
            y: [0, Math.cos(i * 1.2) * 120, Math.sin(i * 1.2) * 120, 0],
          }}
          transition={{
            duration: 28 + i * 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 3,
          }}
        />
      ))}

      {/* Elegant Mesh Gradient Overlay */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={{
          background: [
            'radial-gradient(ellipse 100% 60% at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse 80% 50% at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 90% 70% at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse 100% 60% at 0% 100%, rgba(255,255,255,0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse 110% 80% at 50% 50%, rgba(255,255,255,0.09) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 25% 25%, rgba(255,255,255,0.07) 0%, transparent 50%)',
            'radial-gradient(ellipse 100% 60% at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(ellipse 80% 50% at 100% 100%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Elegant Flowing Light Sweep */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 75%, transparent 100%)',
          width: '200%',
          height: '200%',
        }}
        animate={{
          x: ['-100%', '100%'],
          y: ['-100%', '100%'],
          rotate: [0, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Elegant Animated Grid - Subtle */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0 0', '60px 60px', '120px 120px', '60px 60px', '0 0'],
          opacity: [0.04, 0.12, 0.08, 0.1, 0.04],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Elegant Floating Dots - Refined */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 bg-white/30 rounded-full blur-[1px]"
          style={{
            left: `${(i * 4) % 100}%`,
            top: `${(i * 5.5) % 100}%`,
            boxShadow: '0 0 8px rgba(255,255,255,0.4)',
          }}
          animate={{
            y: [
              0,
              Math.sin(i * 0.4) * 200,
              Math.cos(i * 0.4) * 200,
              Math.sin(i * 0.6) * 150,
              0,
            ],
            x: [
              0,
              Math.cos(i * 0.4) * 200,
              Math.sin(i * 0.4) * 200,
              Math.cos(i * 0.6) * 150,
              0,
            ],
            opacity: [0.1, 0.5, 0.3, 0.4, 0.1],
            scale: [1, 2, 1.2, 1.8, 1],
          }}
          transition={{
            duration: 15 + i * 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.25,
          }}
        />
      ))}

      {/* Elegant Wave Patterns - SVG */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.svg
          key={`wave-${i}`}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.06 }}
          animate={{
            x: [0, 50, 100, 50, 0],
            y: [0, 30, 0, -30, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.path
            d={`M 0 ${300 + i * 150} Q ${100 + i * 50} ${300 + i * 150 - (50 + i * 30)}, ${200 + i * 100} ${300 + i * 150} T ${400 + i * 200} ${300 + i * 150}`}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{
              d: [
                `M 0 ${300 + i * 150} Q ${100 + i * 50} ${300 + i * 150 - (50 + i * 30)}, ${200 + i * 100} ${300 + i * 150} T ${400 + i * 200} ${300 + i * 150}`,
                `M 0 ${300 + i * 150} Q ${100 + i * 50} ${300 + i * 150 + (50 + i * 30)}, ${200 + i * 100} ${300 + i * 150} T ${400 + i * 200} ${300 + i * 150}`,
                `M 0 ${300 + i * 150} Q ${100 + i * 50} ${300 + i * 150 - (30 + i * 20)}, ${200 + i * 100} ${300 + i * 150} T ${400 + i * 200} ${300 + i * 150}`,
                `M 0 ${300 + i * 150} Q ${100 + i * 50} ${300 + i * 150 - (50 + i * 30)}, ${200 + i * 100} ${300 + i * 150} T ${400 + i * 200} ${300 + i * 150}`,
              ],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        </motion.svg>
      ))}
    </div>
  );
};

export default AnimatedBackground;
