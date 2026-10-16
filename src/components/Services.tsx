import React, { useRef } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, ScrollRotateMark } from './MotionPrimitives';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true, // Play once when entering view - strictly preserves position and avoids collision on scroll
    amount: 0.15,
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 sm:py-32 bg-white text-black relative overflow-hidden"
    >
      {/* Partially Obscured Blurred Background Headline - subtle typographic atmosphere */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView || shouldReduceMotion ? { opacity: 0.12 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="font-headline text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tighter text-center leading-none text-black filter blur-[2px]">
          TECHNICAL FOCUS <br />
          <span className="text-[#E50914]">& PRACTICAL</span> SOFTWARE
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <ScrollRotateMark targetAngle={135} size={20} color="#E50914" />
            <h2 className="font-headline text-3xl sm:text-5xl text-black tracking-tight">
              <AnimatedHeadline3D
                text="TECHNICAL INTERESTS & SKILLS"
                color="#000000"
                delayStart={0.3}
                trigger="view"
              />
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
            [ 04 FOCUS AREAS ]
          </span>
        </div>

        {/* Unified 4-Card Composition - Perfectly Aligned, No Collisions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PORTFOLIO_CONTENT.services.map((service, index) => {
            const isDark = service.theme === 'dark';

            return (
              <motion.div
                key={service.id}
                className="h-full flex flex-col"
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                animate={
                  isInView || shouldReduceMotion
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div
                  className={`px-5 py-7 sm:px-6 sm:py-8 xl:px-7 flex flex-col justify-between h-full min-h-[460px] shadow-lg transition-transform duration-300 hover:-translate-y-1 overflow-hidden ${
                    isDark
                      ? 'bg-[#0A0A0A] text-white border border-neutral-800'
                      : 'bg-[#F4F4F6] text-black border border-neutral-200'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Title: reduced font size, shifted slightly left, fits neatly in box */}
                    <h3
                      className={`font-headline text-base sm:text-lg lg:text-[1.12rem] xl:text-[1.22rem] tracking-tight leading-snug uppercase text-left -ml-0.5 xl:-ml-1 break-words ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Bullet Feature List */}
                    <ul className="space-y-2.5 pt-4 border-t border-current/10">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className={`text-xs leading-relaxed flex items-start gap-2.5 ${
                            isDark ? 'text-neutral-300' : 'text-neutral-700'
                          }`}
                        >
                          <span className="text-[#E50914] font-bold text-sm leading-none shrink-0">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Time-Period Label Near Bottom */}
                  <div className="pt-4 mt-6 border-t border-current/10 font-headline text-xs tracking-wider text-[#E50914] font-bold uppercase">
                    {service.timePeriod}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
