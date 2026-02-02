
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export const ThankYouPage: React.FC = () => {
  useEffect(() => {
    // Continuous confetti for a while
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center space-y-10"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-8xl md:text-9xl mb-4"
      >
        ❤️
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="space-y-6 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-xl border border-white"
      >
        <h1 className="text-5xl md:text-7xl font-great-vibes text-red-600 drop-shadow-md">
          Thank you, Sakshi.
        </h1>
        
        <p className="font-caveat text-2xl md:text-4xl text-gray-800 leading-relaxed px-4">
          I hope this trip revives our inner child and makes life feel alive again.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6 text-4xl md:text-5xl mt-8"
        >
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>🐚</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}>🌅</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}>🚐</motion.span>
          <motion.span animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}>🌊</motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="pt-8"
      >
        <p className="font-montserrat text-[10px] md:text-xs tracking-[0.5em] text-rose-400 uppercase font-bold">
          The best is yet to come
        </p>
      </motion.div>
    </motion.div>
  );
};
