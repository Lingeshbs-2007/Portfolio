import React from 'react';

interface CrosshairMarkProps {
  className?: string;
  size?: number;
  color?: 'default' | 'white' | 'red' | 'black';
  spin?: boolean;
}

export const CrosshairMark: React.FC<CrosshairMarkProps> = ({
  className = '',
  size = 20,
  color = 'default',
  spin = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${spin ? 'animate-spin-slow' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* 8-pointed Swiss crosshair / asterisk icon */}
      {/* Vertical spoke */}
      <line x1="12" y1="2" x2="12" y2="22" stroke={color === 'red' ? '#E50914' : color === 'white' ? '#FFFFFF' : color === 'black' ? '#111111' : '#E50914'} strokeWidth="2.4" strokeLinecap="square" />
      {/* Horizontal spoke */}
      <line x1="2" y1="12" x2="22" y2="12" stroke={color === 'red' ? '#E50914' : color === 'white' ? '#FFFFFF' : color === 'black' ? '#111111' : '#FFFFFF'} strokeWidth="2.4" strokeLinecap="square" />
      {/* Diagonal 45 deg */}
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke={color === 'black' ? '#111111' : '#E50914'} strokeWidth="2.2" strokeLinecap="square" />
      {/* Diagonal 135 deg */}
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke={color === 'black' ? '#111111' : '#FFFFFF'} strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
};
