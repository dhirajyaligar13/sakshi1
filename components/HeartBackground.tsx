
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Use React.FC to ensure standard props like 'key' are recognized by the TypeScript compiler
const Heart: React.FC<{ delay: number }> = ({ delay }) => {
  const [initialX, setInitialX] = useState(0);
  
  useEffect(() => {
    setInitialX(Math.random() * 100);
  }, []);

  return (
    <motion.div
      initial={{ y: '110vh', x: `${initialX}vw`, opacity: 0, scale: 0.5 }}
      animate={{ 
        y: '-10vh', 
        opacity: [0, 1, 1, 0],
        rotate: [0, 45, -45, 0],
        scale: [0.5, 1, 1.2, 0.8]
      }}
      transition={{ 
        duration: 10 + Math.random() * 10, 
        repeat: Infinity, 
        delay,
        ease: "linear"
      }}
      className="absolute text-pink-300 pointer-events-none z-0"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
};

export const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    setHearts(Array.from({ length: 25 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-pink-50 to-red-50 -z-10">
      {hearts.map((h) => (
        <Heart key={h} delay={h * 0.5} />
      ))}
    </div>
  );
};
