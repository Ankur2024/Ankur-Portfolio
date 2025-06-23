import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'MongoDB', icon: '🍃', level: 85 },
      { name: 'Express.js', icon: '🚀', level: 80 },
      { name: 'React', icon: '⚛️', level: 90 },
      { name: 'Node.js', icon: '🟢', level: 85 },
      { name: 'TypeScript', icon: '📘', level: 85 },
      { name: 'JavaScript', icon: '🟨', level: 95 },
    ]
  },
  {
    title: 'Android Development',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Kotlin', icon: '🎯', level: 85 },
      { name: 'Jetpack Compose', icon: '🎨', level: 80 },
      { name: 'Firebase', icon: '🔥', level: 85 },
      { name: 'Coroutines', icon: '⚡', level: 75 },
      { name: 'Flow', icon: '🌊', level: 70 },
      { name: 'Dagger-Hilt', icon: '💉', level: 70 },
      { name: 'Retrofit', icon: '🔄', level: 80 },
      { name: 'Lifecycle', icon: '🔄', level: 75 },
    ]
  },
  {
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', icon: '📝', level: 85 },
      { name: 'Docker', icon: '🐳', level: 65 },
      { name: 'Android Studio', icon: '📱', level: 80 },
      { name: 'VS Code', icon: '💻', level: 90 },
    ]
  }
];

const SkillCard: React.FC<{ skill: any; index: number; inView: boolean; categoryColor: string }> = ({ 
  skill, 
  index, 
  inView, 
  categoryColor 
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {/* Background Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
    
    <div className="relative z-10">
      {/* Icon */}
      <div className="text-3xl mb-3 text-center">
        {skill.icon}
      </div>
      
      {/* Skill Name */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-3">
        {skill.name}
      </h3>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">Proficiency</span>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${categoryColor} rounded-full`}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across web and mobile development, 
            showcasing proficiency in modern technologies and frameworks.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center">
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.1 }}
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 + 0.2 }}
                  className={`h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full max-w-xs`}
                />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    inView={inView}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring: <span className="font-semibold text-primary-600 dark:text-primary-400">
              GraphQL, Machine Learning with Python, and Cloud Architecture
              </span>. I believe in staying current with industry trends and 
              best practices to deliver cutting-edge solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { number: '15+', label: 'Technologies Mastered' },
                { number: '50+', label: 'Projects Completed' },
                { number: '2+', label: 'Years of Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};