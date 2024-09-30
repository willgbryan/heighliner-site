"use client"
import dynamic from 'next/dynamic';

const BlackHole = dynamic(() => import('@/components/black-hole/black-hole'), {
  ssr: false
});

export function BlackHoleHero({ scrollPosition }) {
  // Define the scroll thresholds for fade-out start and end
  const FADE_START = 400; // Start fading out at 100px scroll
  const FADE_END = 650;   // Fully faded out at 500px scroll

  // Calculate opacity based on scroll position
  const calculateOpacity = () => {
    if (scrollPosition <= FADE_START) return 1;
    if (scrollPosition >= FADE_END) return 0;
    return 1 - (scrollPosition - FADE_START) / (FADE_END - FADE_START);
  };

  const textOpacity = calculateOpacity();

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <BlackHole scrollPosition={scrollPosition} />
      <div style={{
        position: 'absolute',
        top: '0%',
        left: '0%',
        zIndex: 10,
        opacity: textOpacity,
        transition: 'opacity 0.3s ease-out'
      }}>
        <h1 style={{
          fontSize: '10vw',
          fontWeight: 'thin',
          color: 'white',
          textShadow: '0 0 10px rgba(255,255,255,0.5)',
          margin: 0,
          padding: 0,
          lineHeight: 1
        }}>
          HEIGHLINER
        </h1>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '2%',
        right: '2%',
        zIndex: 10,
        textAlign: 'right',
        opacity: textOpacity,
        transition: 'opacity 0.3s ease-out'
      }}>
        <h2 style={{
          fontSize: '2.5vw',
          fontWeight: 'thin',
          color: 'white',
          textShadow: '0 0 10px rgba(255,255,255,0.5)',
          margin: 0,
          padding: 0,
          whiteSpace: 'nowrap'
        }}>
          LEGAL RESEARCH MODERNIZED
        </h2>
      </div>
    </div>
  );
}