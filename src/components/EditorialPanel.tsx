import React, { useRef } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { motion, useScroll, useTransform, useSpring, useInView, useReducedMotion } from 'motion/react';

export const EditorialPanel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Background parallax: restrained vertical image transform
  // Starting values include offset ~ -80px to +80px
  const rawY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const smoothY = useSpring(rawY, { stiffness: 400, damping: 60, mass: 1 });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[55vh] sm:h-[70vh] lg:h-[82vh] overflow-hidden bg-black"
    >
      {shouldReduceMotion ? (
        <img
          src={PORTFOLIO_CONTENT.editorialBanner.image}
          alt="Editorial Motion Panel"
          className="w-full h-full object-cover object-center filter contrast-125 saturate-110"
        />
      ) : (
        <motion.img
          src={PORTFOLIO_CONTENT.editorialBanner.image}
          alt="Editorial Motion Panel"
          className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover object-center filter contrast-125 saturate-110 will-change-transform"
          style={{ y: smoothY }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={isInView ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 1.2 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1], // Smooth zero-bounce settling
          }}
        />
      )}
      {/* Subtle vignette border matching reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
};
