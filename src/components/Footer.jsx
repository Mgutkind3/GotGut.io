import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Mgutkind3', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-gutkind-b98354105', icon: '💼' },
    { name: 'Printables', url: 'https://www.printables.com/@GotGut_1510928', icon: '🖨️' },
    { name: 'Instagram', url: 'https://www.instagram.com/gut_9', icon: '📸' },
    { name: 'Email', url: 'mailto:mikegutkind@gmail.com', icon: '📧' }
  ];

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-gray-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-default"
            >
              Michael Gutkind
            </motion.h3>
            <p className="text-sm leading-relaxed mb-4">
              Building beautiful and functional web experiences. 
              Always learning, always creating.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl hover:text-white transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-white hover:translate-x-1 transition-all inline-block text-sm"
                  >
                    → {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a 
                  href="mailto:mikegutkind@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  mikegutkind@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {currentYear} Michael Gutkind. All rights reserved.
          </p>
          <p className="text-center">
            Built with{' '}
            <span className="text-red-500">❤️</span>
            {' '}using React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

