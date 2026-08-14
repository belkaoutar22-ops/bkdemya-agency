import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* Main Brand Title - BKDEMYA */}
      <div className="flex items-center gap-1">
        <span
          className={`font-black tracking-wider text-[#f16726] uppercase leading-none ${
            isSmall ? 'text-xl' : isLarge ? 'text-3xl' : 'text-2xl'
          }`}
          style={{
            fontFamily: "'Cairo', 'Arial Black', sans-serif",
            letterSpacing: '0.08em',
          }}
        >
          BKDEMYA
        </span>
      </div>

      {/* Subtitle - BUSINESS STRATEGY SOLUTIONS */}
      <span
        className={`font-extrabold uppercase tracking-[0.16em] text-[#1b4332] leading-tight mt-0.5 ${
          isSmall ? 'text-[8px]' : isLarge ? 'text-[11px]' : 'text-[9.5px]'
        }`}
        style={{
          letterSpacing: '0.18em',
        }}
      >
        BUSINESS STRATEGY SOLUTIONS
      </span>
    </div>
  );
}
