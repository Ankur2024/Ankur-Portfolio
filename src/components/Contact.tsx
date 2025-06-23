import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Initialize EmailJS with your public key
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'John Smith',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );      

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.',
      });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: 'idle', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ankurg0824@gmail.com',
      href: 'mailto:ankurg0824@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-9310535213',
      href: 'tel:9310535213',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Ankur2024',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ankur-g-457891260/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://x.com/AnkurG24',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about web development. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Message */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center space-x-2 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                      : status.type === 'error'
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                      : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                  }`}
                >
                  {status.type === 'success' && <CheckCircle size={20} />}
                  {status.type === 'error' && <AlertCircle size={20} />}
                  {status.type === 'loading' && <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status.type === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <a
                        href={info.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 ${social.color} transition-colors`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mt-6 text-sm">
                Let's connect on social media and stay in touch! I regularly share 
                updates about my projects and insights about web development.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-xl border border-primary-100 dark:border-primary-800"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Current Availability
              </h4>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 dark:text-green-300 font-semibold">
                  Available for new opportunities
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                I'm currently open to internship opportunities, freelance projects, 
                and full-time positions starting Summer 2024. I typically respond 
                to messages within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};