import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <motion.p
            className="text-white/50 text-sm font-extralight tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            © {currentYear} <span className="text-white/70 font-light">tharc</span>. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="#home"
              className="text-white/50 hover:text-white/80 transition-all text-sm font-extralight tracking-wide relative group"
              whileHover={{ letterSpacing: '0.05em' }}
            >
              Privacy Policy
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all group-hover:w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#home"
              className="text-white/50 hover:text-white/80 transition-all text-sm font-extralight tracking-wide relative group"
              whileHover={{ letterSpacing: '0.05em' }}
            >
              Terms of Service
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all group-hover:w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

