import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import ProfilePic from "../assets/ProfilePic.jpg";


const roles = ['Software Developer', 'Autodidact', 'Problem Solver', 'Creative Thinker', 'Lifelong Learner', 'Multipotentialite'];

export const Hero: React.FC = () => {
  const typedText = useTypingEffect(roles, 100, 50, 2000);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-48 h-48 mb-8"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 p-1">
              <img
                src={ProfilePic}
                alt="Ankur Profile Pic"
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-600"
            />
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Ankur Gupta
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center"
            >
              <span>Aspiring </span>
              <span className="ml-2 text-primary-600 dark:text-primary-400 font-semibold min-w-[200px] text-left">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A 2025 BCA graduate passionate about building modern, user-centric web and mobile applications.
            Eager to turn ideas into real-world digital solutions through clean code, thoughtful design, and continuous learning.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Ankur2024', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ankur-g-457891260/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:ankurg0824@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.button>

            <motion.button
              onClick={() => window.open('/resume.pdf', '_blank')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};