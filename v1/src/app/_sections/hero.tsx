import React from 'react';
import dynamic from 'next/dynamic';
import { ShootingStars } from '@/components/cult/shooting-stars';
import { StarsBackground } from '@/components/cult/stars-background';
import AnimatedChevron from '@/components/animated-chevron';

const BlackHole = dynamic(() => import('@/components/black-hole/black-hole'), {
  ssr: false,
});

export function BlackHoleHero({ scrollPosition }) {
  const FADE_START = 400;
  const FADE_END = 650;

  const calculateOpacity = () => {
    if (scrollPosition <= FADE_START) return 1;
    if (scrollPosition >= FADE_END) return 0;
    return 1 - (scrollPosition - FADE_START) / (FADE_END - FADE_START);
  };

  const textOpacity = calculateOpacity();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="absolute inset-0 z-20">
        <BlackHole scrollPosition={scrollPosition} />
      </div>
      <div
        className="absolute z-30 top-[15%] left-[19%] md:top-0 md:left-0 transition-opacity duration-300"
        style={{ opacity: textOpacity }}
      >
        <h1 className="text-[10vw] font-thin text-white leading-none m-0 p-0 shadow-glow">
          HEIGHLINER
        </h1>
      </div>
      <div
        className="absolute z-30 bottom-[78%] right-[31%] md:bottom-0 md:right-0 text-right transition-opacity duration-300"
        style={{ opacity: textOpacity }}
      >
        <h2 className="text-[2.5vw] font-thin text-white whitespace-nowrap m-0 p-0 shadow-glow">
          LEGAL RESEARCH MODERNIZED
        </h2>
      </div>
      <div className="hidden md:block">
        <AnimatedChevron />
      </div>
    </div>
  );
}