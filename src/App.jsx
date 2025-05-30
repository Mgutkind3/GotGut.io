import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import CursorHighlight from './components/CursorHighlight';

export default function App() {
  return (
    <div className="relative font-sans">
      <CursorHighlight />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
