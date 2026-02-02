
import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface MemoryPageProps {
  onNext: () => void;
}

export const MemoryPage: React.FC<MemoryPageProps> = ({ onNext }) => {
  const triggerMoreConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#fb7185', '#fda4af', '#ffffff']
    });
    setTimeout(onNext, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="z-10 w-full max-w-lg px-6 flex flex-col items-center justify-center min-h-[90vh] py-4"
    >
      <div className="bg-white/95 backdrop-blur-2xl p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white w-full flex flex-col items-center gap-5 md:gap-7 overflow-hidden">
        
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-great-vibes text-rose-600">Our First Chapter</h2>
          <p className="font-montserrat text-[10px] tracking-[0.2em] text-gray-400 uppercase">A moment frozen in time</p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative bg-white p-2 pb-8 md:pb-10 shadow-xl rounded-sm border border-gray-100 transform -rotate-1 w-full max-w-[200px] md:max-w-[240px]"
        >
          <div className="relative overflow-hidden w-full aspect-[4/5] bg-gray-50">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
              alt="Back in 2021"
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-rose-500/10 mix-blend-overlay"></div>
            <div className="absolute top-2 left-2 bg-white/40 backdrop-blur-md px-2 py-0.5 rounded-full text-[8px] text-white font-bold uppercase tracking-widest">
              Orion Mall 📍
            </div>
          </div>
          <p className="absolute bottom-1.5 left-0 w-full text-center font-caveat text-2xl md:text-3xl text-gray-700">
            Back in 2021 ✨
          </p>
        </motion.div>

        <div className="text-center space-y-4 md:space-y-6 flex flex-col items-center">
          <p className="font-caveat text-xl md:text-2xl text-gray-600 leading-snug italic px-4">
            Your cute smile is already perfect, but it deserves a new picture. I know many souls who were meant to be with us aren’t here today, but nonetheless, you deserve to smile.
          </p>
          
          <motion.button
            onClick={triggerMoreConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-montserrat bg-red-600 text-white font-bold py-2.5 px-8 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:bg-red-700 transition-colors w-fit"
          >
            Let's Recreate This! 🥂
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
