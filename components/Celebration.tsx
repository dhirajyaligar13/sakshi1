
import React from 'react';
import { motion } from 'framer-motion';

interface CelebrationProps {
  message: string;
}

export const Celebration: React.FC<CelebrationProps> = ({ message }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center space-y-6 z-10"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-8xl"
      >
        💖
      </motion.div>
      
      <h1 className="text-5xl md:text-7xl font-great-vibes text-red-600 drop-shadow-md">
        I Knew You'd Say Yes!
      </h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-pink-200 max-w-md"
      >
        <p className="text-3xl md:text-4xl text-pink-700 font-caveat leading-tight">
          "{message}"
        </p>
      </motion.div>

      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.span
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1 + Math.random(),
              delay: i * 0.2
            }}
            className="text-3xl"
          >
            🌸
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
