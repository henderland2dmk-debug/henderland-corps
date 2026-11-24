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
      {/* Deep Navy Base Background (#07111F) */}
      <div className="absolute inset-0 bg-[#07111F]" />

      {/* Subtle Precision Grid with Cyan & Blue Tint */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(67, 217, 245, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(77, 141, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Primary Top-Center Ambient Glow: Cyan to Royal Blue (#43D9F5 -> #4D8DFF) */}
      <div
        className="absolute -top-[240px] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] rounded-full opacity-[0.16] filter blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(67, 217, 245, 0.7) 0%, rgba(77, 141, 255, 0.35) 45%, rgba(167, 139, 250, 0.1) 70%, transparent 85%)',
        }}
      />

      {/* Secondary Ambient Accent Glow (Right side subtle architectural lighting) */}
      <div
        className="absolute top-[20%] right-[-150px] w-[600px] h-[600px] rounded-full opacity-[0.08] filter blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(77, 141, 255, 0.8) 0%, rgba(67, 217, 245, 0.3) 50%, transparent 75%)',
        }}
      />

      {/* Interactive Cursor Spotlight with subtle cyan sheen */}
      {isMounted && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 pointer-events-none filter blur-[90px]"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(67, 217, 245, 0.045) 0%, rgba(77, 141, 255, 0.02) 40%, transparent 65%)',
          }}
        />
      )}

      {/* Framing Vignette to focus eyes on content */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,rgba(7,17,31,0.85)_100%]" />
    </div>
  );
};
