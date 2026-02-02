
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Heart: React.FC<{ delay: number }> = ({ delay }) => {
  const [props, setProps] = useState({ x: 0, size: 24, opacity: 0.3 });
  
  useEffect(() => {
    setProps({
      x: Math.random() * 100,
      size: 10 + Math.random() * 30,
      opacity: 0.1 + Math.random() * 0.3
    });
  }, []);

  return (
    <motion.div
      initial={{ y: '110vh', x: `${props.x}vw`, opacity: 0, scale: 0.5 }}
      animate={{ 
        y: '-20vh', 
        opacity: [0, props.opacity, props.opacity, 0],
        rotate: [0, 90, -90, 0],
        scale: [0.5, 1, 1.1, 0.7]
      }}
      transition={{ 
        duration: 20 + Math.random() * 20, // Super slow drift
        repeat: Infinity, 
        delay,
        ease: "linear"
      }}
      style={{ width: props.size, height: props.size }}
      className="absolute text-pink-300/50 pointer-events-none z-0"
    >
      <svg
        width="100%"
        height="100%"
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
    // Fill the screen with enough hearts for a continuous effect
    setHearts(Array.from({ length: 25 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-rose-100/20 -z-10">
      {hearts.map((h) => (
        <Heart key={h} delay={h * 2} />
      ))}
    </div>
  );
};
