import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';
import CharacterAnimationImg from '../assets/projects/figma/Character Animation/charactor animation.jpg';
import EcoEcommerceImg from '../assets/projects/figma/Eco E-Commerce/eco e commerce.jpg';
import TravelBookingImg from '../assets/projects/figma/Travel Booking/travel booking.jpg';
import CatImg from '../assets/projects/wordpress/CAT/cat.png';
import SuntravelImg from '../assets/projects/wordpress/Suntravel/suntravek.png';
import SkyAcademyImg from '../assets/projects/wordpress/Sky Academy/sky academy.png';

const Projects = ({ onViewAll }) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  const projects = [
    {
      id: 1,
      title: 'Travel Booking',
      category: 'Figma',
      image: TravelBookingImg,
      description:
        'Conversion-focused travel booking flow with hero lead, card grid, and streamlined checkout CTA.',
      tags: ['UI/UX', 'Travel', 'Responsive'],
      url: 'https://www.behance.net/gallery/240380633/Travek-Booking',
    },
    {
      id: 2,
      title: 'Character Animation',
      category: 'Figma',
      image: CharacterAnimationImg,
      description:
        'Playful animated storytelling with bold color, layered gradients, and motion emphasis.',
      tags: ['Illustration', 'Landing', 'Motion'],
      url: 'https://www.behance.net/gallery/239176941/Character-Animation-by-using-FIGMA',
    },
    {
      id: 3,
      title: 'Eco E-Commerce',
      category: 'Figma',
      image: EcoEcommerceImg,
      description:
        'Nature-inspired storefront with modular product tiles and calm, earthy palette.',
      tags: ['E-Commerce', 'Sustainable', 'UI'],
      url: 'https://www.behance.net/gallery/240376127/Eco-e-commerce',
    },
    {
      id: 4,
      title: 'CAT',
      category: 'WordPress',
      image: CatImg,
      description:
        'Corporate WordPress build with crisp hero, service highlights, and contact capture.',
      tags: ['Corporate', 'WordPress', 'Responsive'],
      url: 'https://www.behance.net/gallery/228230907/CAT',
    },
    {
      id: 5,
      title: 'Suntravel',
      category: 'WordPress',
      image: SuntravelImg,
      description:
        'Travel agency site with destination highlights, offers, and inquiry-focused CTA.',
      tags: ['Travel', 'Agency', 'WordPress'],
      url: 'https://www.behance.net/gallery/238410803/suntravel',
    },
    {
      id: 6,
      title: 'Sky Academy',
      category: 'WordPress',
      image: SkyAcademyImg,
      description:
        'Education-focused site blending course cards, instructor highlights, and enrollment funnels.',
      tags: ['Education', 'WordPress', 'Courses'],
      url: 'https://www.behance.net/gallery/228230443/SKY-academy',
    },
  ];

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
      y: 100,
      scale: 0.85,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
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

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
  };

  return (
    <section
      id="projects"
      ref={setRefs}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="projects" />

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
            Portfolio
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extralight">
              Projects
            </span>
          </motion.h2>
        </motion.div>

        {/* Projects Grid - Asymmetric Masonry Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr"
        >
          {projects.map((project, index) => {
            // Create asymmetric layout - some cards taller
            const isTall = index === 1 || index === 4;
            const isWide = index === 2;
            
            return (
            <motion.a
              key={project.id}
              variants={itemVariants}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl cursor-pointer ${
                isTall ? 'md:row-span-2' : ''
              } ${isWide ? 'md:col-span-2 lg:col-span-1' : ''}`}
              whileHover={{ 
                y: -25,
                scale: 1.05,
                borderColor: 'rgba(255, 255, 255, 0.5)',
                boxShadow: '0 40px 100px rgba(255, 255, 255, 0.25), inset 0 0 30px rgba(255, 255, 255, 0.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 25,
              }}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${
                  isTall ? 'h-96' : 'h-64'
                }`}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <motion.div
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>
                </motion.div>
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 relative z-10">
                <motion.div className="flex items-start justify-between mb-3">
                  <motion.h3
                    className="text-xl sm:text-2xl font-extralight text-white tracking-wide flex-1"
                    whileHover={{ x: 8, letterSpacing: '0.02em' }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div
                    className="ml-4 text-white/30 group-hover:text-white/90 transition-all text-2xl"
                    whileHover={{ rotate: 45, scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </motion.div>
                <p className="text-white/50 mb-6 text-sm sm:text-base leading-[1.7] font-extralight tracking-wide">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-light bg-white/10 text-white/80 rounded-full border border-white/10 tracking-wide"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        y: -2,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay with Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              <motion.div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              {/* Border Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <motion.button
            onClick={handleViewAll}
            className="px-10 py-4 rounded-full bg-white text-black font-light tracking-[0.15em] uppercase relative overflow-hidden group shadow-2xl shadow-white/15"
            whileHover={{
              scale: 1.08,
              y: -6,
              boxShadow:
                '0 40px 140px rgba(255,255,255,0.4), 0 0 55px rgba(255,255,255,0.3)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Animated gradient wash */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background:
                  'linear-gradient(120deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.15))',
                backgroundSize: '200% 200%',
              }}
            />

            {/* Pulsing ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-white/30"
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 0.15, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Floating sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: `${10 + (i * 13) % 80}%`,
                    filter: 'blur(0.4px)',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>

            <span className="relative z-20 flex items-center gap-3">
              View all projects
              <motion.span
                className="text-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.22 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10"
              initial={{ x: '-200%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.9 }}
            />
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/25 blur-2xl" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

