import React, { useRef, useState, useCallback } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  borderGlow?: boolean;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 7,
  glare = true,
  borderGlow = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [mousePos, setMousePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setMousePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setMousePos(prev => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform preserve-3d ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Dynamic Cursor Spotlight Border Glow */}
      {borderGlow && (
        <div
          className="absolute -inset-[1px] rounded-[inherit] pointer-events-none transition-opacity duration-300 z-0"
          style={{
            opacity: mousePos.opacity * 0.7,
            background: `radial-gradient(350px circle at ${mousePos.x}% ${mousePos.y}%, rgba(96, 165, 250, 0.45), transparent 70%)`,
            borderRadius: 'inherit'
          }}
        />
      )}

      {/* Main card content container */}
      <div className="relative z-10 h-full w-full preserve-3d">
        {children}
      </div>

      {/* Dynamic 3D Specular Glare */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            opacity: mousePos.opacity * 0.22,
            background: `radial-gradient(circle 280px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.4), transparent 80%)`,
            borderRadius: 'inherit'
          }}
        />
      )}
    </div>
  );
};
