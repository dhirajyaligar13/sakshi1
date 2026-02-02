
import React from 'react';
import { motion } from 'framer-motion';

interface CelebrationProps {
  message: string;
  onNext: () => void;
}

export const Celebration: React.FC<CelebrationProps> = ({ message, onNext }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center text-center space-y-8 md:space-y-12 z-10 w-full max-w-xl px-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-great-vibes text-red-600 drop-shadow-md leading-tight">
          I Knew You'd Say Yes!
        </h1>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="font-montserrat bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-all"
      >
        See Our Memory 📸
      </motion.button>
    </motion.div>
  );
};
