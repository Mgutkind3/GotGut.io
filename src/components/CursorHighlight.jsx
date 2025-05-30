import { useEffect, useState } from 'react';

export default function CursorHighlight() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 75}px, ${position.y - 75}px)`,
      }}
    >
      <div className="w-36 h-36 rounded-full bg-indigo-500/10 blur-2xl" />
    </div>
  );
}
