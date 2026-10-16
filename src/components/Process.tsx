import React from 'react';
import { PORTFOLIO_CONTENT } from '../data/portfolioContent';
import { AnimatedHeadline3D, FadeUp, ScrollRotateMark } from './MotionPrimitives';
import { motion, useReducedMotion } from 'motion/react';

export const Process: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Double brands array for seamless continuous loop ticker
  const tickerBrands = [...PORTFOLIO_CONTENT.brands, ...PORTFOLIO_CONTENT.brands];

  return (
    <section id="process" className="py-24 sm:py-36 bg-[#0A0A0A] text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Large Heading: "FROM IDEA" on left, crosses, "TO LAUNCH" on right */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-neutral-800">
          {/* Left heading: 3D character reveal, delay: 0.15s */}
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            <AnimatedHeadline3D
              text="FROM IDEA"
              color="#FFFFFF"
              delayStart={0.15}
              trigger="view"
            />
          </h2>

          {/* Central decorative group: Fade-up, delay: 0.2s, scroll-target rotation toward 135, 220, -135 */}
          <FadeUp delay={0.2} trigger="view" className="hidden md:flex items-center gap-4">
            <ScrollRotateMark targetAngle={135} size={20} color="#FFFFFF" />
            <ScrollRotateMark targetAngle={220} size={20} color="#E50914" />
            <ScrollRotateMark targetAngle={-135} size={20} color="#FFFFFF" />
          </FadeUp>

          {/* Right heading: 3D character reveal, delay: 0.3s */}
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-[#E50914] tracking-tight text-left md:text-right">
            <AnimatedHeadline3D
              text="TO LAUNCH"
              color="#E50914"
              delayStart={0.3}
              trigger="view"
            />
          </h2>
        </div>

        {/* Short Introductory Paragraph: Fade-up, delay: 0.4s */}
        <FadeUp delay={0.4} trigger="view" className="max-w-2xl mx-auto my-12 text-center text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
          <p>{PORTFOLIO_CONTENT.process.intro}</p>
        </FadeUp>

        {/* Four Process Cards in a Desktop Row: Fade-up delays: 0.5, 0.6, 0.7, and 0.8 seconds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PORTFOLIO_CONTENT.process.steps.map((step, idx) => {
            let cardClasses = '';
            let textClasses = '';
            let bulletColor = '';

            switch (step.variant) {
              case 'red':
                cardClasses = 'bg-[#E50914] text-white border border-[#E50914] shadow-xl';
                textClasses = 'text-white';
                bulletColor = 'text-white';
                break;
              case 'charcoal':
                cardClasses = 'bg-[#181818] text-white border border-neutral-800 shadow-xl';
                textClasses = 'text-neutral-300';
                bulletColor = 'text-[#E50914]';
                break;
              case 'light':
                cardClasses = 'bg-[#FFFFFF] text-black border border-white shadow-xl';
                textClasses = 'text-neutral-800';
                bulletColor = 'text-[#E50914]';
                break;
              case 'outline':
              default:
                cardClasses = 'bg-[#0E0E0E] text-white border border-neutral-800 shadow-xl';
                textClasses = 'text-neutral-300';
                bulletColor = 'text-[#E50914]';
                break;
            }

            return (
              <FadeUp
                key={step.step}
                delay={0.5 + idx * 0.1}
                trigger="view"
                className="h-full"
              >
                <div
                  className={`px-5 sm:px-6 xl:px-7 py-7 sm:py-8 flex flex-col justify-between h-full min-h-[380px] sm:min-h-[420px] transition-transform duration-200 hover:-translate-y-1.5 overflow-hidden ${cardClasses}`}
                >
                  <div>
                    {/* Step Title & Number Header: shifted left, neat fit */}
                    <div className="flex items-start justify-between gap-3 mb-8 pb-4 border-b border-current/20">
                      <h3 className="font-headline text-lg sm:text-xl lg:text-[1.2rem] xl:text-[1.35rem] font-bold tracking-tight uppercase text-left -ml-1 break-words">
                        {step.title}
                      </h3>
                      <span className="font-mono text-lg sm:text-xl font-bold opacity-80 shrink-0">
                        {step.step}
                      </span>
                    </div>

                    {/* Feature Bullets */}
                    <ul className="space-y-3.5">
                      {step.features.map((feat, i) => (
                        <li key={i} className={`text-xs sm:text-sm flex items-start gap-2.5 ${textClasses}`}>
                          <span className={`font-bold ${bulletColor}`}>•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-current/15 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase opacity-75">
                    <span>PHASE {step.step}</span>
                    <ScrollRotateMark
                      targetAngle={idx % 2 === 0 ? 135 : -135}
                      size={14}
                      color={step.variant === 'light' ? '#000000' : '#FFFFFF'}
                    />
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Academic & Learning Affiliations Section: Fade-up delay: 0.9s */}
        <FadeUp delay={0.9} trigger="view" className="mt-28 pt-16 border-t border-neutral-800 text-center overflow-hidden">
          <h4 className="font-headline text-lg sm:text-xl tracking-wider text-neutral-400 mb-10 uppercase">
            <span>INSTITUTIONS & </span>
            <span className="text-[#E50914]">LEARNING AFFILIATIONS</span>
          </h4>

          {/* Slow continuous ticker (~20px per sec, seamless loop, constant speed on hover, not draggable) */}
          <div className="relative w-full overflow-hidden">
            {shouldReduceMotion ? (
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-500 font-headline text-base sm:text-xl tracking-wider uppercase opacity-75">
                {PORTFOLIO_CONTENT.brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2 px-4 py-2">
                    <ScrollRotateMark targetAngle={135} size={16} color="#E50914" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex items-center gap-12 whitespace-nowrap will-change-transform"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 28, // ~20px per sec calibration
                }}
              >
                {tickerBrands.map((brand, i) => (
                  <div
                    key={`${brand}-${i}`}
                    className="flex items-center gap-3 px-6 py-2 text-neutral-400 font-headline text-base sm:text-xl tracking-wider uppercase opacity-80"
                  >
                    <ScrollRotateMark targetAngle={135} size={16} color="#E50914" />
                    <span>{brand}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
