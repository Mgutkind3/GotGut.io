import { useEffect, useState } from 'react';

export default function Navigation() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 flex justify-between items-center backdrop-blur bg-black/30 text-white font-semibold">
      <div className="space-x-6">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <button key={section} onClick={() => scrollTo(section)} className="hover:underline capitalize">
            {section}
          </button>
        ))}
      </div>
      <button
        onClick={() => setDark((d) => !d)}
        className="text-xs px-3 py-1 bg-white text-black rounded hover:bg-gray-200 transition"
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
