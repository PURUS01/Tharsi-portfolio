import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// WEB DESIGN imports (from figma folder)
import LuxyArchitectureImg from '../assets/projects/figma/Luxy Architecture/luxuryarcweb.webp';
import ClothingBrandImg from '../assets/projects/figma/Clothing Brand/clothingweb.jpg';

// MOBILE imports (from figma folder)
import FarmMobileUIImg from '../assets/projects/figma/Farm Mobile UI/farmmobile.jpg';

// DASHBOARD imports (from figma folder)
import SaasImg from '../assets/projects/figma/Saas/saas.jpg';

// ECOMMERCE imports (from figma folder)
import EcoEcommerceImg from '../assets/projects/figma/Eco E-Commerce/eco e commerce.jpg';

// ANIMATION imports (from figma folder)
import CoffeeAnimationImg from '../assets/projects/figma/Coffee Animation/coffee.jpeg';

// WORDPRESS imports
import CatImg from '../assets/projects/wordpress/CAT/cat.png';

const Projects = ({ onViewAll }) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const portfolioCategories = [
    {
      id: 'web-design',
      title: 'WEB DESIGN',
      image: LuxyArchitectureImg, // Using Luxy Architecture as representative image
      projects: [
        { title: 'Luxy Architecture', url: 'https://www.behance.net/gallery/242984587/Luxy-Architecture-Web-UI' },
        { title: 'Clothing Brand', url: 'https://www.behance.net/gallery/243052229/Clothing-Brand' },
      ],
      url: 'https://www.behance.net/logantharshi',
    },
    {
      id: 'mobile',
      title: 'MOBILE',
      image: FarmMobileUIImg,
      projects: [
        { title: 'Farm Mobile UI', url: 'https://www.behance.net/gallery/242750645/Farm-Mobile-UI' },
      ],
      url: 'https://www.behance.net/gallery/242750645/Farm-Mobile-UI',
    },
    {
      id: 'dashboard',
      title: 'DASHBOARD',
      image: SaasImg,
      projects: [
        { title: 'Saas', url: 'https://www.behance.net/gallery/240380693/Saas' },
      ],
      url: 'https://www.behance.net/gallery/240380693/Saas',
    },
    {
      id: 'ecommerce',
      title: 'ECOMMERCE',
      image: EcoEcommerceImg,
      projects: [
        { title: 'Eco E-Commerce', url: 'https://www.behance.net/gallery/240376127/Eco-e-commerce' },
      ],
      url: 'https://www.behance.net/gallery/240376127/Eco-e-commerce',
    },
    {
      id: 'animation',
      title: 'ANIMATION',
      image: CoffeeAnimationImg,
      projects: [
        { title: 'Coffee Animation', url: 'https://www.behance.net/gallery/238783821/Java-junction' },
      ],
      url: 'https://www.behance.net/gallery/238783821/Java-junction',
    },
    {
      id: 'wordpress',
      title: 'WORDPRESS',
      image: CatImg,
      projects: [
        { title: 'Center for Alternative Technologies', url: 'https://www.behance.net/gallery/228230907/CAT' },
      ],
      url: 'https://www.behance.net/gallery/228230907/CAT',
    },
  ];

  return (
    <section
      id="projects"
      ref={inViewRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 60% at 10% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 90% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
            Portfolio
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            PORTFOLIO GRID
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base text-white/60 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            A curated selection of UI designs, dashboards, mobile interfaces, and visual creatives crafted with usability, clarity, and modern design principles.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end content-end">
          {/* Row 1: WEB DESIGN and MOBILE */}
          <motion.a
            href={portfolioCategories[0].url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden cursor-pointer flex flex-col h-full justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm">
              <img
                src={portfolioCategories[0].image}
                alt={portfolioCategories[0].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                }}
              />
            </div>
            <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
              {portfolioCategories[0].title}
            </h3>
          </motion.a>

          <motion.a
            href={portfolioCategories[1].url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden cursor-pointer flex flex-col h-full justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm">
              <img
                src={portfolioCategories[1].image}
                alt={portfolioCategories[1].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                }}
              />
            </div>
            <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
              {portfolioCategories[1].title}
            </h3>
          </motion.a>

          {/* Row 2: DASHBOARD (full width) */}
          <motion.a
            href={portfolioCategories[2].url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden md:col-span-2 cursor-pointer flex flex-col h-full justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.01, y: -4 }}
          >
            <div className="relative h-40 md:h-48 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm">
              <img
                src={portfolioCategories[2].image}
                alt={portfolioCategories[2].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                }}
              />
            </div>
            <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
              {portfolioCategories[2].title}
            </h3>
          </motion.a>

          {/* Row 3: ECOMMERCE (large) and ANIMATION + WORDPRESS (stacked) */}
          <motion.a
            href={portfolioCategories[3].url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden md:row-span-2 cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02, y: -4 }}
          >
            <div className="relative flex-1 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm min-h-[120px] max-h-[280px]">
              <img
                src={portfolioCategories[3].image}
                alt={portfolioCategories[3].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                }}
              />
            </div>
            <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
              {portfolioCategories[3].title}
            </h3>
          </motion.a>

          <div className="flex flex-col gap-2 h-full justify-end md:row-span-2">
            <motion.a
              href={portfolioCategories[4].url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="relative h-36 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm">
                <img
                  src={portfolioCategories[4].image}
                  alt={portfolioCategories[4].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                  }}
                />
              </div>
              <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
                {portfolioCategories[4].title}
              </h3>
            </motion.a>

            <motion.a
              href={portfolioCategories[5].url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <div className="relative h-36 rounded-lg overflow-hidden border border-indigo-400/20 bg-white/5 backdrop-blur-sm">
                <img
                  src={portfolioCategories[5].image}
                  alt={portfolioCategories[5].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 40px rgba(99, 102, 241, 0.4), inset 0 0 40px rgba(99, 102, 241, 0.1)',
                  }}
                />
              </div>
              <h3 className="mt-2 text-xs font-light text-white uppercase tracking-wider text-center min-h-[20px] flex items-end justify-center">
                {portfolioCategories[5].title}
              </h3>
            </motion.a>
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            onClick={onViewAll}
            className="group relative px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-light text-sm tracking-wide overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)',
            }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              View all projects
              <span className="text-xl transition-transform group-hover:translate-x-2">→</span>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ filter: 'blur(20px)' }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
