
import React from 'react';
import { motion } from 'framer-motion';
import { Position } from '../types';

interface ProposalViewProps {
  onYes: () => void;
  onNoHover: () => void;
  noButtonPos: Position;
  isNoButtonMoved: boolean;
}

export const ProposalView: React.FC<ProposalViewProps> = ({ 
  onYes, 
  onNoHover, 
  noButtonPos, 
  isNoButtonMoved 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="z-10 w-full max-w-xl px-4 flex flex-col items-center justify-center min-h-[85vh] py-2"
    >
      <div className="bg-white/85 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-white/90 w-full flex flex-col max-h-[80vh] relative overflow-hidden">
        
        {/* Subtle Decorative Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-400/30" />

        {/* Header Label */}
        <div className="flex-shrink-0 text-center mb-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-rose-100 text-rose-500 px-4 py-1.5 rounded-full font-montserrat text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border border-rose-200 shadow-sm"
          >
            Since 2021 ✨
          </motion.span>
        </div>

        {/* Story Content - More compact font and spacing */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar mb-6">
          <div className="font-caveat text-xl md:text-2xl text-gray-800 space-y-4 leading-snug text-left">
            <p>
              In 2021, two school friends strategically planned a meet at Orion Mall—because clearly we were very free and very serious about life back then.
            </p>
            
            <p>
              We laughed, had fun, and clicked a photo thinking, <span className="text-rose-500 italic">“Bas, memory ban gayi.”</span> Then life happened—no calls, no texts, no existence… yet somehow emotional Wi-Fi stayed connected. 
            </p>
            
            <p>
              Cut to now, we met again—not to relive nostalgia, but to heal and professionally laugh at our past stupidity. It was a full roller-coaster ride. Science calls it a cosmic connection; I call it auto-reconnect after years without the password. 
            </p>
            
            <p>
              This time, we’re upgraded versions—more mature, smarter, and pretending to be responsible adults. We laughed at our old drama like survivors. 
            </p>
            
            <div className="text-red-600 font-bold border-l-4 border-red-500/40 pl-4 py-1 italic bg-red-50/20 rounded-r-xl">
              Now the only logical next step is… recreating that same photo—with the same place, better decisions, your cute smile 2.0, and yes, absolutely no third wheel this time.
            </div>
          </div>
        </div>

        {/* Interaction Footer - Scaled down */}
        <div className="mt-auto pt-6 border-t border-rose-50 flex-shrink-0 flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-4xl font-great-vibes text-red-600 text-center leading-tight">
            So… are you ready to see that photo? 😌📸
          </h2>

          <div className="flex gap-4 w-full justify-center items-center pb-4 relative h-14">
            <button
              onClick={onYes}
              className="font-montserrat bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 active:scale-95 transition-all z-10 min-w-[120px]"
            >
              Yes! 💖
            </button>

            <motion.button
              onMouseEnter={onNoHover}
              onClick={onNoHover}
              animate={isNoButtonMoved ? {
                position: 'fixed',
                left: noButtonPos.x,
                top: noButtonPos.y,
              } : {}}
              className="font-montserrat bg-white text-gray-400 font-bold py-3 px-8 rounded-full text-lg shadow-sm z-50 border border-gray-100 whitespace-nowrap opacity-50"
            >
              No
            </motion.button>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.01);
          margin: 10px 0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 63, 94, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 63, 94, 0.4);
        }
      `}</style>
    </motion.div>
  );
};
