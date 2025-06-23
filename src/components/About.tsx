import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const technologies = [
  { name: 'React', level: 85, color: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-500 to-orange-500' },
  { name: 'TypeScript', level: 75, color: 'from-blue-600 to-blue-800' },
  { name: 'Node.js', level: 70, color: 'from-green-500 to-green-700' },
  { name: 'Kotlin', level: 80, color: 'from-blue-400 to-yellow-400' },
  { name: 'CSS/Tailwind', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'MongoDB', level: 80, color: 'from-green-400 to-emerald-600' },
  { name: 'Jetpack Compose', level: 70, color: 'from-indigo-400 to-indigo-600' },
  { name: 'WebSocket', level: 75, color: 'from-teal-500 to-blue-500' },
  { name: 'WebRTC', level: 65, color: 'from-red-400 to-orange-500' },
];


const interests = [
  { icon: Code, title: 'Frontend Development', description: 'Creating beautiful and intuitive user interfaces' },
  { icon: Database, title: 'Backend Development', description: 'Building robust and scalable server-side applications' },
  { icon: Globe, title: 'Full-Stack Projects', description: 'End-to-end web application development' },
  { icon: Smartphone, title: 'Android Development', description: 'Building modern and responsive Android applications using Kotlin and Jetpack Compose' },
];


export const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Application student with a strong foundation in web development
                and a keen eye for design. My journey in programming started with curiosity about how
                websites work, and it has evolved into a genuine passion for creating digital solutions
                that make a difference.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing my Bachelor's degree in Computer Application, I spend my time building
                projects, learning new technologies. I believe in writing clean, maintainable code and creating user experiences that are
                both beautiful and functional.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding experimenting with new frameworks, or working on personal projects that challenge me to grow as a developer.
              </p>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <interest.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {interest.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>

              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {tech.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${tech.level}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${tech.color} rounded-full shadow-sm`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {[
                { number: '15+', label: 'Projects Completed' },
                { number: '3+', label: 'Years Learning' },
                { number: '10+', label: 'Technologies' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-2xl font-bold text-primary-600 dark:text-primary-400"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};