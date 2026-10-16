import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, ScrollRotateMark } from './MotionPrimitives';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false, // Replay in reference
    amount: 0.15,
  });
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Directional offsets for the four cards:
  // Card 0: X +100px, Y +100px
  // Card 1: X -100px, Y +100px
  // Card 2: X +50px, Y -50px
  // Card 3: X -100px, Y -100px
  const getInitialOffset = (idx: number) => {
    const factor = isMobile ? 0.35 : 1.0;
    switch (idx % 4) {
      case 0:
        return { x: 100 * factor, y: 100 * factor };
      case 1:
        return { x: -100 * factor, y: 100 * factor };
      case 2:
        return { x: 50 * factor, y: -50 * factor };
      case 3:
      default:
        return { x: -100 * factor, y: -100 * factor };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 sm:py-36 bg-white text-black relative overflow-hidden"
    >
      {/* Partially Obscured Blurred Background Headline - faded with same section-triggered timing */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView || shouldReduceMotion ? { opacity: 0.15 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
      >
        <div className="font-headline text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tighter text-center leading-none text-black filter blur-[2px]">
          TECHNICAL FOCUS <br />
          <span className="text-[#E50914]">& PRACTICAL</span> SOFTWARE
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-neutral-200">
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

        {/* Staggered Offset 4-Card Composition with Directional Entrances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {PORTFOLIO_CONTENT.services.map((service, index) => {
            const isDark = service.theme === 'dark';
            const offsetClasses = [
              'lg:mt-0',
              'lg:mt-16',
              'lg:mt-6',
              'lg:mt-24',
            ][index % 4];

            const initOffset = getInitialOffset(index);

            return (
              <motion.div
                key={service.id}
                className={offsetClasses}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: initOffset.x,
                        y: initOffset.y,
                        scale: 1,
                      }
                }
                animate={
                  isInView || shouldReduceMotion
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        x: initOffset.x,
                        y: initOffset.y,
                        scale: 1,
                      }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.44, 0, 0.56, 1], // Smooth cubic-bezier specified in reference
                }}
              >
                <div
                  className={`p-8 sm:p-9 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] shadow-xl ${
                    isDark
                      ? 'bg-[#0A0A0A] text-white border border-neutral-900'
                      : 'bg-[#F4F4F6] text-black border border-neutral-200'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Title */}
                    <h3
                      className={`font-headline text-2xl sm:text-3xl tracking-tight leading-tight uppercase ${
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
                    <ul className="space-y-3 pt-4 border-t border-current/10">
                      {service.features.map((feat, i) => (
                        <li
                          key={i}
                          className={`text-xs sm:text-sm flex items-start gap-2.5 ${
                            isDark ? 'text-neutral-300' : 'text-neutral-800'
                          }`}
                        >
                          <span className="text-[#E50914] font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Red Time-Period Label Near Bottom */}
                  <div className="pt-6 border-t border-current/10 font-headline text-xs tracking-wider text-[#E50914] font-bold uppercase">
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
