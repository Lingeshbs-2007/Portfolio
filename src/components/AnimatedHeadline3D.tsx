import React from 'react';

interface AnimatedHeadline3DProps {
  text: string;
  className?: string;
  color?: string;
  delayStart?: number; // initial delay in seconds
  stagger?: number; // stagger in seconds
}

export const AnimatedHeadline3D: React.FC<AnimatedHeadline3DProps> = ({
  text,
  className = '',
  color = 'inherit',
  delayStart = 0,
  stagger = 0.04
}) => {
  return (
    <span className={`inline-block perspective-container whitespace-nowrap ${className}`} style={{ color }}>
      {text.split('').map((char, index) => {
        const charDelay = delayStart + index * stagger;
        if (char === ' ') {
          return <span key={index} className="inline-block">&nbsp;</span>;
        }
        return (
          <span
            key={index}
            className="char-reveal"
            style={{
              animationDelay: `${charDelay}s`,
              animationFillMode: 'both'
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};
