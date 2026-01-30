import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const getEnvVars = () => {
    const serviceId = (process.env.REACT_APP_EMAILJS_SERVICE_ID || '').trim();
    const templateId = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '').trim();
    const publicKey = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '').trim();

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

      toast.error(
        missing
          ? `Email service is not configured (${missing}). Check your .env and restart.`
          : 'Email service is not configured yet. Please try again later.'
      );
      return;
    }

    setIsSending(true);
    try {
      await toast.promise(
        emailjs.send(
          serviceId,
          templateId,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
          publicKey
        ),
        {
          loading: 'Sending...',
          success: 'Successfully sent!',
          error: 'Something went wrong. Please try again in a moment.',
        }
      );

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('EmailJS error:', error);
      }
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/tharshika-loganathan-735a992a4' },
    { name: 'Behance', icon: '✨', url: 'https://www.behance.net/logantharshi' },
    { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/snapshi_stories' },
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'logantharshi0407@gmail.com', href: 'mailto:logantharshi0407@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+94 764284850', href: 'tel:+94764284850' },
    { icon: '📍', label: 'Location', value: 'Kalleriyanseema Karaveddy west,\nKaraveddy, Jaffna,\nSrilanka', href: null },
  ];

  return (
    <section
      id="contact"
      ref={inViewRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 50% at 10% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 70% 60% at 90% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 50% at 10% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Centered */}
        <motion.div
          className="text-center mb-16"
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
            Get In Touch
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="text-base text-white/60 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind? I'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: 'rgba(99, 102, 241, 0.5)',
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl">{info.icon}</span>
                  <div className="flex-1">
                    <p className="text-indigo-300/60 text-xs uppercase tracking-wider mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-indigo-300 transition-colors font-light text-sm"
                        style={{
                          textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-light text-sm whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              className="p-6 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <h3
                className="text-sm font-light text-white mb-4 uppercase tracking-wider"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                }}
              >
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-indigo-500/10 border border-indigo-400/30 rounded-lg group"
                    whileHover={{
                      scale: 1.1,
                      borderColor: 'rgba(99, 102, 241, 0.6)',
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                    }}
                    style={{
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="p-8 bg-white/5 border border-indigo-400/20 rounded-lg backdrop-blur-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-indigo-300/80 font-light mb-3 text-sm uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border-2 border-indigo-400/20 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all font-light text-sm rounded-lg"
                    placeholder="Your Name"
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-indigo-300/80 font-light mb-3 text-sm uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border-2 border-indigo-400/20 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all font-light text-sm rounded-lg"
                    placeholder="your.email@example.com"
                    whileFocus={{
                      boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-indigo-300/80 font-light mb-3 text-sm uppercase tracking-wider"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  className="w-full px-5 py-4 bg-white/5 border-2 border-indigo-400/20 text-white placeholder-white/30 focus:outline-none focus:border-indigo-400/50 focus:bg-white/10 transition-all resize-none font-light text-sm leading-relaxed rounded-lg"
                  placeholder="Tell me about your project..."
                  whileFocus={{
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-light text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSending}
                style={{
                  boxShadow: '0 0 30px rgba(99, 102, 241, 0.4), 0 0 60px rgba(168, 85, 247, 0.3)',
                }}
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                  {!isSending && <span className="text-xl transition-transform">→</span>}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ filter: 'blur(20px)' }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  );
};

export default Contact;
