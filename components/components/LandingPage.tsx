
import React from 'react';
import { motion } from 'framer-motion';

interface LandingPageProps {
  onStart: () => void;
}

const FloatingHeart: React.FC<{ size: number; x: string; y: string; delay: number; duration: number }> = ({ size, x, y, delay, duration }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0.4, 0],
      scale: [0.5, 1.2, 1.2, 0.5],
      y: [0, -100],
      x: [0, Math.random() * 40 - 20]
    }}
    transition={{ 
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    style={{ 
      position: 'absolute',
      left: x,
      top: y,
      width: size,
      height: size,
      pointerEvents: 'none',
      color: '#fb7185'
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </motion.div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  // Define some random floating hearts for the landing background
  const localHearts = [
    { size: 40, x: '10%', y: '80%', delay: 0, duration: 6 },
    { size: 25, x: '20%', y: '75%', delay: 2, duration: 8 },
    { size: 50, x: '80%', y: '85%', delay: 1, duration: 7 },
    { size: 30, x: '70%', y: '70%', delay: 3, duration: 9 },
    { size: 20, x: '45%', y: '90%', delay: 4, duration: 10 },
    { size: 35, x: '15%', y: '15%', delay: 0.5, duration: 7 },
    { size: 45, x: '85%', y: '10%', delay: 2.5, duration: 8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      className="z-10 flex flex-col items-center justify-center space-y-8 md:space-y-12 text-center p-6 w-full h-full relative"
    >
      {/* Local Background Hearts */}
      {localHearts.map((h, i) => (
        <FloatingHeart key={i} {...h} />
      ))}

      <div className="space-y-4 relative z-10">
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            textShadow: [
              "0 0 10px rgba(239, 68, 68, 0.2)",
              "0 0 30px rgba(239, 68, 68, 0.5)",
              "0 0 10px rgba(239, 68, 68, 0.2)"
            ]
          }}
          transition={{ 
            duration: 1.5, 
            textShadow: { repeat: Infinity, duration: 3 }
          }}
          className="text-7xl md:text-9xl font-great-vibes text-red-600 drop-shadow-lg"
        >
          Hello Sakshi
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-xl md:text-3xl font-montserrat text-pink-500 uppercase tracking-[0.4em] font-light"
        >
          Lets make Memories
        </motion.p>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-20"
      >
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              "0px 10px 20px rgba(239, 68, 68, 0.2)",
              "0px 15px 40px rgba(239, 68, 68, 0.5)",
              "0px 10px 20px rgba(239, 68, 68, 0.2)"
            ]
          }}
          transition={{ 
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
          className="relative group overflow-hidden bg-gradient-to-r from-red-500 via-rose-500 to-red-500 bg-[length:200%_auto] hover:bg-right text-white font-montserrat font-bold py-5 md:py-6 px-12 md:px-16 rounded-full text-xl md:text-2xl shadow-2xl transition-all duration-500"
        >
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
          
          <span className="relative z-10 flex items-center gap-3 tracking-wider">
            Click here <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>✨</motion.span>
          </span>
        </motion.button>
        
        <div className="absolute -inset-8 bg-pink-400/20 blur-3xl rounded-full -z-10 animate-pulse" />
      </motion.div>
    </motion.div>
  );
};
