import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const projects = [
  { title: 'Project One', desc: 'A cool thing I built.', link: '#' },
  { title: 'Project Two', desc: 'Another cool build.', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeInSection key={i} delay={i * 0.2}>
                <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.desc}</p>
                <a href={project.link} className="text-indigo-600 hover:underline mt-2 inline-block">View Project</a>
                </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
