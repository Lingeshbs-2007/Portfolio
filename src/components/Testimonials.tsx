import React, { useRef } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, FadeUp, ScrollRotateMark } from './MotionPrimitives';
import { motion, useScroll, useTransform, useSpring, useInView, useReducedMotion } from 'motion/react';

export const Testimonials: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const isBgInView = useInView(bgRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: bgRef,
    offset: ['start end', 'end start'],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const smoothY = useSpring(rawY, { stiffness: 400, damping: 60, mass: 1 });

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-[#0E0E0E] text-white overflow-hidden">
      {/* Cinematic Background with Photographic Scale Reveal & Restrained Parallax */}
      <div ref={bgRef} className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
        {shouldReduceMotion ? (
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic Background"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        ) : (
          <motion.img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
            alt="Cinematic Background"
            className="w-full h-[120%] -top-[10%] absolute inset-x-0 object-cover filter grayscale contrast-125 will-change-transform"
            style={{ y: smoothY }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={isBgInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        )}
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Large Heading at Upper Left: 3D character reveal, delay: 0.15s */}
        <div className="mb-20 pb-6 border-b border-neutral-800 flex items-baseline justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl tracking-tight">
              <AnimatedHeadline3D
                text="ACTIVITIES"
                color="#E50914"
                delayStart={0.15}
                trigger="view"
              />{' '}
              <AnimatedHeadline3D
                text="& HACKATHONS"
                color="#FFFFFF"
                delayStart={0.25}
                trigger="view"
              />
            </h2>
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest pt-1">
              [ TECHNICAL COMPETITIONS & PRESENTATIONS ]
            </p>
          </div>
          <ScrollRotateMark targetAngle={135} size={24} color="#E50914" />
        </div>

        {/* Conversation/testimonial group: Fade-up, delay: 0.3s */}
        <FadeUp delay={0.3} trigger="view" className="space-y-16 max-w-4xl mx-auto">
          {PORTFOLIO_CONTENT.activitiesAndEvents.map((t, idx) => (
            <motion.div
              key={t.id}
              className="space-y-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: -15, right: 15 }}
              dragElastic={0.1}
            >
              {/* Event / Participation Panel (Dark Translucent) */}
              <div className="flex items-start gap-4 max-w-2xl">
                <img
                  src={t.avatar}
                  alt={t.eventName}
                  className="w-11 h-11 rounded-full object-cover border border-neutral-700 shrink-0 filter grayscale"
                />
                <div className="p-5 sm:p-6 bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-sm sm:text-base leading-relaxed shadow-lg">
                  <div className="text-xs font-mono text-[#E50914] mb-1 font-bold">
                    {t.eventName} · {t.role}
                  </div>
                  <p>{t.initialMessage}</p>
                </div>
              </div>

              {/* Implementation & Takeaway Panel (Lighter Offset Beneath It) */}
              <div className="flex items-start gap-4 max-w-2xl ml-auto justify-end">
                <div className="p-5 sm:p-6 bg-neutral-800/90 border border-neutral-700 text-white text-sm sm:text-base leading-relaxed shadow-lg">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1 font-bold">
                    <span>{t.tag}</span>
                    <ScrollRotateMark targetAngle={idx % 2 === 0 ? 135 : -135} size={14} color="#E50914" />
                  </div>
                  <p className="font-medium text-neutral-100">{t.responseMessage}</p>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#E50914] text-white flex items-center justify-center font-headline text-xs font-bold shrink-0">
                  LB
                </div>
              </div>
            </motion.div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
};
