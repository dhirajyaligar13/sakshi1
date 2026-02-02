
import React, { useEffect, useRef } from 'react';

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const targetVolume = 0.3;
  const fadeDuration = 3000; // 3 seconds fade in

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Start at 0 for fade in
    audio.volume = 0;
    
    const playAudio = () => {
      if (!audio) return;
      audio.play().then(() => {
        // Linear fade-in logic
        const startTime = Date.now();
        const fadeInterval = setInterval(() => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / fadeDuration, 1);
          
          if (audio) {
            audio.volume = progress * targetVolume;
          }

          if (progress === 1) {
            clearInterval(fadeInterval);
          }
        }, 50);
      }).catch(err => {
        // Autoplay is often blocked by browsers until first interaction
        console.debug("Autoplay blocked, waiting for user interaction.");
      });
    };

    // Attempt to play immediately
    playAudio();

    // Setup listeners for first interaction to satisfy browser policies
    const handleFirstInteraction = () => {
      playAudio();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      /* A sober, calm instrumental piano track from Pixabay */
      src="https://cdn.pixabay.com/audio/2022/03/10/audio_c8c8a73484.mp3"
      loop
      style={{ display: 'none' }}
      aria-hidden="true"
    />
  );
};
