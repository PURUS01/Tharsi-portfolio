import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const getEnvVars = () => {
    const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID || '').trim();
    const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '').trim();
    const publicKey = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '').trim();

    if (process.env.NODE_ENV === 'development') {
      // Helpful debug in dev; remove or silence in prod builds.
      // Only logs whether values are present, not their content.
      // eslint-disable-next-line no-console
      console.debug('EmailJS env present:', {
        serviceId: Boolean(serviceId),
        templateId: Boolean(templateId),
        publicKey: Boolean(publicKey),
      });
    }

    return { serviceId, templateId, publicKey };
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { serviceId, templateId, publicKey } = getEnvVars();

    if (!serviceId || !templateId || !publicKey) {
      const missing = [
        !serviceId && 'REACT_APP_EMAILJS_SERVICE_ID',
        !templateId && 'REACT_APP_EMAILJS_TEMPLATE_ID',
        !publicKey && 'REACT_APP_EMAILJS_PUBLIC_KEY',
      ]
        .filter(Boolean)
        .join(', ');

      setStatus({
        type: 'error',
        message: missing
          ? `Email service is not configured (${missing}). Check your .env and restart.`
          : 'Email service is not configured yet. Please try again later.',
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! Your message has been sent.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again in a moment.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Dribbble', icon: '🎨', url: '#' },
    { name: 'Behance', icon: '✨', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
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
      y: 80,
      scale: 0.9,
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

  return (
    <section
      id="contact"
      ref={setRefs}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background Pattern with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
      />
      
      {/* Animated Background Elements */}
      <AnimatedBackground variant="contact" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={titleVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center mb-16">
            <motion.span
              className="inline-block text-xs font-extralight text-white/40 uppercase tracking-[0.3em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Get In Touch
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-[1.1] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              Let's Work
              <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent font-extralight">
                Together
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/50 max-w-3xl mx-auto font-extralight tracking-wide leading-[1.6]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Have a project in mind? I'd love to hear from you. Send me a
              message and I'll respond as soon as possible.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="sticky top-24">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 font-extralight mb-3 text-sm tracking-wide uppercase"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 focus:shadow-lg focus:shadow-white/10 transition-all font-light text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 font-extralight mb-3 text-sm tracking-wide uppercase"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 focus:shadow-lg focus:shadow-white/10 transition-all font-light text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 font-extralight mb-3 text-sm tracking-wide uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/10 focus:shadow-lg focus:shadow-white/10 transition-all resize-none font-light text-base leading-relaxed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black font-light rounded-xl relative overflow-hidden group shadow-xl shadow-white/25 text-base tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 30px 60px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)',
                    y: -3,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  disabled={isSending}
                >
                  <motion.span
                    className="relative z-20 flex items-center justify-center gap-3"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                    <span className="text-2xl">→</span>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-black flex items-center justify-center rounded-xl"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <motion.span
                      className="text-white flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      Send Message
                      <span className="text-2xl">→</span>
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10 rounded-xl"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.button>

                {status.type !== 'idle' && (
                  <p
                    className={`text-sm ${
                      status.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extralight text-white mb-6 tracking-wide">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a
                        href="mailto:hello@example.com"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-white hover:text-white/80 transition-colors"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Location</p>
                      <p className="text-white">New York, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extralight text-white mb-6 tracking-wide">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-3 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md relative overflow-hidden group"
                      whileHover={{ 
                        scale: 1.12,
                        y: -10,
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                        boxShadow: '0 15px 40px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                      />
                      <motion.span
                        className="text-2xl relative z-10"
                        whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        {social.icon}
                      </motion.span>
                      <motion.span
                        className="text-white font-extralight text-base tracking-wide relative z-10"
                        whileHover={{ x: 8, letterSpacing: '0.05em' }}
                        transition={{ duration: 0.3 }}
                      >
                        {social.name}
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

