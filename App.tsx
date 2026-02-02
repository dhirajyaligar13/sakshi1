
import { useState, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HeartBackground } from './components/HeartBackground';
import { Celebration } from './components/Celebration';
import { LandingPage } from './components/LandingPage';
import { ProposalView } from './components/ProposalView';
import { MemoryPage } from './components/MemoryPage';
import { EvolutionPage } from './components/EvolutionPage';
import { DestinationPage } from './components/DestinationPage';
import { ThankYouPage } from './components/ThankYouPage';
import { BackgroundMusic } from './components/BackgroundMusic';
import { generateLoveNote } from './services/geminiService';
import { Position } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'landing' | 'proposal' | 'celebration' | 'memory' | 'evolution' | 'destination' | 'thankyou'>('landing');
  const [loveMessage, setLoveMessage] = useState("");
  const [noButtonPos, setNoButtonPos] = useState<Position>({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYes = async () => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff69b4', '#ffffff', '#ff1493', '#ffd700']
    });
    
    setCurrentPage('celebration');
    const message = await generateLoveNote();
    setLoveMessage(message);
  };

  const moveNoButton = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // Approximate button size
    const buttonWidth = 140;
    const buttonHeight = 50;
    
    const padding = 60;
    const maxX = Math.max(0, containerWidth - buttonWidth - padding);
    const maxY = Math.max(0, containerHeight - buttonHeight - padding);

    const newX = Math.random() * maxX + (padding / 2);
    const newY = Math.random() * maxY + (padding / 2);

    setNoButtonPos({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  }, []);

  const resetNoButton = () => {
    setIsNoButtonMoved(false);
    setNoButtonPos({ x: 0, y: 0 });
  };

  return (
    <div ref={containerRef} className="h-[100dvh] w-full flex items-center justify-center p-4 overflow-hidden relative selection:bg-pink-200">
      <HeartBackground />
      <BackgroundMusic />

      <AnimatePresence mode="wait">
        {currentPage === 'landing' && (
          <LandingPage key="landing" onStart={() => { resetNoButton(); setCurrentPage('proposal'); }} />
        )}
        {currentPage === 'proposal' && (
          <ProposalView 
            key="proposal"
            onYes={handleYes}
            onNoHover={moveNoButton}
            noButtonPos={noButtonPos}
            isNoButtonMoved={isNoButtonMoved}
          />
        )}
        {currentPage === 'celebration' && (
          <Celebration 
            key="celebration" 
            message={loveMessage} 
            onNext={() => { resetNoButton(); setCurrentPage('memory'); }}
          />
        )}
        {currentPage === 'memory' && (
          <MemoryPage 
            key="memory" 
            onNext={() => { resetNoButton(); setCurrentPage('evolution'); }} 
          />
        )}
        {currentPage === 'evolution' && (
          <EvolutionPage 
            key="evolution" 
            onNext={() => { resetNoButton(); setCurrentPage('destination'); }} 
          />
        )}
        {currentPage === 'destination' && (
          <DestinationPage 
            key="destination" 
            onYes={() => setCurrentPage('thankyou')}
            onNoHover={moveNoButton}
            noButtonPos={noButtonPos}
            isNoButtonMoved={isNoButtonMoved}
          />
        )}
        {currentPage === 'thankyou' && (
          <ThankYouPage key="thankyou" />
        )}
      </AnimatePresence>

      <footer className="fixed bottom-2 text-pink-400/40 text-[10px] md:text-xs font-dancing tracking-[0.2em] pointer-events-none z-0 text-center w-full">
        Made for Sakshi — Since 2021 ✨
      </footer>
    </div>
  );
};

export default App;
