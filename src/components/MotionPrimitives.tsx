import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  Variants
} from 'motion/react';

// ============================================================================
// A1. 3D CHARACTER REVEAL
// ============================================================================
interface AnimatedHeadline3DProps {
  text: string;
  className?: string;
  color?: string;
  delayStart?: number; // heading delay in seconds
  stagger?: number; // delay between characters (default ~0.05s)
  trigger?: 'entry' | 'view'; // page entry or first viewport entry
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
}

export const AnimatedHeadline3D: React.FC<AnimatedHeadline3DProps> = ({
  text,
  className = '',
  color = 'inherit',
  delayStart = 0.15,
  stagger = 0.045,
  trigger = 'view',
  as: Component = 'span',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Viewport trigger tracking (play once)
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.15,
  });

  useEffect(() => {
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(() => setFontsLoaded(true)).catch(() => setFontsLoaded(true));
    } else {
      setFontsLoaded(true);
    }
  }, []);

  const shouldAnimate = trigger === 'entry' ? fontsLoaded : isInView && fontsLoaded;

  if (shouldReduceMotion) {
    return (
      <Component className={`inline-block ${className}`} style={{ color }}>
        {text}
      </Component>
    );
  }

  // Split text into words to prevent letters from breaking mid-word
  const words = text.split(' ');
  let charGlobalIndex = 0;

  return (
    <Component
      ref={containerRef as any}
      className={`inline-block ${className}`}
      style={{
        color,
        perspective: '1000px',
        WebkitPerspective: '1000px',
      }}
      aria-label={text}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-block">
        {words.map((word, wordIndex) => {
          const chars = word.split('');
          return (
            <span key={wordIndex} className="inline-block whitespace-nowrap">
              {chars.map((char) => {
                const charDelay = delayStart + charGlobalIndex * stagger;
                charGlobalIndex++;

                return (
                  <motion.span
                    key={charGlobalIndex}
                    className="inline-block origin-left backface-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    initial={{
                      opacity: 0,
                      rotateY: 90,
                    }}
                    animate={
                      shouldAnimate
                        ? {
                            opacity: 1,
                            rotateY: 0,
                          }
                        : {
                            opacity: 0,
                            rotateY: 90,
                          }
                    }
                    transition={{
                      duration: 0.95,
                      delay: charDelay,
                      ease: [0.16, 1, 0.3, 1], // Smooth zero-bounce spring curve
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {/* Preserved word spacing */}
              {wordIndex < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          );
        })}
      </span>
    </Component>
  );
};

// ============================================================================
// A2. FADE-UP REVEAL
// ============================================================================
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  trigger?: 'entry' | 'view';
  className?: string;
  yOffset?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  trigger = 'view',
  className = '',
  yOffset = 20,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const shouldAnimate = trigger === 'entry' ? true : isInView;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1], // Zero visible bounce
      }}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// A3. PHOTOGRAPHIC SCALE REVEAL
// ============================================================================
interface PhotoScaleRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const PhotoScaleReveal: React.FC<PhotoScaleRevealProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${imageClassName}`} />
      </div>
    );
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover will-change-transform ${imageClassName}`}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1], // Smooth zero-bounce settling
        }}
      />
    </div>
  );
};

// ============================================================================
// A4. BACKGROUND PARALLAX
// ============================================================================
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  offset?: number;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  offset = 80,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Heavily damped spring response: stiffness 400, damping 60, mass 1
  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const smoothY = useSpring(rawY, { stiffness: 400, damping: 60, mass: 1 });

  if (shouldReduceMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${imageClassName}`} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover will-change-transform ${imageClassName}`}
        style={{
          y: smoothY,
          scale: 1.1,
        }}
      />
    </div>
  );
};

// ============================================================================
// A5. SCROLL-LINKED DECORATIVE ROTATION
// ============================================================================
interface ScrollRotateMarkProps {
  targetAngle?: number; // 135, 270, -135, 220
  size?: number;
  color?: string;
  className?: string;
}

export const ScrollRotateMark: React.FC<ScrollRotateMarkProps> = ({
  targetAngle = 135,
  size = 20,
  color = '#E50914',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const rawRotation = useTransform(scrollYProgress, [0, 1], [0, targetAngle]);
  // Heavily damped spring response: stiffness 500, damping 60, mass 1
  const smoothRotation = useSpring(rawRotation, {
    stiffness: 500,
    damping: 60,
    mass: 1,
  });

  if (shouldReduceMotion) {
    return (
      <div className={`inline-block ${className}`} style={{ width: size, height: size }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" className="w-full h-full">
          <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
          <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeLinecap="round" />
          <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        width: size,
        height: size,
        rotate: smoothRotation,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" className="w-full h-full">
        <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round" />
        <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeLinecap="round" />
        <line x1="4.93" y1="19.07" x2="19.07" y2="4.93" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
};
