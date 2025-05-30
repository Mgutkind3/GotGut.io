import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800 text-white flex flex-col items-center justify-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6"
      >
        Michael Gutkind
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl text-center max-w-xl"
      >
        Welcome to my personal website — built with React, styled with Tailwind CSS, and animated with Framer Motion.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-black font-semibold rounded-xl transition"
        >
          Let’s Build Something
        </motion.button>
      </motion.div>
    </section>
  );
}
