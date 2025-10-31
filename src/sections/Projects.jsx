import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const projects = [
  {
    title: 'Adapt.ai',
    description: 'AI-powered content generation tool leveraging GPT-4 API for creating marketing copy, blog posts, and social media content.',
    image: '🤖',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    title: 'Smart Plant Dashboard',
    description: 'Beautiful weather application with detailed forecasts, interactive maps, and customizable alerts.',
    image: '🌤️',
    tags: ['Vue.js', 'Weather API', 'Chart.js'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout logging, progress visualization, and goal setting features.',
    image: '💪',
    tags: ['React Native', 'Redux', 'Node.js'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    title: 'Newsletter Summarizer',
    description: 'Mobile-first fitness tracking app with workout logging, progress visualization, and goal setting features.',
    image: '📰',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    title: 'always something...',
    description: 'TBD',
    image: '🤔',
    tags: ['TBD'],
    link: '#',
    github: '#',
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent"
            >
              Featured Projects
            </motion.h2>
            <p className="text-gray-400 text-lg">A showcase of my recent work and side projects</p>
          </div>
        </FadeInSection>

        {/* Featured Projects - Larger Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-pink-500/50 transition-all overflow-hidden h-full"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Project Icon/Image */}
                  <div className="text-6xl mb-6">{project.image}</div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-gray-300 rounded-lg text-sm font-medium hover:border-pink-500/50 hover:text-white transition-all"
                    >
                      <span>GitHub</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>

        {/* Other Projects - Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <FadeInSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all h-full flex flex-col"
              >
                <div className="text-4xl mb-4">{project.image}</div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-slate-800 text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    View →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors"
                  >
                    Code →
                  </a>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
