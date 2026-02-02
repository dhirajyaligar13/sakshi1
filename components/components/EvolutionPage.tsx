
import React from 'react';
import { motion } from 'framer-motion';

interface EvolutionPageProps {
  onNext: () => void;
}

export const EvolutionPage: React.FC<EvolutionPageProps> = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="z-10 w-full max-w-xl px-6 flex flex-col items-center justify-center text-center space-y-6 md:space-y-10"
    >
      <div className="relative w-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-10 border border-dashed border-rose-200 rounded-full opacity-20 pointer-events-none"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-full -mr-12 -mt-12 blur-2xl opacity-50" />
          
          <div className="space-y-6 relative z-10">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
              className="text-4xl md:text-5xl"
            >
              🌿
            </motion.div>

            <div className="font-caveat text-2xl md:text-3xl text-gray-800 leading-snug space-y-4">
              <p>
                If we have evolved since years then our photo should also evolve right.
              </p>
              <p className="text-red-500 font-bold italic text-3xl md:text-4xl drop-shadow-sm">
                Somewhere far from this urban jungle!!!
              </p>
            </div>

            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-6 font-montserrat bg-rose-500 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-lg shadow-lg hover:bg-rose-600 transition-all"
            >
              Where to? 🗺️
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="space-y-1"
      >
        <div className="flex justify-center gap-3 text-2xl md:text-3xl">
          <span>🌄</span><span>⛰️</span><span>🌊</span>
        </div>
        <p className="font-montserrat text-[10px] tracking-[0.3em] text-rose-300 uppercase">
          Evolution of us
        </p>
      </motion.div>
    </motion.div>
  );
};
