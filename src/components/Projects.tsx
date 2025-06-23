import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, AlertCircle } from 'lucide-react';

const webProjects = [
  {
    id: 1,
    title: 'Atom: Collaborative Platform',
    description: 'A collaborative chatting platform featuring real-time code editing, event management, and multi-user interaction, built for seamless academic and developer collaboration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Monaco Editor', 'Context Api'],
    github: 'https://github.com/Ankur2024/Atom',
    demo: null,
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Language Connect Chat App',
    description: 'A MERN-based chat app enabling language learners to connect via real-time messaging, video/audio calls, and friend requests to practice foreign languages with native speakers.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'WebRTC', 'Zustand', 'Tanstack Query', 'Stream Api'],
    github: 'https://github.com/Ankur2024/ChatApp-In-MERN',
    demo: 'https://chatapp-in-mern.onrender.com/login',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Online Code Editor',
    description: 'A web-based multi-language code editor using Monaco Editor and RapidAPI’s Judge0 for secure compilation and execution. Includes shortcut commands and sleek UI.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Monaco Editor', 'RapidAPI', 'Context Api'],
    github: 'https://github.com/Ankur2024/Online-Code-Editor',
    demo: null,
    status: 'Completed',
  },
];


const androidProjects = [
  {
    id: 4,
    title: 'Pokedex',
    description: 'A modern Pokedex app built with Kotlin, leveraging Coroutines, Flow, and Hilt for clean architecture and reactive data handling.',
    image: 'https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coroutines','flow', 'Dagger-Hilt'],
    github: 'https://github.com/Ankur2024/Pokedex',
    demo: null, // No live demo available
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A mobile recipe application with ingredient-based search, meal planning, and nutritional information.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Flow', 'Lifecycle', 'Clean Architecture'],
    github: 'https://github.com/Ankur2024/Recipe-App',
    demo: null, // No live demo available
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'A modern weather application with location-based forecasts and interactive weather maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'Coroutines'],
    github: 'https://github.com/Ankur2024/WeatherApp',
    demo: null, // No live demo available
    status: 'In Progress',
  },
];

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      className="fixed bottom-4 right-4 z-50 bg-orange-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-sm"
    >
      <AlertCircle size={20} />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-orange-200 transition-colors"
      >
        ×
      </button>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: any;
  index: number;
  inView: boolean;
  onShowToast: (message: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView, onShowToast }) => {
  const handleDemoClick = (e: React.MouseEvent) => {
    if (!project.demo) {
      e.preventDefault();
      onShowToast("This app is not deployed yet.");
    } else {
      window.open(project.demo, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${project.status === 'Completed'
            ? 'bg-accent-500 text-white'
            : 'bg-yellow-500 text-white'
            }`}>
            <Calendar size={12} />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Hover Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors"
          >
            <Github size={16} />
          </motion.a>
          <motion.button
            onClick={handleDemoClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors ${!project.demo ? 'cursor-pointer' : ''
              }`}
          >
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
              </a>
            ) : (
              <ExternalLink size={16} />
            )}
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
          >
            <Github size={16} />
            <span>Code</span>
          </motion.a>

          <motion.button
            onClick={handleDemoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeTab, setActiveTab] = useState<'web' | 'android'>('web');
  const [toast, setToast] = useState({ isVisible: false, message: '' });

  const showToast = (message: string) => {
    setToast({ isVisible: true, message });
  };

  const hideToast = () => {
    setToast({ isVisible: false, message: '' });
  };

  const currentProjects = activeTab === 'web' ? webProjects : androidProjects;

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work across web and mobile development, demonstrating my skills
            in full-stack development, mobile app creation, and modern technologies.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg flex">
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${activeTab === 'web'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('android')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${activeTab === 'android'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
            >
              Android Development
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              onShowToast={showToast}
            />
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ankur2024?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </section>
  );
};