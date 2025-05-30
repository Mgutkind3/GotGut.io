import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-24">
      <FadeInSection>
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I’m a creative developer passionate about building beautiful, interactive experiences on the web.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
}
