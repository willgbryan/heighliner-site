"use client"
import dynamic from 'next/dynamic';

const BlackHole = dynamic(() => import('@/components/black-hole/black-hole'), {
  ssr: false
});

export function BlackHoleHero({ scrollPosition }) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <BlackHole scrollPosition={scrollPosition} />
    </div>
  );
}