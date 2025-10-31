import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const interests = [
  { icon: '💻', title: 'Clean Code', description: 'Writing maintainable, efficient code' },
  { icon: '🎨', title: 'Design', description: 'Creating beautiful user experiences' },
  { icon: '🚀', title: 'Innovation', description: 'Exploring cutting-edge technologies' },
  { icon: '📚', title: 'Learning', description: 'Continuous growth and improvement' },
  { icon: '🤝', title: 'Collaboration', description: 'Working with talented teams' },
  { icon: '⚡', title: 'Performance', description: 'Building fast, scalable solutions' }
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            <p className="text-gray-400 text-lg">Get to know more about who I am and what drives me</p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Introduction */}
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Hi, I'm Michael! 👋</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate software engineer with a love for creating elegant solutions to complex problems. 
                    My journey in tech started with curiosity and has evolved into a career focused on building 
                    impactful digital experiences.
                  </p>
                  <p>
                    With expertise in full-stack development, I specialize in modern web technologies and have a 
                    keen eye for design. I believe in writing clean, maintainable code and creating user interfaces 
                    that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I'm always excited to take on 
                    new challenges and collaborate on innovative projects.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right Column - Quick Facts */}
          <FadeInSection delay={0.3}>
            <div className="space-y-6">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-400">Based in Bedminster, NJ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">💼</span>
                    <div>
                      <h4 className="font-semibold text-white">Current Role</h4>
                      <p className="text-gray-400">Senior Software Engineer, Capital One</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-white">Education</h4>
                      <p className="text-gray-400">B.A. in Computer Science</p>
                      <p className="text-gray-400 text-sm">Minors: Information Systems, Business Management</p>
                      <p className="text-cyan-400 text-sm">Washington College</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">☕</span>
                    <div>
                      <h4 className="font-semibold text-white">Fuel</h4>
                      <p className="text-gray-400">Coffee & Curiosity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* What Drives Me */}
        <FadeInSection delay={0.4}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">What Drives Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all text-center"
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{interest.title}</h4>
                  <p className="text-gray-400 text-sm">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Call to Action */}
        <FadeInSection delay={0.5}>
          <div className="text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Work Together</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
            >
              Get In Touch
            </motion.button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
