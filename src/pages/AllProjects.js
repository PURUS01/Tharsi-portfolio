import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
// Figma Projects - WEB DESIGN
import CameraWebUIImg from '../assets/projects/figma/Camera Web UI/cameraweb.avif';
import ClothingBrandImg from '../assets/projects/figma/Clothing Brand/clothingweb.jpg';
import LuxyArchitectureImg from '../assets/projects/figma/Luxy Architecture/luxuryarcweb.webp';
import MarvelImg from '../assets/projects/figma/Marvel/marvel.jpg';
import CarWashImg from '../assets/projects/figma/The Best Care Car Wash/car wash website.jpg';
import ParcelServiceImg from '../assets/projects/figma/Parcel Service/parcel service.jpg';
// Figma Projects - MOBILE
import FarmMobileUIImg from '../assets/projects/figma/Farm Mobile UI/farmmobile.jpg';
import CarMobileUIImg from '../assets/projects/figma/Car Mobile UI/carmobile.jpeg';
// Figma Projects - ECOMMERCE
import EcoEcommerceImg from '../assets/projects/figma/Eco E-Commerce/eco e commerce.jpg';
// Figma Projects - ANIMATION
import CharacterAnimationImg from '../assets/projects/figma/Character Animation/charactor animation.jpg';
import CoffeeAnimationImg from '../assets/projects/figma/Coffee Animation/coffee.jpeg';
import CatImg from '../assets/projects/wordpress/CAT/cat.png';
import MrConcreteImg from '../assets/projects/wordpress/Mr.Concrete/mr.concreate.png';
import MylImg from '../assets/projects/wordpress/MYL/MYL.png';
import SahoImg from '../assets/projects/wordpress/Saho/SAHO.png';
import SaveALifeImg from '../assets/projects/wordpress/Save A Life Ngo/save a life.png';
import SkyAcademyImg from '../assets/projects/wordpress/Sky Academy/sky academy.png';
import SuntravelImg from '../assets/projects/wordpress/Suntravel/suntravek.png';

const AllProjects = ({ onBack }) => {
  const figmaProjects = [
    // WEB DESIGN Projects
    {
      id: 'fig-1',
      title: 'Camera Web UI',
      category: 'Figma',
      image: CameraWebUIImg,
      description: 'Modern camera web interface with intuitive controls and sleek design.',
      tags: ['Web Design', 'UI/UX', 'Product'],
      url: 'https://www.behance.net/gallery/243186659/Camera-Web-UI',
    },
    {
      id: 'fig-2',
      title: 'Clothing Brand',
      category: 'Figma',
      image: ClothingBrandImg,
      description: 'Fashion-forward clothing brand website with elegant product showcase.',
      tags: ['Brand', 'E-Commerce', 'Fashion'],
      url: 'https://www.behance.net/gallery/243052229/Clothing-Brand',
    },
    {
      id: 'fig-3',
      title: 'Luxy Architecture',
      category: 'Figma',
      image: LuxyArchitectureImg,
      description: 'Luxury architecture portfolio with stunning visual presentations.',
      tags: ['Architecture', 'Portfolio', 'Luxury'],
      url: 'https://www.behance.net/gallery/242984587/Luxy-Architecture-Web-UI',
    },
    {
      id: 'fig-4',
      title: 'Marvel',
      category: 'Figma',
      image: MarvelImg,
      description: 'Bold hero visuals and character-forward layout for a fandom hub.',
      tags: ['Media', 'Landing', 'Cinematic'],
      url: 'https://www.behance.net/gallery/238791071/Marvel',
    },
    {
      id: 'fig-5',
      title: 'Car Wash',
      category: 'Figma',
      image: CarWashImg,
      description: 'Service site with package highlights, testimonials, and booking CTA.',
      tags: ['Services', 'Local', 'Booking'],
      url: 'https://www.behance.net/gallery/240376185/Car-Wash',
    },
    {
      id: 'fig-6',
      title: 'Parcel Service',
      category: 'Figma',
      image: ParcelServiceImg,
      description: 'Logistics UX with pricing breakdowns, tracking, and CTA clarity.',
      tags: ['Product', 'Logistics', 'Conversion'],
      url: 'https://www.behance.net/gallery/240376249/Parcel-Service',
    },
    // MOBILE Projects
    {
      id: 'fig-7',
      title: 'Farm Mobile UI',
      category: 'Figma',
      image: FarmMobileUIImg,
      description: 'Agricultural mobile app interface with clean, nature-inspired design.',
      tags: ['Mobile', 'Agriculture', 'App'],
      url: 'https://www.behance.net/gallery/242750645/Farm-Mobile-UI',
    },
    {
      id: 'fig-8',
      title: 'Car Mobile UI',
      category: 'Figma',
      image: CarMobileUIImg,
      description: 'Automotive mobile interface with modern design and user-friendly navigation.',
      tags: ['Mobile', 'Automotive', 'App'],
      url: 'https://www.behance.net/gallery/242705001/Mobile-UI',
    },
    // ECOMMERCE Projects
    {
      id: 'fig-9',
      title: 'Eco E-Commerce',
      category: 'Figma',
      image: EcoEcommerceImg,
      description: 'Nature-inspired shopfront with modular product tiles and soft neutrals.',
      tags: ['E-Commerce', 'UI/UX', 'Sustainable'],
      url: 'https://www.behance.net/gallery/240376127/Eco-e-commerce',
    },
    // ANIMATION Projects
    {
      id: 'fig-10',
      title: 'Character Animation',
      category: 'Figma',
      image: CharacterAnimationImg,
      description: 'Playful animation landing with layered gradients and bold typography.',
      tags: ['Illustration', 'Motion', 'Landing'],
      url: 'https://www.behance.net/gallery/239176941/Character-Animation-by-using-FIGMA',
    },
    {
      id: 'fig-11',
      title: 'Coffee Animation',
      category: 'Figma',
      image: CoffeeAnimationImg,
      description: 'Coffeehouse brand site with story-driven sections and rich imagery.',
      tags: ['Brand', 'Storytelling', 'Animation'],
      url: 'https://www.behance.net/gallery/238783821/Java-junction',
    },
  ];

  const wordpressProjects = [
    {
      id: 'wp-1',
      title: 'CAT',
      category: 'WordPress',
      image: CatImg,
      description: 'Corporate WordPress build with crisp hero and service highlights.',
      tags: ['Corporate', 'WordPress', 'Responsive'],
      url: 'https://www.behance.net/gallery/228230907/CAT',
    },
    {
      id: 'wp-2',
      title: 'Mr.Concrete',
      category: 'WordPress',
      image: MrConcreteImg,
      description: 'Industrial site with portfolio grid and strong service CTAs.',
      tags: ['Construction', 'Portfolio', 'WordPress'],
      url: 'https://www.behance.net/gallery/238409223/MrConcrete',
    },
    {
      id: 'wp-3',
      title: 'MYL',
      category: 'WordPress',
      image: MylImg,
      description: 'Brand-forward layout with product storytelling and clean sections.',
      tags: ['Brand', 'Marketing', 'WordPress'],
      url: 'https://www.behance.net/gallery/238409415/MYL',
    },
    {
      id: 'wp-4',
      title: 'Saho',
      category: 'WordPress',
      image: SahoImg,
      description: 'Minimalist presentation for a modern product line.',
      tags: ['Minimal', 'Product', 'WordPress'],
      url: 'https://www.behance.net/gallery/238410769/Saho',
    },
    {
      id: 'wp-5',
      title: 'Save A Life NGO',
      category: 'WordPress',
      image: SaveALifeImg,
      description: 'Impact-driven NGO site with donation and impact storytelling.',
      tags: ['NGO', 'Donations', 'Story'],
      url: 'https://www.behance.net/gallery/228230781/Save-a-life-ngo',
    },
    {
      id: 'wp-6',
      title: 'Sky Academy',
      category: 'WordPress',
      image: SkyAcademyImg,
      description: 'Education site with course grid, instructor highlights, and apply CTA.',
      tags: ['Education', 'Courses', 'WordPress'],
      url: 'https://www.behance.net/gallery/228230443/SKY-academy',
    },
    {
      id: 'wp-7',
      title: 'Suntravel',
      category: 'WordPress',
      image: SuntravelImg,
      description: 'Travel agency experience with destinations, packages, and inquiry flow.',
      tags: ['Travel', 'Agency', 'WordPress'],
      url: 'https://www.behance.net/gallery/238410803/suntravel',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const renderGrid = (items) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: false, amount: 0.01, margin: '-200px 0px' }}
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {items.map((project) => (
        <motion.a
          key={project.id}
          variants={cardVariants}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl w-full"
          initial={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
          whileHover={{
            y: -18,
            scale: 1.02,
            borderColor: 'rgba(255, 255, 255, 0.4)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
        >
          <div className="relative h-60 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            <motion.div
              className="absolute top-4 right-4"
              whileHover={{ scale: 1.08 }}
            >
              <span className="px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm border border-white/20">
                {project.category}
              </span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: '-110%' }}
              whileHover={{ x: '110%' }}
              transition={{ duration: 0.9 }}
            />
          </div>

          <div className="p-6 sm:p-8 relative z-10">
            <div className="flex items-start justify-between mb-3">
              <motion.h3
                className="text-lg sm:text-xl font-extralight text-white tracking-wide flex-1"
                whileHover={{ x: 6, letterSpacing: '0.02em' }}
                transition={{ duration: 0.25 }}
              >
                {project.title}
              </motion.h3>
              <motion.div
                className="ml-4 text-white/30 group-hover:text-white/90 transition-all text-xl"
                whileHover={{ rotate: 40, scale: 1.25 }}
                transition={{ duration: 0.25 }}
              >
                →
              </motion.div>
            </div>
            <p className="text-white/50 mb-6 text-sm sm:text-base leading-[1.7] font-extralight tracking-wide">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-light bg-white/10 text-white/80 rounded-full border border-white/10 tracking-wide"
                  initial={{
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    y: -1,
                  }}
                  transition={{ duration: 0.18 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <AnimatedBackground variant="projects" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <p className="text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white leading-tight tracking-[-0.02em]">
              All Projects
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extralight">
                Figma & WordPress
              </span>
            </h1>
            <p className="text-white/55 mt-4 max-w-2xl font-extralight tracking-wide text-sm sm:text-base">
              Every design and build collected in one place. Explore dedicated
              Figma prototypes and WordPress deliveries without losing the
              crafted aesthetic from the main experience.
            </p>
          </motion.div>

          {onBack && (
            <motion.button
              onClick={onBack}
              className="self-start px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white font-light tracking-wide backdrop-blur-md hover:border-white/50 hover:bg-white/15 transition-all shadow-lg shadow-black/20"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              ← Back to featured
            </motion.button>
          )}
        </div>

        <div className="space-y-20">
          <div>
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <p className="text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-2">
                  Design
                </p>
                <h2 className="text-2xl sm:text-3xl font-extralight text-white tracking-[-0.01em]">
                  Figma Projects
                </h2>
              </div>
              <span className="px-4 py-2 text-xs font-medium bg-white/10 text-white rounded-full border border-white/10">
                {figmaProjects.length} projects
              </span>
            </motion.div>
            {renderGrid(figmaProjects)}
          </div>

          <div>
            <motion.div
              variants={sectionTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <p className="text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-2">
                  Build
                </p>
                <h2 className="text-2xl sm:text-3xl font-extralight text-white tracking-[-0.01em]">
                  WordPress Projects
                </h2>
              </div>
              <span className="px-4 py-2 text-xs font-medium bg-white/10 text-white rounded-full border border-white/10">
                {wordpressProjects.length} projects
              </span>
            </motion.div>
            {renderGrid(wordpressProjects)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;

