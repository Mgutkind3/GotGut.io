import { motion } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white px-6 py-24 flex flex-col justify-center items-center">
        <FadeInSection>
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">Want to work together or chat? Reach out below.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white h-32"></textarea>
          <button className="px-6 py-3 bg-indigo-500 rounded text-white font-semibold hover:bg-indigo-600 transition">
            Send Message
          </button>
        </form>
        </FadeInSection>
    </section>
  );
}
