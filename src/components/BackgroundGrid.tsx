'use client';

import React, { useEffect, useState } from 'react';

export const BackgroundGrid: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Near-Black Base */}
      <div className="absolute inset-0 bg-[#07080a]" />

      {/* Subtle Hairline Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle Top-Center Ambient Silver Glow */}
      <div
        className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full opacity-[0.12] filter blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(226, 232, 240, 0.8) 0%, rgba(148, 163, 184, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Interactive Cursor Spotlight */}
      {isMounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 pointer-events-none filter blur-[90px]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(226, 232, 240, 0.04) 0%, transparent 65%)',
          }}
        />
      )}

      {/* Subtle Vignette on edges to frame content */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_0%,rgba(7,8,10,0.85)_100%]" />
    </div>
  );
};
