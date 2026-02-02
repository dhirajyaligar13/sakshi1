
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Position } from '../types';

interface DestinationPageProps {
  onYes: () => void;
  onNoHover: () => void;
  noButtonPos: Position;
  isNoButtonMoved: boolean;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({ 
  onYes,
  onNoHover, 
  noButtonPos, 
  isNoButtonMoved 
}) => {
  const finalConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#4ade80', '#fb7185', '#ffffff']
    });
    
    // Multiple bursts for extra celebration
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#38bdf8', '#fb7185']
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#4ade80', '#ffffff']
      });
    }, 200);

    // Navigate to final page after a short delay
    setTimeout(onYes, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="z-10 w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center space-y-4 md:space-y-8 py-2 max-h-screen overflow-hidden"
    >
      <div className="bg-white/95 backdrop-blur-2xl p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white relative overflow-hidden w-full flex flex-col items-center">
        {/* Decorative Nature Accents */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 md:space-y-6 w-full">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl"
          >
            🏖️🚙🌊
          </motion.div>

          <h2 className="font-great-vibes text-4xl md:text-6xl text-red-600 drop-shadow-sm leading-tight">
            The Ultimate Goal
          </h2>

          <div className="space-y-3 md:space-y-5">
            <p className="font-caveat text-xl md:text-3xl text-gray-700 leading-relaxed italic px-2">
              What if we recreate that beach photo on Gokarna’s shore during a summer 2026 road trip?
            </p>
            <div className="h-0.5 w-12 bg-rose-200 mx-auto rounded-full" />
            <p className="font-montserrat font-bold text-sky-500 text-[10px] md:text-xs tracking-[0.3em] uppercase">
              Beyond the Urban Jungle
            </p>
          </div>

          <div className="pt-4 flex flex-col md:flex-row gap-6 justify-center items-center relative min-h-[120px] w-full">
            <motion.button
              onClick={finalConfetti}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 md:px-14 py-3 md:py-4 bg-gradient-to-r from-sky-400 via-green-400 to-rose-400 rounded-full text-white font-bold text-xl md:text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 z-10 min-w-[160px]"
            >
              <span className="relative z-10 text-nowrap">Yesssss! 👫✨</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full" />
            </motion.button>

            {/* Runaway No Button with Black Theme */}
            <motion.button
              onMouseEnter={onNoHover}
              onMouseDown={onNoHover}
              onClick={onNoHover}
              animate={isNoButtonMoved ? {
                position: 'fixed',
                left: noButtonPos.x,
                top: noButtonPos.y,
                scale: 0.9
              } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`font-montserrat bg-black text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg z-50 border border-zinc-800 whitespace-nowrap transition-all duration-75 cursor-default hover:bg-zinc-900 active:scale-90 ${isNoButtonMoved ? 'pointer-events-auto' : ''}`}
            >
              No way
            </motion.button>
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="font-dancing text-lg md:text-xl text-rose-400 drop-shadow-sm"
      >
        I'm already excited for Summer 2026...
      </motion.p>
    </motion.div>
  );
};
