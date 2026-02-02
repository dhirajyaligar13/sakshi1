
import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HeartBackground } from './components/HeartBackground';
import { Celebration } from './components/Celebration';
import { generateLoveNote } from './services/geminiService';
import { Position } from './types';

const App: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [loveMessage, setLoveMessage] = useState("");
  const [noButtonPos, setNoButtonPos] = useState<Position>({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = async () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff', '#ff1493']
    });
    
    setHasAccepted(true);
    const message = await generateLoveNote();
    setLoveMessage(message);
  };

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Calculate a safe area to avoid the button being unreachable
    const buttonWidth = 100;
    const buttonHeight = 50;
    
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPos({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen w-full flex items-center justify-center p-4 overflow-hidden relative">
      <HeartBackground />

      <AnimatePresence mode="wait">
        {!hasAccepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="z-10 bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-pink-100 flex flex-col items-center space-y-8 max-w-lg w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-inner bg-pink-100 border-4 border-white"
            >
              <img 
                src="https://picsum.photos/seed/romantic-cat/400/400" 
                alt="Cute Valentine"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-great-vibes text-red-600 text-center drop-shadow-sm leading-tight">
              Will you be my Valentine?
            </h1>

            <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
              <button
                onClick={handleYes}
                className="font-montserrat bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-2xl shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-200 min-w-[140px]"
              >
                Yes! 💖
              </button>

              <motion.button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton} // For touch devices
                animate={isNoButtonMoved ? {
                  position: 'fixed',
                  left: noButtonPos.x,
                  top: noButtonPos.y,
                } : {}}
                className={`font-montserrat bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-12 rounded-full text-2xl shadow-md transition-colors min-w-[140px] z-50`}
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <Celebration key="celebration" message={loveMessage} />
        )}
      </AnimatePresence>

      <footer className="fixed bottom-4 text-pink-400 text-lg opacity-60 font-dancing tracking-widest">
        Made with love just for you
      </footer>
    </div>
  );
};

export default App;
