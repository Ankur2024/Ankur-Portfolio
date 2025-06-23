import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, Award, Briefcase, GraduationCap, Mail } from 'lucide-react';
import AnkurResume from "../assets/Ankur-Resume-W.pdf"

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
  },
  {
    title: 'Web Development Freelancer',
    company: 'Self-Employed',
    period: 'Jan 2023 - Present',
    description: 'Built custom websites for small businesses and startups. Managed projects from conception to deployment.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Netlify'],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Jagan Institute Of Management Studies',
    period: '2022 - 2025',
    gpa: '8.7/10',
    coursework: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Software Engineering'],
  },
  {
    degree: 'MERN Stack Industrial Training Program',
    institution: 'Ainwik Infotech',
    period: '2023',
    description: '150+ hours of hands-on coding experience',
  },
];

const achievements = [
  "Smart India Hackathon (SIH) 2023 – Participated in the national-level hackathon hosted by my college under the official SIH framework.",
  "Technowhiz 2023 – Participated in JIMS' annual college-level tech symposium. Presented on AI-based Conversational Systems with Sandeep Jain (CEO, GeeksforGeeks) as chief guest.",
  "MERN Stack Summer Training – Completed hands-on training at JIMS, built an e-commerce app with an insight dashboard and seller-friendly CSV support.",
];


export const Resume: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = AnkurResume; 
    link.download = 'Ankur_Gupta_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };
  

  const handlePreview = () => {
    window.open(AnkurResume, '_blank');
  };

  return (
    <section id="resume" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            My professional journey, education, and achievements in web development and computer science.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>

            <motion.button
              onClick={handlePreview}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors flex items-center justify-center space-x-2"
            >
              <Eye size={20} />
              <span>Preview Resume</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Experience */}
            {/* <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg">
                  <Award className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative pl-8 border-l-2 border-secondary-200 dark:border-secondary-800"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary-600 rounded-full"></div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          {edu.period}
                        </span>
                      </div>

                      {edu.gpa && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          <span className="font-semibold">GPA:</span> {edu.gpa}
                        </p>
                      )}

                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {edu.description}
                        </p>
                      )}

                      {edu.coursework && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Relevant Coursework:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl border border-primary-100 dark:border-primary-800"
            >
              <div className="mb-6">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full w-fit mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interested in my background? Let's discuss how I can contribute to your team.
                </p>
              </div>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};